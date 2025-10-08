import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AppCard = ({app}) => {
  const {id,image,title,ratingAvg, downloads} = app;
  return (
     <Link to={`/appsDetails/${id}`}><div className='p-4 bg-white  shadow-md rounded-[8px] space-y-3'>
          <div className='rounded-[8px] bg-[#D2D2D250] h-[300px] overflow-hidden'><img className='w-full h-full object-cover ' src={image} alt="" /></div>
          <p className='text-[20px] font-medium text-[#001931]'>{title}</p>
          <div className='flex justify-between items-center'>
            <span className='flex justify-center items-center rounded-[8px] p-2 bg-[#F1F5E8] text-[#00D390]'><ArrowDownToLine></ArrowDownToLine>{downloads}M</span>
            <span className='flex justify-center items-center rounded-[8px] p-2 bg-[#FFF0E1] text-[#FF8811]'><Star></Star>{ratingAvg}</span>
          </div>
        </div></Link>
  );
};

export default AppCard;