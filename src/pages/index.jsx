import React from "react"
import { Link } from "gatsby"

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
    <Alert absolute canClose>
      화나요 스티커 공동구매를 시작합니다.{" "}
      <Link to="/goods/sticker">구매하기</Link>
    </Alert>
    <MainImage />
    <StartSection />
    <LegacySection />
    <KarmaSection />
    <Footer />
  </Layout>
)

export default IndexPage
