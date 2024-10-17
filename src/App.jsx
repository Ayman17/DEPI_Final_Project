import React, { useEffect, useState } from 'react';


import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './pages/MyRoutes';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const [fetchResults, setFetchResults] = useState([]);
  const [isProfileUpdated, setProfileUpdated] = useState(false);
  const [isNavTransparent, setNavTransparent] = useState(false);


  const [newDataGained, setNewDataGained] = useState(false);

  const fetchRequest = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFetchResults(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar
          authStatus={authStatus}
          fetchRequest={fetchRequest}
          isProfileUpdated={isProfileUpdated}
          setProfileUpdated={setProfileUpdated}
          setNavTransparent={setNavTransparent}
          isNavTransparent={isNavTransparent}
          setNewDataGained={setNewDataGained}
        />

        <MyRoutes
          authStatus={authStatus}
          fetchResults={fetchResults}
          fetchRequest={fetchRequest}

          setFetchResults={setFetchResults}

          setProfileUpdated={setProfileUpdated}
          isProfileUpdated={isProfileUpdated}

          setNewDataGained={setNewDataGained}
          newDataGained={newDataGained}

          isNavTransparent={isNavTransparent}
          setNavTransparent={setNavTransparent}
        />
        
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
