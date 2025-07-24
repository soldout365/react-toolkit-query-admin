import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Permission {
  id: string
  name: string
  description: string
}

interface Role {
  id: string
  name: string
  description: string
}

interface Staff {
  id: string
  name: string
  email: string
  role: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL_BE || 'http://103.216.119.111:8900/api/v1'
  }),
  endpoints: (builder) => ({
    getPermissions: builder.query<Permission[], void>({
      query: () => 'permissions'
    }),
    getRoles: builder.query<Role[], void>({
      query: () => 'roles'
    }),
    getStaff: builder.query<Staff[], void>({
      query: () => 'staff'
    })
  })
})

export const { useGetPermissionsQuery, useGetRolesQuery, useGetStaffQuery } = api
