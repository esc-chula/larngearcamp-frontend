const someReducer = (state = {}, action) => {
  switch (action.type) {
    case "ACTION":
      console.log("It's work")
      break
    default:
      return state
  }
}

export default someReducer
