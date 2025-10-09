import React, { useEffect, useState } from 'react';
import { getData, removeData } from '../Utility/LocalStorage';
import InstallCard from './InstallCard';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none')

  const handleRemove=id=>{
    removeData(id);
    setInstalledApps(prev=>prev.filter(app=>app.id!==id))
  }

const sortedItem = (()=>{
  if(sortOrder==='size-asc'){
    return [...installedApps].sort((a,b)=>a.size - b.size);
  }
  else if(sortOrder==='size-desc'){
    return [...installedApps].sort((a,b)=>b.size - a.size);
  }
  else{
    return installedApps;
  }
})();
  useEffect(() => {
    const savedApps = getData();
    setInstalledApps(savedApps);
  }, []);
  // console.log(installedApps);
  
  return (
    <div className='bg-[#D2D2D250] p-4 md:p-20'>
      <div className='w-11/12 mx-auto'>
      <h2 className='text-[48px] font-bold text-center mb-3'>Your Installed Apps</h2>
      <p className='text-[20px] text-[#627382] font-medium text-center mb-4'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between items-center'>
        <p className='text-[24px] font-bold'><span>({installedApps.length})</span> App Found</p>
        <label className='form-control w-[50%] md:w-[24%]'>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort By Size</option>
            <option value='size-asc'>Low-&gt;High</option>
            <option value='size-desc'>High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className='space-y-4 mt-4'>
        {
          sortedItem.map(install => <InstallCard key={install.id} install={install} handleRemove={handleRemove}></InstallCard>)
        }
      </div>
    </div>
    </div>
  );
};

export default Installation;