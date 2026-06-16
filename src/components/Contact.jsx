import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <section className=' flex flex-col items-center '>
            <div className="border-t w-full"></div>

            <p className='text-5xl mt-5'>Contact</p>
            <p className='text-lg mt-3'>I'm currently looking to join a cross-functional team that values improving people's</p>
            <p className='text-lg mt-1' >lives through accessible design, or have a project in mind? Let's connect.</p>
            <p className='mt-5 mb-5'>kulaksizoglumurat@gmail.com</p>
            <div className="flex gap-10 text-3xl">
                <a href='https://github.com/kulaksizoglum/'>
                    <FaGithub className="hover:text-accent transition" />
                </a>
                <a href='https://www.instagram.com/muratkulaksizogluu/'>
                    <FaInstagram className="hover:text-accent transition" />
                </a>
                <a href='https://www.linkedin.com/in/mkulaksizoglu/'>
                    <FaLinkedin className="hover:text-accent transition" />
                </a>
            </div>
        </section>
    )
}

export default Contact