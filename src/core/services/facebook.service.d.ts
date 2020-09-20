type LoginStatus = "authorization_expired" | "connected" | "not_authorized" | "unknown"

interface AuthResponse {
  accessToken: string
  expiresIn: number
  signedRequest: string
  userID: string
  grantedScopes?: string
  reauthorize_required_in?: number
}

interface StatusResponse {
  status: LoginStatus
  authResponse: AuthResponse
}

export const waitFbInit: Promise<StatusResponse | null>
export function fbLogin(): Promise<StatusResponse | null>
