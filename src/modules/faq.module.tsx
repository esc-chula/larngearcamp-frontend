import React from "react"
import { MDXLayout } from "./mdx-layout.module"

/* eslint-disable import/no-webpack-loader-syntax */
import FAQ from "!babel-loader!@mdx-js/loader!../static/faq.mdx"

const FAQModule = () => {
  return (
    <MDXLayout>
      <FAQ />
    </MDXLayout>
  )
}

export { FAQModule }
