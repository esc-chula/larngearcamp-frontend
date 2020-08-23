import { applyMiddleware, createStore, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

// INITIALSTATE
import initialState from "./initialState"

// REDUCER
import createRootReducer from "./reducers"

// UTILITY FUNCTIONS
import { saveState, observeStore } from "../utils/storage"

// APPLY MIDDLEWARE AND ENHANCERS
const enhancers = []
const middleware = [thunk]
const composedEnhancers =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    : compose(applyMiddleware(...middleware), ...enhancers)

// CONFIGURE STORE
export default function configureStore(preloadedState = initialState) {
  const store = createStore(createRootReducer(), preloadedState, composedEnhancers)
  observeStore(
    store,
    state => state,
    state => saveState("state", state) // This will be change later
  )
  return store
}
