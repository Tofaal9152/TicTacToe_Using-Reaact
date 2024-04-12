import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[#342F82] text-white p-[6px]'>
            <ul className='flex justify-evenly font-semibold'>
                <li className='cursor-pointer font-bold text-xl'>iTask</li>
                <div className='flex space-x-9'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About Us</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
