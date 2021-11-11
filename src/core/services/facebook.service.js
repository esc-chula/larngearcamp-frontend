export const waitFbInit = new Promise(resolve => {
  window.fbAsyncInit = () => {
    window.FB.init({
      appId: "280903317261367",
      cookie: true,
      xfbml: true,
      version: "v2.11"
    })
    window.FB.getLoginStatus(res => {
      if (res.status === "connected") {
        window.fbStatus = res
        resolve(res)
      } else {
        resolve(null)
      }
    })
  }
  ;(function (d, s, id) {
    let js = d.getElementsByTagName(s)[0]
    let fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      resolve()
      return
    }
    js = d.createElement(s)
    js.id = id
    js.src = "//connect.facebook.net/en_US/sdk.js"
    fjs.parentNode.insertBefore(js, fjs)
  })(document, "script", "facebook-jssdk")
})

export const fbLogin = () => {
  return new Promise(resolve => {
    window.FB.login(fbStatus => {
      if (fbStatus.status === "connected") {
        resolve(fbStatus)
      } else {
        resolve(null)
      }
    })
  })
}

export const fbLogout = () => {
  window.FB.logout()
}
