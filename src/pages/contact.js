import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const { title } = useSiteMetadata()
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Me</h1>
      <h1>welcome to {title}</h1>
      <p>
        Let's talk! I would love to hear your project idea, I'll get the beer.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
