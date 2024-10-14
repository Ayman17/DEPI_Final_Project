import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase';
import React from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SignInGoogle = () => {
  const handleAuthEvent = async () => {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  const checkUsersFromDB = async () => {
    const userDoc = await getDoc(doc(db, 'users/' + auth.currentUser.uid));
    userDoc.exists() ? console.log('fetched data') : await addNewUserToDB();
  };
  const addNewUserToDB = async () => {
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      name: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      bio: 'I hope you like my project!',
      photoUrl: auth.currentUser.photoURL,
      reviews: [],
      watched: [],
      favourites: [],
    }).catch((err) => {
      console.log(err);
    });
  };

  const onLogin = async () => {
    await handleAuthEvent().then(async () => {
      await checkUsersFromDB();
    });
  };
  return (
    <>
      <p
        className="sans-serif z-50 mx-3 font-bold uppercase tracking-widest text-sh-grey md:mx-0 md:ml-4 md:text-xs md:hover:cursor-pointer md:hover:text-p-white"
        onClick={onLogin}
      >
        Sign In With Google
      </p>
    </>
  );
};

export default SignInGoogle;
