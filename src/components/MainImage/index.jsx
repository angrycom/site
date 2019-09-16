import React from "react"
import style from "./index.module.css"
import img from "../../images/face.svg"

const MainImage = () => {
  return (
    <div className={style.bg}>
      <img src={img} alt="Angry face" className={style.img} />
    </div>
  )
}

export default MainImage
