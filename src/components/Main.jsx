import React from 'react'
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

function Main() {
    return (
        <div >

            <div className='flex mb-5 ml-10'>
                <ArrowDown size={40} className="text-accent animate-bounce" />
                <p className='text-lg ml-40'>Hello! I am <span className='text-accent'>Murat Kulaksızoğlu</span></p>
            </div>
            <div className='flex'>
                <img
                    src="me.webp"
                    className="h-30 mt-2 "

                />
                <div className='flex-col ml-30 '>
                    <p className='text-xl mb-2'>A Software Engineer who</p>
                    <p className='text-5xl mb-1'>Builds ideas</p>
                    <p className='text-5xl mb-1'>into reality.</p>
                    <p className='text-xl'>Because every great product starts with a single solution.</p>
                </div>
            </div>
            <div className='flex items-center mt-10 mb-10'>
                <p className='text-2xl '>Currently, I'm a {" "}
                    <span className="text-accent inline-block min-w-50">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2000,
                                "",
                                500,
                                'Software Engineer',
                                2000,

                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                        />
                    </span>
                    at</p>
                <a href='https://dgtl-x.com/'>
                    <img src='dgtlx.png' width={70} height={70} className='ml-5 ' />
                </a>
            </div>
            <div className='text-xl'>
                <p >
                    Computer Science and Engineering graduate from Sabancı University with
                </p>
                <p className='mt-1'>
                    1+ year of experience building user-focused applications. Interested in data,
                </p>
                <p className='mt-1'>
                    artificial intelligence, and leveraging technology to solve meaningful problems.
                </p>
            </div>
            <div className="border-t w-full mt-10 mb-10"></div>
            <div className='flex flex-col items-center'>
                <p className='text-center text-5xl'>Education</p>
                <div className="w-1/2 rounded-2xl p-6 mt-10 bg-linear-to-br from-card/60 via-card/30 to-background border-t-2 border-t-accent shadow-[0_-8px_30px_rgba(157,102,56,0.35)] hover:shadow-[0_-10px_40px_rgba(157,102,56,0.5)] transition">
                    <div className="flex flex-row ">

                        <img src='sabanci.jfif' width={100} height={80} />
                        <div className='flex flex-col ml-10'>
                            <p className='text-2xl'>Sabancı University</p>
                            <p className='text-lg'> B.Sc. Computer Science and Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t w-full mt-10 mb-10"></div>


        </div>
    )
}

export default Main