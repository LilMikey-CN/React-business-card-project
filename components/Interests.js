import React from "react"

const interests_text = (
  "Cooking, Chinese Tea fanatic, Tech geek and TV series lover."
)

export default function Interests() {
  return (
    <div>
      <h1 className="interests-title section-title">Interests Page</h1>
      <div className="interests-text text-para">
        {interests_text}
      </div>
    </div>
  )
}
