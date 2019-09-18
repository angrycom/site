import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/MainImage"
import StartSection from "../components/StartSection"
import LegacySection from "../components/LegacySection"
import Footer from "../components/Footer"
import KarmaSection from "../components/KarmaSection"
import Alert from "../components/Alert"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Alert absolute>
      화나요 스티커 공동구매를 시작합니다. <a href="/goods/sticker">구매하기</a>
    </Alert>
    <MainImage />
    <StartSection />
    <LegacySection />
    <KarmaSection />
    <Footer />
  </Layout>
)

export default IndexPage
