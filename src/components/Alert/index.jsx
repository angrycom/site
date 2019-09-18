import React from "react"
import style from "./index.module.css"
const Alert = ({ children, fixed, absolute, canClose }) => {
  return (
    <div
      className={[style.wrap, fixed && style.fixed, absolute && style.absolute]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={style.alert}>
        {children}
        {canClose && (
          <div className={style.close} aria-label="close">
            &times;
          </div>
        )}
      </div>
    </div>
  )
}
export default Alert
