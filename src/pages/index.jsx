import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainImage from "../components/MainImage"
import StartSection from "../components/StartSection"
import LegacySection from "../components/LegacySection"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainImage />
    <StartSection />
    <LegacySection />
    <Footer />
  </Layout>
)

export default IndexPage
