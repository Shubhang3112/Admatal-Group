import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-placeholder.png' 
import './navbar.css'

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "The Team", link: "/team" },
    { title: "Publications", link: "/publications" },
    { title: "Research", link: "/research" },
    { title: "Collaborations", link: "/collaborations" },
    { title: "Teaching", link: "/teaching" },
    { title: "Awards", link: "/awards" },
    { title: "News", link: "/news" },
    { title: "Contact", link: "/contact-us" },
  ];
  return (
    <div className="font-['Epilogue'] py-4 px-8 flex justify-between items-center bg-black-900/10">
      <div className="logo w-[200px]">
        <img src={logo} alt="" />
      </div>
      <div className="navlist">
        <ul className='flex gap-4 '>
          {navItems.map((item,index) => (
              <li key={index} className='font-medium'>
                <NavLink to = {item.link} className={({ isActive }) =>
                                            `my-auto text-nowrap rounded-full py-2 px-3 flex flex-col justify-center${
                                                isActive ? 
                                                // 'border-b-2 border-[#007f39]' 
                                                ' text-[#007f39] hide': ''
                                            } hover:opacity-75`
                                        }>
                    <p>{item.title}</p>
                    <div className={`mt-3 w-full h-[5px] hidden bg-[#007f39]`}></div> 
                </NavLink>
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar