import React from 'react'
import CapEvent from './CapEvent'
import Result from './Result'
import News from './News'
import Standings from './Standings'
import Blog from './Blog'

export default function Home() {
  return (

    <div className="site-wrap">
      <CapEvent />
      <Result />
      <News />
      <Standings />
      <Blog />
    </div>

  )
}
