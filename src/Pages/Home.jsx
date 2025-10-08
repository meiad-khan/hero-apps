import React from 'react';
import googleImg from '../assets/googlePlay.png';
import appImg from '../assets/appStore.png';
import heroImg from '../assets/hero.png';
import { Link} from 'react-router';
import HomeCard from './HomeCard';
import useData from '../Hooks/useData';

const Home = () => {
  const { data, loading, error } = useData();

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

  const homeData = data.slice(0,8);
  // console.log(Array.isArray(homeData));
  return (
    <>
    <div className=' flex flex-col items-center space-y-4 pt-10 bg-[#D2D2D250]'>
      <h2 className='text-[72px] text-center font-bold text-[#001931] '>We Build<br></br> <span className='text-[#9358EF]'>Productive</span> Apps</h2>
      <p className='text-[#627382] text-[20px] text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex items-center gap-5'>
        <button className='btn btn-outline'><a className='flex items-center gap-2' href="https://play.google.com/store/games?hl=en" target='_blank'><img className='w-[25px] h-[25px]' src={googleImg} alt="" />Google Play</a></button>
      <button className='btn btn-outline'><a className='flex items-center gap-2' href="https://www.apple.com/app-store/" target='_blank'><img className='w-[22px] h-[22px]' src={appImg} alt="" />App Store</a></button>
      </div>
      <img src={heroImg} alt="" />
    </div>
    <div className=' p-10 bg-linear-to-t from-sky-500 to-indigo-500'>
      <h2 className='text-white text-[48px] font-bold text-center mb-4'>Trusted by Millions, Built for You</h2>
      <div className='flex gap-48 items-center justify-center'>
        <div className='flex flex-col items-center'>
          <p className='text-[16px] text-white'>Total Downloads</p>
          <p className='text-[64px] font-extrabold text-white'>29.6M</p>
          <p className='text-[16px] text-white'>21% more than last month</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-[16px] text-white'>Total Reviews</p>
          <p className='text-[64px] font-extrabold text-white'>906K</p>
          <p className='text-[16px] text-white'>46% more than last month</p>
        </div> 
        <div className='flex flex-col items-center'>
          <p className='text-[16px] text-white'>Active Apps</p>
          <p className='text-[64px] font-extrabold text-white'>132+</p>
          <p className='text-[16px] text-white'>31 more will Launch</p>
        </div>
      </div>
    </div>
    {/* Dynamic area start */}
    <div className=' bg-[#D2D2D250] py-12'>
      <div className=' w-11/12 mx-auto space-y-3'>
        <p className='text-[#001931] text-[48px] font-bold text-center'>Trending Apps</p>
      <p className='tect-[20px] text-[#627382] text-center mb-6'>Explore All Trending Apps on the Market developed by us</p>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          homeData.map(data=> <HomeCard key={data.id} data={data}></HomeCard>)
        }
      </div>
      <div className='text-center'>
        <Link to={'/apps'}><button className='btn bg-linear-to-t from-sky-500 to-indigo-500 text-white mt-5'>Show All</button></Link>
      </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;