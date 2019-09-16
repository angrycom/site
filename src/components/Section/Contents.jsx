import React from "react"
import style from "./Contents.module.css"
const Contents = ({ children }) => (
  <div className={style.contents}>{children}</div>
)

export default Contents
