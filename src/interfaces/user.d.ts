export interface I_UserSignUpReq {
  email: string
  password: string
  username: string
}

export interface I_UserLogInReq {
  email: string
  password: string
}

export interface I_UserRes {
  user_id?: string
  username?: string
  image?: string
  email?: string
}
