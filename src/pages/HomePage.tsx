import React from 'react'
import Hero from './HeroPage/Hero'
import Playlist from './HeroPage/Playlist'
import Release from './HeroPage/Release'
import Songs from './HeroPage/Songs'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Playlist/>
      <Release/>
      <Songs/>
    </div>
  )
}

export default HomePage