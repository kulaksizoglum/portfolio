import React from 'react'

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-navbar backdrop-blur-md'>
            <div className='max-w-6xl  mx-auto flex items-center justify-between '>
                <a href="#home">
                    <img
                        src='signature.png'
                        className="h-20 mt-1 mix-blend-multiply cursor-pointer"
                    />
                </a>
                <div className='flex items-center gap-6 '>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
