import React from 'react'
import { useGetRolesQuery } from '@/services/api.service'

const RolesPage: React.FC = () => {
  const { data: roles, isLoading, error } = useGetRolesQuery()

  if (isLoading) return <div>Loading roles...</div>
  if (error) return <div>Error loading roles!</div>

  return (
    <div>
      <h1>Roles Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {roles?.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RolesPage
