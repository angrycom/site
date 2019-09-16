import React, { useEffect, useState } from "react"
import style from "./index.module.css"
const Scroller = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const { scrollY } = window
      const documentSize = document.body.clientHeight - window.innerHeight
      const progress = (scrollY / documentSize).toFixed(3)

      setProgress(progress)
    }
    window && window.addEventListener("scroll", handler)
    window && window.addEventListener("load", handler)
  }, [])
  return (
    <div className={style.scroll}>
      <div
        className={style.progress}
        style={{
          width: `${progress * 100}%`,
        }}
      ></div>
    </div>
  )
}

export default Scroller
