export type AuthType = {
  email: string // "example@mail.com"
  password: string // "password123"
  userType: 'staff'
}

// Response type for login
export type LoginResponse = {
  accessToken: string
  user: User
}

export type User = {
  _id: string
  email: string
  fullName: string
  role: string
  userType: string
}
