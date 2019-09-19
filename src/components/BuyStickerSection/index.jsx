import React from "react"
import Section from "../Section"
import Title from "../Section/Title"
import style from "./index.module.css"
import angry from "../../images/angry.svg"
import BuyStickerContents from "./Contents"

const BuyStickerSection = () => {
  return (
    <Section>
      <Title>스티커 구매하기.</Title>
      <div className={style.sticker}>
        <img src={angry} alt="Angry" />
      </div>
      <BuyStickerContents />
    </Section>
  )
}

export default BuyStickerSection
