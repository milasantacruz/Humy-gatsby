import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home/>
  </Layout>
)

export default IndexPage
