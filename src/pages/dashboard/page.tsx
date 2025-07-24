import { Button } from 'antd'

const DashboardPage = () => {
  return (
    <div>
      <Button type='primary' href='/roles'>
        Go to Roles
      </Button>
      <Button type='primary' href='/permissions' className='ml-4'>
        Go to Permissions
      </Button>
      <Button type='primary' href='/staff' className='ml-4'>
        Go to Staff lít
      </Button>
    </div>
  )
}

export default DashboardPage
