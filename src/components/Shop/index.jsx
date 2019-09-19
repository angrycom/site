import React from "react"
import Section from "../Section"
import Title from "../Section/Title"
import ShopForm from "./ShopForm"

import style from "./index.module.css"

const Shop = ({ productName, productImage, children }) => {
  return (
    <Section>
      <Title>{productName} 구매하기</Title>
      <div className={style.card}>
        <img src={productImage} alt={productName + " image"} />
        <h1>{productName}</h1>
      </div>
      <div style={{ marginTop: 50 }}>{children ? children : <ShopForm />}</div>
    </Section>
  )
}

export default Shop
