import React from "react"
import ReactDOM from "react-dom"

import "./styles/index.css"
import "react-multi-carousel/lib/styles.css"

import { AppModule } from "./modules/app.module"

import TagManager from "react-gtm-module"

TagManager.initialize({ gtmId: process.env.GOOGLE_TAG_MANAGER_ID || "" })

ReactDOM.render(<AppModule />, document.getElementById("root"))
