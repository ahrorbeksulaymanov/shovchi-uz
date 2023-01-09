import { Button, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PicturesWall from '../imgUploader';

const { TextArea } = Input;
const RegisterPage = () => {
    const [image, setimage] = useState([])

    const onFinish = (values) => {
        console.log('Success:', values);
      };

    return(
        <div className='p-10'>
            <div className='border p-10 rounded-md bg-stone-50'>
                <Form
                className='w-[100%]'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    >
                    <div className='grid grid-cols-12 gap-x-4'>
                        <div className="sm:col-span-3 col-span-6 mb-0">
                            <Form.Item
                                className='mb-0'
                                label="Ism"
                                name="firstName"
                                rules={[{ required: true, message: 'Ismingizni kiriting!' }]}
                            >
                                <Input placeholder='Ismingiz' />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6 mb-0">
                            <Form.Item
                                className='mb-0'
                                label="Familiya"
                                name="lastName"
                                rules={[{ required: true, message: 'Familiyangizni kiriting!' }]}
                            >
                                <Input placeholder='Familiyangiz' />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Otangizni ismi"
                                name="middleName"
                                rules={[{ required: true, message: 'Sharifingizni kiriting!' }]}
                            >
                                <Input placeholder='Sharifingiz' />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Yoshingiz"
                                name="age"
                                rules={[{ required: true, message: 'Yoshingizni kiriting!' }]}
                            >
                                <Input type='number' placeholder='Yoshingiz' />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Millatingiz"
                                name="nationality"
                                rules={[{ required: true, message: 'Millatingizni kiriting!' }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    className="w-[100%]"
                                    placeholder="Millatni tanlang"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: "o'zbek",
                                            label: "O'zbek",
                                        },
                                        {
                                            value: 'qozoq',
                                            label: 'Qozoq',
                                        },
                                        {
                                            value: 'rus',
                                            label: 'Rus',
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-9 col-span-6"></div>
                        <div className="sm:col-span-4 col-span-6">
                            <Form.Item
                                className='w-[47%] inline-block'
                                style={{marginRight:"6%"}}
                                label="Bo'y uzunligingiz(sm)"
                                name="height"
                                rules={[{ required: true, message: "Bo'y uzunligingizni kiriting!" }]}
                            >
                                <Input type='number' placeholder="Bo'y uzunligingiz" />
                            </Form.Item>
                            <Form.Item
                                className='w-[47%] inline-block'
                                label="Og'irligingiz(kg)"
                                name="age"
                                rules={[{ required: true, message: "Og'irligingizni kiriting!" }]}
                            >
                                <Input type='number' placeholder="Og'irligingiz" />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-4 col-span-6">
                            <Form.Item
                                className='w-[47%] inline-block'
                                style={{marginRight:"6%"}}
                                label="Viloyat(tug'ilgan)"
                                name="region"
                                rules={[{ required: true, message: "Viloyatni tanlang!" }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    className="w-[100%]"
                                    placeholder="Viloyatni tanlang"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Turmush qurmagan',
                                            label: 'Turmush qurmagan',
                                        },
                                        {
                                            value: 'ajrashgan',
                                            label: 'Ajrashgan',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                className='w-[47%] inline-block'
                                label="Tuman(tug'ilgan)"
                                name="district"
                                rules={[{ required: true, message: "Tumannu tanlang!" }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    className="w-[100%]"
                                    placeholder="Tumanni tanlang"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Turmush qurmagan',
                                            label: 'Turmush qurmagan',
                                        },
                                        {
                                            value: 'ajrashgan',
                                            label: 'Ajrashgan',
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-4 col-span-6">
                        <Form.Item
                                className='w-[47%] inline-block'
                                style={{marginRight:"6%"}}
                                label="Oilaviy holati"
                                name="family_condition"
                                rules={[{ required: true, message: 'Oilaviy holatni kiriting!' }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    className="w-[100%]"
                                    placeholder="Oilaviy holatingizni tanlang"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Turmush qurmagan',
                                            label: 'Turmush qurmagan',
                                        },
                                        {
                                            value: 'ajrashgan',
                                            label: 'Ajrashgan',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                className='w-[47%] inline-block'
                                label="Statusingiz"
                                name="live_status"
                                rules={[{ required: true, message: 'Statusingizni tanlang!' }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    className="w-[100%]"
                                    placeholder="Status tanlang"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'Ko’k karta',
                                            label: 'Ko’k karta',
                                        },
                                        {
                                            value: 'fuqarolik',
                                            label: 'Fuqarolik',
                                        },
                                        {
                                            value: 'student',
                                            label: 'Student',
                                        },
                                        {
                                            value: 'Ishchi visa',
                                            label: 'Ishchi visa',
                                        },
                                        {
                                            value: 'norasmiy',
                                            label: 'Norasmiy',
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Kasbingiz, mutahasislik va hobbiylaringiz"
                                name="job"
                                rules={[{ required: true, message: "Kasbingiz, mutahasislik va hobbiylaringiz kiriting!" }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Qanday umr yo’ldosh (idealingizni tariflang)"
                                name="ideal"
                                rules={[{ required: true, message: "idealingizni tariflang!" }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Turmush, oila sizning tasavvuringizda"
                                name="imagination"
                                rules={[{ required: true, message: "tasavvuringizni tariflang!" }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Talab va shartlar"
                                name="demand"
                                rules={[{ required: true, message: "Talab va shartlarni kiriting!" }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item
                                label="Rasmingiz"
                                rules={[{ required: false, message: "Talab va shartlarni kiriting!" }]}
                            >
                                <PicturesWall setimages={setimage} images={image} maxCount={1} />
                            </Form.Item>
                        </div>
                        <div className="sm:col-span-3 col-span-6">
                            <Form.Item>
                                <button className='w-[100%] bg-green-600 hover:bg-green-700 text-white rounded-md py-2' htmlType="submit">
                                Submit
                                </button>
                            </Form.Item>
                            <Link to={'/signin'} className='text-blue-600 hover:underline cursor-pointer'>Login</Link>
                        </div>
                    </div>  
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage;




