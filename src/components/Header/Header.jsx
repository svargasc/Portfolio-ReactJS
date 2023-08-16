import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../public/images/sv.png'

export const Header = () => {
  return (
    <>
    <header className='bg-[#3f1750] w-screen h-36 flex justify-evenly items-center'>
            <img className='w-32' src={logo} alt="Logo" />
            <nav className='flex flex-row h-28'>
            <ul className='flex items-center p-8 w-96'>
                <li className=' m-8 text-xl font-semibold text-white'><NavLink to='/'>Home</NavLink></li>
                <li className=' m-8 text-xl font-semibold text-white'><NavLink to='/projects'>Projects</NavLink></li>
                <li className=' m-8 text-xl font-semibold text-white'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
    <div className='h-4 bg-[#5a2272] w-screen'></div>
    </>
  )
}
