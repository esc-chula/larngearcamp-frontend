import React from "react"

/* eslint-disable import/no-webpack-loader-syntax */
import Privacy from "!babel-loader!@mdx-js/loader!../static/privacy.mdx"
import { MDXLayout } from "./mdx-layout.module"

export const PrivacyPoflicyModule = () => {
  return (
    <MDXLayout>
      <Privacy />
    </MDXLayout>
  )
}
