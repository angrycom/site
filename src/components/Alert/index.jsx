import React, { useState } from "react"
import { Motion, spring } from "react-motion"
import style from "./index.module.css"
const Alert = ({ children, fixed, absolute, canClose }) => {
  const [closed, setClosed] = useState(false)
  const [disappear, setDisappear] = useState(false)
  if (disappear) return null

  const s = spring(closed ? 0 : 1, {
    precision: 0.0001,
  })
  return (
    <div
      className={[style.wrap, fixed && style.fixed, absolute && style.absolute]
        .filter(Boolean)
        .join(" ")}
    >
      <Motion
        defaultStyle={{ opacity: 1, y: 1 }}
        style={{ opacity: s, y: s }}
        didLeave={() => {
          setDisappear(true)
        }}
      >
        {({ opacity, y }) => (
          <div
            className={style.alert}
            style={{
              opacity,
              transformOrigin: "top center",
              transform: `scaleY(${y})`,
            }}
          >
            <div className={style.contents}>{children}</div>
            {canClose && (
              <div
                className={style.close}
                aria-label="close"
                onClick={() => {
                  setClosed(true)
                }}
              >
                &times;
              </div>
            )}
          </div>
        )}
      </Motion>
    </div>
  )
}
export default Alert
