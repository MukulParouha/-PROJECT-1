import React from 'react'
import HeroSection from '../components/Hero'
import ScrollingText from '../components/ScrollingText'
import TestimonialsSection from '../components/Testimony'
import AppBanner from '../components/AppBanner'
import ServicesSection from '../components/Services'
import StatsSection from '../components/Statistics'
import SplitLayout from '../components/SplitLayout'
import Why from '../components/Why'
import Franchise from '../components/Frenchise'


const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ServicesSection/>
        <ScrollingText/>
        <SplitLayout/>
        <AppBanner/>
        <Why/>
        <StatsSection/>
        <TestimonialsSection/>
        <Franchise/>
        
    </div>
  )
}

export default HomePage