import React from "react"


const about_text = (
  "I am a frontend developer passinate to find the best tool to use in the market, and eager to learn to use them to produce fast dlivery."
)

export default function About() {
  return (
    <div>
      <h1 className="about-title section-title">About Page</h1>
      <div className="about-text text-para">
        {about_text}
      </div>
    </div>
  )
}
