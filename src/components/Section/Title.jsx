import React from "react"
import style from "./Title.module.css"

const Title = ({ children, variant = "h1" }) => {
  const Tag = variant
  return <Tag className={style.title}>{children}</Tag>
}

export default Title
