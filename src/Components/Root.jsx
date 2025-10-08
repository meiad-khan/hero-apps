import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import './Root.css';

const Root = () => {
  // const [select, setSelect] = useState([]);
  // const handleSelect = (id)=>{
    
  // }
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;