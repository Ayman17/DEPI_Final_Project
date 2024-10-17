import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Loading() {
  return (
    <div className="mt-5 d-flex align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
