import React, { useState, useEffect } from "react"
import { Motion, spring } from "react-motion"

const Text = ({ x, y, width }) => (
  <rect
    x={x + 84.5}
    y={y || 50}
    width={width - 10}
    height="24"
    style={{
      fill: "#b3b3b3",
    }}
  />
)

const TextShape = () => {
  const [widths, setWidths] = useState([])
  const [x, setX] = useState(0)
  useEffect(() => {
    const handler = () => {
      const cnt = Math.floor(Math.random() * 2) + 3
      let _widths = []

      let left = 380

      for (let i = 0; i < cnt; i++) {
        if (left <= 0) {
          break
        }
        const w = Math.floor(Math.random() * 75) + 30
        _widths.push(left - w > 0 ? w : left)
        left -= w
      }

      setWidths(_widths)
      setX(1)
      setTimeout(() => {
        setX(0)
      }, 4500)
    }
    const id = setInterval(handler, 5000)
    handler()
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(x) }}>
      {({ x }) => (
        <g
          style={{
            position: "relative",
            transform: `scaleX(${x})`,
            transformOrigin: "84.5px 0",
            opacity: x,
          }}
        >
          {widths.map((w, i) => {
            const _x = widths.slice(i + 1).reduce((a, b) => a + b, 0)
            return <Text key={i} x={_x} width={w} />
          })}
        </g>
      )}
    </Motion>
  )
}

export default TextShape
