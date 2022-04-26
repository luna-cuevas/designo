import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'
import AboutUs from '../components/Homepage/AboutUs'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
    </div>
  )
}

export default Home
