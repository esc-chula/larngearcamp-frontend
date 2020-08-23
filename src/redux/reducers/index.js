import { combineReducers } from "redux"

import someReducer from "./reducer"

const createRootReducer = () =>
  combineReducers({
    // This wil be add later
    someReducer: someReducer
  })

export default createRootReducer
