import React from 'react'
import { useGetStaffQuery } from '@/services/api.service'

const StaffPage: React.FC = () => {
  const { data: staff, isLoading, error } = useGetStaffQuery()

  if (isLoading) return <div>Loading staff...</div>
  if (error) return <div>Error loading staff!</div>

  return (
    <div>
      <h1>Staff Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {staff?.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StaffPage
