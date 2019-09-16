import React from "react"
import style from "./index.module.css"
const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        개발: Doyeong Kim (<a href="http://git.doyeong.kim">GitHub</a>)<br></br>
        이 사이트는 여러분의 사랑과 후원으로 제작됩니다.<br></br>
      </p>
      <div>
        <h3>후원자 목록</h3>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: 0,
            padding: 0,
            listStyleType: "none",
          }}
        >
          <li>정찬효</li>
          <li>염태민</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
