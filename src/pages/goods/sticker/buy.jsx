import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Shop from "../../../components/Shop"

import angry from "../../../images/angry.svg"
export default function() {
  return (
    <Layout>
      <SEO title="화나요 스티커 구매하기"></SEO>
      <Shop productName="화나요 스티커" productImage={angry} />
    </Layout>
  )
}
