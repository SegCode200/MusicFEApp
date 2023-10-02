import React from 'react'
import Hero from './HeroPage/Hero'
import Playlist from './HeroPage/Playlist'
import Release from './HeroPage/Release'
import Songs from './HeroPage/Songs'
import Top from './HeroPage/Top'
import Charts from './HeroPage/Charts'
import Hits from './HeroPage/Hits'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Playlist/>
      <Release/>
      <Songs/>
      <Top/>
      <Charts/>
      <Hits/>
    </div>
  )
}

export default HomePage