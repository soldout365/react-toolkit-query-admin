import React from 'react'
import { useGetPermissionsQuery } from '@/services/api.service'

const PermissionsPage: React.FC = () => {
  const { data: permissions, isLoading, error } = useGetPermissionsQuery()

  if (isLoading) return <div>Loading permissions...</div>
  if (error) return <div>Error loading permissions!</div>

  return (
    <div>
      <h1>Permissions Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {permissions?.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PermissionsPage
