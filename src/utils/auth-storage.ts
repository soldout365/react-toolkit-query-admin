import type { User } from '@/types/auth.type'

export const TOKEN_KEY = 'token'
export const USER_KEY = 'user'

export const saveAuthData = (accessToken: string, user: User) => {
  localStorage.setItem(TOKEN_KEY, accessToken)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getAuthData = () => {
  const token = localStorage.getItem(TOKEN_KEY)
  const userStorage = localStorage.getItem(USER_KEY)
  return {
    user: userStorage ? JSON.parse(userStorage) : null,
    accessToken: token || null
  }
}

export const clearAuthData = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}
