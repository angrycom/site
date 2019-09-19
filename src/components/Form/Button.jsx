import React from "react"
import style from "./Button.module.css"
import { Link } from "gatsby"

const Button = ({ children, primary, to, reactive, right }) => {
  const Tag = to ? Link : "button"
  const btn = (
    <Tag
      className={[
        style.button,
        primary && style.primary,
        reactive && style.reactive,
        right && style.right,
      ]
        .filter(Boolean)
        .join(" ")}
      to={to}
    >
      {children}
    </Tag>
  )
  if (right) {
    return <div className={style.wrap}>{btn}</div>
  }
  return btn
}

export default Button
