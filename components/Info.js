import React from "react"

export default function Info() {
  return (
    <div>
      <h1 className="name-text info-label">James Black</h1>
      <h2 className="title-text info-label">Frontend Developer</h2>
      <h3 className="website-text info-label">jamesblack.website</h3>
      <button className="email-btn info-label">
        <img className="email-icon" src="../images/email-icon.png" /> 
        <span> Email </span>
      </button>
    </div>
  )
}
