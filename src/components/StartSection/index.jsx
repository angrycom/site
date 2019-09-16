import React from "react"
import style from "./index.module.css"
import Title from "../Section/Title"
import Section from "../Section"
import img from "../../images/facebook_angry.svg"
import Contents from "../Section/Contents"
const StartSection = () => {
  return (
    <>
      <div className={style.gradient}></div>
      <Section>
        <Title>
          화나요,<br></br>그 이야기의 시작.
        </Title>
        <div className={style.img}>
          <img src={img} alt="Facebook Angry"></img>
        </div>
        <Contents>
          <p>
            2019년 3월 17일, 선린인터넷고등학교 소프트웨어과 전공 동아리의 합격
            발표가 있었다. 소프트웨어과 재학중인 박 모씨 (현 S모 동아리 부장)는
            어느 곳에서도 환영받지 못했고, 분노에 가득 찬 나머지 게시글과 모든
            댓글에 화나요를 누르기 시작했다.
          </p>
          <p>
            <strong>그리고 그것이 역사의 한 장으로 남았다.</strong>
          </p>
        </Contents>
      </Section>
    </>
  )
}

export default StartSection
