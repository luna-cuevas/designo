import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <main className='font-["Jost"]'>
    <NavBar />
    <Component {...pageProps} />
    <CTA />
    <Footer />
  </main>
  )
}

export default MyApp
