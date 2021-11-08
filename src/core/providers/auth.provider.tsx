import React, { createContext, useEffect, useContext, useState, useCallback } from "react"
import { ShowLoadingComponent } from "../components/loading.component"
import AuthServiceAPI from "../services/auth.service"
import useSWR, { responseInterface } from "swr"
import { AxiosError } from "axios"
import ApplicationServiceAPI from "../services/application.service"
import MyProfileModel from "../models/myprofile.models"

interface AuthConstruct {
  userId: string | null
  isLoggedIn: boolean
  isReady: boolean
  me: responseInterface<MyProfileModel, Error>
  loginFb: (facebookAccessToken: string) => Promise<void>
  loginGoogle: (googleAccessToken: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext({} as AuthConstruct)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ ...other }) => {
  const [isReady, setReady] = useState(false)
  const [userId, setUserId] = useState("")

  const loginFb = useCallback(async (signedRequest: string) => {
    const result = await AuthServiceAPI.loginFbAPI(signedRequest)
    const id = result.data.id
    setUserId(id)
  }, [])

  const loginGoogle = useCallback(async (signedRequest: string) => {
    const result = await AuthServiceAPI.loginGoogleAPI(signedRequest)
    const id = result.data.id as string
    setUserId(id)
  }, [])

  const logout = useCallback(async () => {
    if (!userId) {
      return
    }
    try {
      await AuthServiceAPI.logoutAPI()
      setUserId("")
    } catch (error) {}
  }, [userId])

  const meFetcher = useCallback(async () => {
    try {
      const res = await ApplicationServiceAPI.getApplicationAPI()
      const stateRes = await ApplicationServiceAPI.getApplicationStateAPI()
      const attachRes = await ApplicationServiceAPI.getAttachmentAPI()
      const meData: MyProfileModel = {
        applicationState: stateRes.state || "",
        firstname: res.firstName || "",
        lastname: res.lastName || "",
        lgCode: stateRes.lgNumber || "",
        picture: attachRes.photo.url || ""
      }

      return meData
    } catch (error) {
      console.log(error)
      if ((error as AxiosError)?.response?.status === 401) {
        // token not expired yet but invalid
        logout()
      }
      throw error
    }
  }, [logout])

  const me = useSWR(userId ? `me (${userId})` : null, meFetcher, {
    refreshInterval: 0,
    revalidateOnFocus: process.env.NODE_ENV === "production"
  })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await AuthServiceAPI.getCurrentUserAPI()
        setUserId(res.data.id as string)
      } catch (err) {
      } finally {
        setReady(true)
      }
    }
    if (!userId) fetchUser()
  }, [me, userId])

  if (!!userId && !me.data) {
    return <ShowLoadingComponent />
  }

  const value: AuthConstruct = {
    isReady,
    userId,
    isLoggedIn: !!userId,
    me,
    loginFb,
    logout,
    loginGoogle
  }

  return <AuthContext.Provider value={value} {...other} />
}
