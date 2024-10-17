import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Loading() {
  return (
    <div className="my-5 d-flex justify-content-center align-items-center w-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
