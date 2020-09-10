export const getLocalStorage = (name: string, defaultValue = {}) => {
  try {
    const value = localStorage.getItem(name)
    if (value === null) return defaultValue
    return JSON.parse(value)
  } catch (e) {
    console.error("Can't load state '" + name + "'")
    return defaultValue
  }
}

export const setLocalStorage = (name: string, value: JSON) => {
  try {
    localStorage.setItem(name, JSON.stringify(value))
  } catch (e) {
    console.error("Can't save state '" + name + "'")
  }
}

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name)
}

export const getSessionStorage = (name: string, defaultValue = {}) => {
  try {
    const value = sessionStorage.getItem(name)
    if (value === null) return defaultValue
    return JSON.parse(value)
  } catch (e) {
    console.error("Can't load state '" + name + "'")
    return defaultValue
  }
}

export const setSessionStorage = (name: string, value: JSON) => {
  try {
    sessionStorage.setItem(name, JSON.stringify(value))
  } catch (e) {
    console.error("Can't save state '" + name + "'")
  }
}

export const removeSessionStorage = (name: string) => {
  sessionStorage.removeItem(name)
}
