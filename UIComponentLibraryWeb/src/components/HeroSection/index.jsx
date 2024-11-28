import React from 'react'
import Header from '../Header'
import { Button } from '../ui/button'
const HeroSection = () => {
  return (
    <div className='h-screen bg-slate-50'>
       <Header/>
       <div className="flex gap-5 h-5/6 justify-center flex-col items-center bg-slate-400">
        <h1 className="text-balance text-6xl font-semibold tracking-tight text-gray-900">Welcome To OFarm</h1>
        <h2 className="text-2xl">Grow Fresh, Eat Healthy</h2>
        <Button className="text-lg">Start Growing Today</Button>
      </div>
    </div>
  )
}

export default HeroSection
