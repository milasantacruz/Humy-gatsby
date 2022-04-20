import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LoaderFullpage from "../components/loaderFullpage"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <LoaderFullpage/>
  </Layout>
)

export default IndexPage
