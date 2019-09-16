import React, { useState, useEffect } from "react"

const Minutes = () => {
  const [min, setMin] = useState(1)
  useEffect(() => {
    const handler = () => {
      setMin(Math.floor(Math.random() * 60) + 1)
    }
    const id = setInterval(handler, 5000)
    handler()
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <text
      transform="translate(84.79 130.85)"
      style={{
        fontSize: 21,
        fill: "#666",
        fontFamily: "Noto Sans KR, sans-serif",
        fontWeight: "bold",
      }}
    >
      {min}분
    </text>
  )
}

export default Minutes
