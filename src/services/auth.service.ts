import type { AuthType, LoginResponse } from '../types/auth.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Auth API configuration
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL_BE || 'http://103.216.119.111:8900/api/v1',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, AuthType>({
      query: (credentials) => ({
        url: '/staff/login',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const { useLoginMutation } = authApi
