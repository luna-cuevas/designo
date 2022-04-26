import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Homepage/Hero'
import Services from '../components/Homepage/Services'
import AboutUs from '../components/Homepage/AboutUs'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <AboutUs />
    </div>
  )
}

export default Home
