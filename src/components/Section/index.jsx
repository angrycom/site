import React from "react"
import style from "./index.module.css"

const Section = ({ children, className, ...props }) => (
  <section
    className={[style.section, className].filter(Boolean).join(" ")}
    {...props}
  >
    <div className={style.contents}>{children}</div>
  </section>
)

export default Section
