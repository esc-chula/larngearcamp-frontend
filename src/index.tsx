import React from "react"
import ReactDOM from "react-dom"
import firebase from "firebase/app"
import "firebase/analytics"

import "./styles/index.css"
import "react-multi-carousel/lib/styles.css"

import { AppModule } from "./modules/app.module"

// Firebase SDK
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpN2dra-UurolHDXwsPCqtScZQPNv2LcA",
  authDomain: "larngear20th.firebaseapp.com",
  databaseURL: "https://larngear20th.firebaseio.com",
  projectId: "larngear20th",
  storageBucket: "larngear20th.appspot.com",
  messagingSenderId: "374445788127",
  appId: "1:374445788127:web:0ee32e60f61712d1e4d26a",
  measurementId: "G-W7PP8D79EM"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(<AppModule />, document.getElementById("root"))
