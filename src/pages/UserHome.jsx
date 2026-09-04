import React from 'react'
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';
import HomeHero from '../components/HomeHero';

function UserHome() {
  return (
    <div className='min-h-100vh flex flex-col'>
      <HomeHeader />
      <div className='flex-1'>
        <HomeHero />
      </div>
      <HomeFooter />
    </div>
  )
}

export default UserHome;
