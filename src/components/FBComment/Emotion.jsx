import React, { useEffect, useState } from "react"
import { Motion, spring } from "react-motion"

const EmotionButton = ({ mad }) => {
  return (
    <Motion defaultStyle={{ y: 0 }} style={{ y: spring(mad ? 1 : 0) }}>
      {({ y }) => (
        <g
          style={{
            transform: `scaleY(${y})`,
            opacity: y,
          }}
        >
          <rect
            x="437.5"
            y="90.5"
            width="58"
            height="30"
            rx="12.5"
            style={{
              fill: "#fff",
            }}
          />
          <circle
            cx="473.5"
            cy="210.5"
            r="11.5"
            transform="translate(76.74 461.23) rotate(-67.25)"
            style={{
              fill: "url(#a053fa39-cf0a-4dba-87ea-9ca214f436da)",
            }}
          />
          <path
            d="M470,213.22a1,1,0,1,1-1-1A1,1,0,0,1,470,213.22Z"
            transform="translate(-19.5 -104.5)"
          />
          <circle cx="458.54" cy="108.72" r="1.02" />
          <path
            d="M466.16,210.49l-.38.53s2.08,2.27,6.62,2.19v-.75A8.65,8.65,0,0,1,466.16,210.49Z"
            transform="translate(-19.5 -104.5)"
          />
          <path
            d="M475,212.51v.7a9.7,9.7,0,0,0,6.56-2.22l-.47-.48S479.49,212.35,475,212.51Z"
            transform="translate(-19.5 -104.5)"
          />
          <rect x="451.2" y="112.54" width="5.67" height="0.85" />
          <path
            d="M493.59,217.4H497V205.92h-2.73V204.7a9.81,9.81,0,0,0,3.19-1.09H499V217.4H502V219h-8.44Z"
            transform="translate(-19.5 -104.5)"
          />
        </g>
      )}
    </Motion>
  )
}
const Emotion = () => {
  const [mad, setMad] = useState(false)
  useEffect(() => {
    const handler = () => {
      setMad(false)
      setTimeout(() => {
        setMad(true)
      }, 3000)
    }
    const id = setInterval(handler, 5000)
    handler()

    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <>
      <text
        transform="translate(151.84 130.85)"
        style={{
          fontSize: 21,
          fill: mad ? "#ef616f" : "#666",
          fontFamily: "Noto Sans KR, sans-serif",
          fontWeight: "bold",
          transition: "fill 1s",
        }}
      >
        {mad ? "화나요" : "좋아요"}
      </text>
      <EmotionButton mad={mad} />
    </>
  )
}

export default Emotion
