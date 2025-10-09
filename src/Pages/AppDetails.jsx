import React, { useState } from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import {setData } from '../Utility/LocalStorage';
import { toast } from 'react-toastify';

const AppDetails = () => {
  const {id} = useParams();
  const { data, loading, error } = useData();
  const [sign, setSign] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-red-500">Error loading data</h2>
      </div>
    );
  }
  // console.log(id);
  const singleApp = data.find(app=> app.id=== Number(id));
  // console.log(singleApp);
  const {image, title, description, companyName,downloads,ratingAvg, 
reviews, ratings, size}=singleApp;


const handleInstall =()=>{
  toast('App Successfully Installed');
  setData(singleApp);
  setSign(true);
}

  return (
    <div className='bg-[#D2D2D250] p-12'>
      <div className='w-11/12 mx-auto pb-6 border-b border-b-gray-400 flex flex-col md:flex-row gap-10 items-center '>
      <div className=' h-[300px] overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='space-y-5 '>
        <div className='border-b border-b-gray-400'>
          <h3 className='text-[32px] font-bold'>{title}</h3>
        <p className='text-[20px] text-[#627382]'>Developed by <span className='text-[#9F62F2]'>{companyName}</span></p>
        </div>
        <div className='flex flex-wrap gap-10 md:gap-32'>
          <div>
            <p className='text-[#00827A] mb-3'><ArrowDownToLine></ArrowDownToLine></p>
            <span className='text-[16px]'>Downloads</span>
            <p className='text-[40px] font-extrabold'>{downloads}M</p>
          </div>
          <div>
            <p className='text-[#FF8811] mb-3'><Star></Star></p>
            <span className='text-[16px]'>Average Ratings</span>
            <p className='text-[40px] font-extrabold'>{ratingAvg}</p>
          </div>
          <div>
            <p className='text-[#632EE3] mb-3'><ThumbsUp></ThumbsUp></p>
            <span className='text-[16px]'>Total Reviews</span>
            <p className='text-[40px] font-extrabold'>{reviews}</p>
          </div>
        </div>
        <button disabled={sign} onClick={handleInstall} className='btn btn-outline bg-[#00D390] text-white'>{sign?'Installed':`Install Now(${size}MB)`}</button>
      </div>
    </div>
    {/* About recharts */}
    <div className="w-11/12 mx-auto mt-10 pb-5 border-b border-b-gray-300">
        <h3 className="text-2xl font-bold mb-4">Ratings</h3>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={ratings}
            layout="vertical"
            
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={70} reversed={true} />

            <Tooltip />
            <Bar
              dataKey="count"
              fill="#FF8C00"
              barSize={30}
              radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='w-11/12 mx-auto mt-10'>
        <h3 className='text-[24px] font-bold'>Description</h3>
        <p className='text-[20px]'>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;