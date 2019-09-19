import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Angry from "../images/angry.svg"
import Section from "../components/Section"
import Title from "../components/Section/Title"
import Contents from "../components/Section/Contents"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Title>Not Found</Title>
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Angry}
          style={{
            width: 640,
            margin: "auto",
            boxSizing: "border-box",
          }}
          alt="Angry"
        />
      </div>
      <Contents>
        <p>데이터가 없어서 조금 화가 납니다...</p>
        <p>
          <Link to="/">메인 페이지로</Link>
        </p>
      </Contents>
    </Section>
  </Layout>
)

export default NotFoundPage
