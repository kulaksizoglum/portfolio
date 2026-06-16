import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-navbar backdrop-blur-md'>
            <div className='max-w-6xl  mx-auto flex items-center justify-between '>
                <img
                    src='signature.png'
                    className="h-20 mt-1  "
                />
                <div className='flex items-center gap-6 '>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>
            </div>




        </nav>
    )
}

export default Navbar