import React from 'react';
import { ArrowDownToLine, Star } from 'lucide-react';

const InstallCard = ({install, handleRemove}) => {
  const {id, title, image, downloads, ratingAvg, size} = install;
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-3  p-1 md:p-4 bg-white rounded-[5px] shadow-md'>
          <div className='flex flex-col md:flex-row gap-5 items-center'>
             <div className='h-[300px] md:h-[120px] rounded-[5px] overflow-hidden'><img className='w-full h-full object-cover ' src={image} alt="" /></div>
             <div className='space-y-4'>
              <h3 className='text-[20px] font-bold'>{title}</h3>
             <div className='flex  items-center gap-8 md:gap-5'>
              <span className='flex justify-center items-center rounded-[8px] p-2 bg-[#F1F5E8] text-[#00D390]'><ArrowDownToLine></ArrowDownToLine>{downloads}M</span>
            <span className='flex justify-center items-center rounded-[8px] p-2 bg-[#FFF0E1] text-[#FF8811]'><Star></Star>{ratingAvg}</span>
             <span className='text-[16px] text-[#627382]'>{size}MB</span>
             </div>
             </div>
          </div>
          <button onClick={()=>handleRemove(id)} className='btn text-[16px] font-bold bg-[#00D390] text-white w-full md:w-[15%]'>Uninstall</button>
        </div>
  );
};

export default InstallCard;