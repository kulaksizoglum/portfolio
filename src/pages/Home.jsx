import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function Home() {
    return <div className='min-h-screen bg-background text-text  font-display '>

        {/* navbar */}
        <Navbar />
        <div className="ml-10 pt-30 pl-30 pr-30">
            {/* Main */}
            <Main />
            {/* Contact */}
            <Contact />

        </div>
        {/* footer */}
        <Footer />

    </div>
}

export default Home