import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { Github } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto  navbar  bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/apps'}>Apps</NavLink>
      <NavLink to={'/installation'}>Installation</NavLink>
      </ul>
    </div>
    
    <Link to={'/'}><a className=" flex justify-center items-center gap-2 cursor-pointer text-[16px] font-bold text-[#9358EF]"><img className='w-[30px] h-[30px]' src={logo} alt="" />Hero.IO</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5 text-[16px] font-medium">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/apps'}>Apps</NavLink>
      <NavLink to={'/installation'}>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/meiad-khan' target='_blank' className="btn bg-linear-to-t from-sky-500 to-indigo-500 text-white"><Github></Github>Contribute</a>
  </div>
</div>
  );
};

export default Navbar;