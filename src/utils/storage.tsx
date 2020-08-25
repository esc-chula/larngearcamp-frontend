export const loadState = (name, defaultValue = {}) => {
  try {
    const value = localStorage.getItem(name)
    if (value === null) return defaultValue
    return JSON.parse(value)
  } catch (e) {
    console.error("Can't load state '" + name + "'")
    return defaultValue
  }
}

export const saveState = (name, value) => {
  try {
    localStorage.setItem(name, JSON.stringify(value))
  } catch (e) {
    console.error("Can't save state '" + name + "'")
  }
}

export const observeStore = (store, select, onChange) => {
  let currentState
  const handleChange = () => {
    let nextState = select(store.getState())
    if (nextState !== currentState) {
      currentState = nextState
      onChange(currentState)
    }
  }
  let unsubscribe = store.subscribe(handleChange)
  return unsubscribe
}
