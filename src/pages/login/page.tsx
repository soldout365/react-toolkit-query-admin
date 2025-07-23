import { Button, Form, Input, message, notification } from 'antd'

import type { AuthType } from '../../types/auth.type'
import React from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useLoginMutation } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<AuthType>()
  const [login, { isLoading }] = useLoginMutation()

  const { login: loginContext } = useAuth()

  const onFinish = async (values: Omit<AuthType, 'userType'>) => {
    try {
      const bodyLogin: AuthType = {
        ...values,
        userType: 'staff' // Assuming 'staff' is the default user type for login
      }

      const result = await login(bodyLogin).unwrap()

      if (result) {
        loginContext(result.accessToken, result.user)
        message.success('Đăng nhập thành công')
        navigate('/')
      }
    } catch (error: any) {
      // Show error notification
      notification.error({
        message: 'Đăng nhập thất bại',
        description: error?.data?.message || 'Có lỗi xảy ra khi đăng nhập',
        placement: 'topRight'
      })
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <Form form={form} layout='vertical' onFinish={onFinish} autoComplete='off' className='w-1/2'>
        <h2 className='text-2xl font-bold mb-6'>Đăng nhập</h2>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Bạn chưa nhập email!' },
            { type: 'email', message: 'Email không hợp lệ!' }
          ]}
          className='text-left'
        >
          <Input placeholder='Nhập email của bạn' className='!h-14' />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            { required: true, message: 'Bạn chưa nhập mật khẩu!' },
            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }
          ]}
          className='text-left'
        >
          <Input.Password placeholder='Nhập mật khẩu của bạn' className='!h-14' />
        </Form.Item>
        <Form.Item className='!mt-10'>
          <Button type='primary' htmlType='submit' block className='!h-14' loading={isLoading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage
