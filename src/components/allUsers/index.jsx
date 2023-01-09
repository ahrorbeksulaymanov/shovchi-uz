import { Avatar, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.png'
import FilterModal from '../desctop-filter/filterModal';
const AllUsers = () => {

    const [isModalOpen, setisModalOpen] = useState(false)

    const searchBtn = () => {
        setisModalOpen(false)
    }

    const data = [
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: false
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: false
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: false
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        },
        {
            image: user,
            name: "Hakimov Javohir",
            age: 21,
            millat:"O'zbek",
            isMarried:"Uylanmagan",
            job:"Haydovchi",
            live:"Germaniya",
            payment: true
        }
    ]

    return(
        <section className="lg:pl-5">
            <FilterModal isModalOpen={isModalOpen} searchBtn={searchBtn} />
            <div className="flex justify-between pb-3 mb-3 border-b">
                <div className='w-[50%]'>
                    <Input className='w-[100%]' placeholder='Qidirish' />
                </div>
                <svg className='cursor-pointer lg:hidden' onClick={() => setisModalOpen(true)} fill="#434343" width={'25px'} height='25px' version="1.1" id="XMLID_306_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_iconCarrier"> <g id="filter"> <path d="M9,24V12.9l-8-10V1h23v1.9l-8,10v8.3L9,24z M3.7,3l7.3,9.1V21l3-1.2v-7.7L21.3,3H3.7z"/> </g> </g>
                </svg>
            </div>
            <div className='sm:h-[75vh] h-[65vh] overflow-y-auto overflow-x-hidden filter-scroll'>
                {
                    data.map((item, index) => (
                        <Link to={`/user/${index}`} key={index} className="border text-black hover:text-zinc-900 rounded-full mb-3 shadow-sm p-2 lg:flex hidden cursor-pointer hover:bg-gray-50" style={{alignItems:"center"}}>
                            <>
                                
                            </>
                            <Avatar size={44} icon={<img src={item.image} alt='user' />} />
                            <p className='mb-0 ml-5 text-[18px] font-bold'>{item.name}</p>
                            <p className='mb-0 border rounded-full px-2 bg-zinc-100 xl:ml-10 ml-3'>{item.age} yosh</p>
                            <p className='mb-0 border rounded-full px-2 bg-zinc-100 ml-3'>{item.millat}</p>
                            <p className='mb-0 border rounded-full px-2 bg-zinc-100 ml-3'>{item.isMarried}</p>
                            <p className='mb-0 border rounded-full px-2 bg-zinc-100 ml-3'>{item.job}</p>
                            <p className='mb-0 border rounded-full px-2 bg-zinc-100 ml-3'>{item.live}</p>
                            <button className='border rounded-full px-4 py-2 bg-green-600 hover:bg-green-700 ml-auto text-white'>Do'stlashish</button>
                        </Link>
                    ))
                }
                <div className="grid grid-cols-4 gap-4">
                    {
                        data.map((item, index) => (
                            <div key={index} className="col-span-4 sm:col-span-2">
                                <Link to={`/user/${index}`} className={'text-black hover:text-zinc-900'}>
                                    <div className="border rounded-xl shadow-sm p-2 lg:hidden block cursor-pointer hover:bg-gray-50" style={{alignItems:"center"}}>
                                        <div className='flex mb-6' style={{alignItems:"center"}}>
                                            <Avatar size={44} icon={<img src={user} alt='user' />} />
                                            <p className='mb-0 inline-block ml-5 text-[18px] font-bold'>Hakimov Javohir</p>
                                        </div>
                                        <p className='mb-2 inline-block border rounded-full px-2 bg-zinc-100 ml-3'>21 yosh</p>
                                        <p className='mb-2 inline-block border rounded-full px-2 bg-zinc-100 ml-3'>O'zbek</p>
                                        <p className='mb-2 inline-block border rounded-full px-2 bg-zinc-100 ml-3'>Uylanmagan</p>
                                        <p className='mb-2 inline-block border rounded-full px-2 bg-zinc-100 ml-3'>Haydovchi</p>
                                        <p className='mb-2 inline-block border rounded-full px-2 bg-zinc-100 ml-3'>Germaniya</p>
                                        <button className='border rounded-full w-[100%] mt-5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white'>Do'stlashish</button>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}
export default AllUsers;