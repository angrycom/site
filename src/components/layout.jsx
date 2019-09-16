import React from "react"
import "../lib/style.css"
import Scroller from "./Scroller"
const Layout = ({ children }) => {
  return (
    <>
      <Scroller />
      <main>{children}</main>
    </>
  )
}

export default Layout
