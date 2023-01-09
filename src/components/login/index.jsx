import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/auth-img.jpg'

const LoginPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };

    return(
        <div className='grid grid-cols-6'>
            <div className="lg:col-span-2 sm:col-span-3 col-span-6 p-5 flex justify-center h-[100vh]" style={{alignItems:"center"}}>
                <Form
                className='xl:w-[80%] w-[100%]'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button className='w-[100%]' type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    <Link to={'/signup'} className='text-blue-600 hover:underline cursor-pointer'>Registratsiya</Link>
                </Form>
            </div>
            <div className="lg:col-span-4 sm:col-span-3 sm:block hidden">
                <img className='w-[100%] object-cover h-[100vh]' src={img} alt="auth" />
            </div>
        </div>
    )
}
export default LoginPage;