import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/MainImage"
import StartSection from "../components/StartSection"
import LegacySection from "../components/LegacySection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainImage />
    <StartSection />
    <LegacySection />
  </Layout>
)

export default IndexPage
