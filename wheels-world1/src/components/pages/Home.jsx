import React from 'react'
import HeroSlider from '../UI/HeroSlider';
import Car from './Car';
import Blog from './Blog';
import Testimonal from '../UI/Testimonal'
import Services from '../UI/Services';



const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <Car />
      <Blog/>
      <Testimonal/>
      <Services/>
    </div>
  )
}

export default Home