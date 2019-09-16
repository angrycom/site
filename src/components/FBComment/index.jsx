import React from "react"
import TextShape from "./TextShape"
import Emotion from "./Emotion"
import Minutes from "./Minutes"

const FBComment = () => {
  return (
    <svg viewBox="0 0 503.5 152.82">
      <defs>
        <linearGradient
          id="a053fa39-cf0a-4dba-87ea-9ca214f436da"
          x1="473.5"
          y1="222"
          x2="473.5"
          y2="199"
          gradientTransform="translate(484.48 -307.57) rotate(67.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fde055" />
          <stop offset="1" stopColor="#ed345c" />
        </linearGradient>
      </defs>
      <title>facebook_comment</title>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="a2ef57eb-7650-45c5-91d9-f01ffc89137d" data-name="레이어 2">
          <rect
            x="67.5"
            y="2.5"
            width="426"
            height="102"
            rx="20.49"
            style={{
              fill: "#f2f3f5",
            }}
          />
          <circle
            cx="30"
            cy="30"
            r="29.5"
            style={{
              fill: "#fbffff",
              stroke: "#aaa",
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M41.14,133.38a11.49,11.49,0,1,1,16.45.29,23,23,0,0,1,14.29,19,29.5,29.5,0,1,0-45.76,0A23,23,0,0,1,41.14,133.38Z"
            transform="translate(-19.5 -104.5)"
            style={{
              fill: "#686868",
            }}
          />
          <Minutes />
          <text
            transform="translate(235.24 130.85)"
            style={{
              fontSize: 21,
              fill: "#666",
              fontFamily: "Noto Sans KR, sans-serif",
              fontWeight: "bold",
            }}
          >
            답글 달기
          </text>
          <Emotion />
          <rect
            x="84.5"
            y="12.5"
            width="108"
            height="24"
            style={{
              fill: "#666",
            }}
          />
          <TextShape />
        </g>
      </g>
    </svg>
  )
}

export default FBComment
