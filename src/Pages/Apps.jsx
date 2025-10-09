import React, { useState } from 'react';
import AppCard from './AppCard';
import useData from '../Hooks/useData';

const Apps = () => {
  const { data, loading, error } = useData();
  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchedData = term? data.filter(app=>app.title.toLowerCase().includes(term)): data;
  console.log(searchedData);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-6xl font-semibold text-gray-600">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-5xl font-semibold text-red-500">Error loading data</h2>
      </div>
    );
  }

  return (
    <div className='bg-[#D2D2D250] space-y-4 py-14'>
      <h2 className='text-[48px] text-center font-bold'>Our All Applications</h2>
      <p className='text-[20px] mb-6 text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <p className='text-[#001931] text-[18px] md:text-[24px] font-medium'><span>({searchedData.length})</span> Apps Found</p>
        <label className="input w-[50%] md:w-[24%]">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={search} onChange={e=>setSearch(e.target.value)} required placeholder="Search" />
        </label>
      </div>
      <div className='w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
        searchedData.length>0?(searchedData.map(app=><AppCard key={app.id} app={app}></AppCard>)):(
          <p className='text-5xl text-gray-400 font-medium col-span-5 text-center'>No App Found</p>
        )
      }
      </div>
      
    </div>
  );
};

export default Apps;