import Head from 'next/head'
import HeroSection from '../components/landing/hero'
import SectionOne from '../components/landing/sections/section1'
import SectionTwo from '../components/landing/sections/section2'
import SectionThree from '../components/landing/sections/section3'
import StatsPanel from '../components/landing/stats/StatsPanel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <StatsPanel />
        <SectionOne />
        <br />
        <SectionTwo />
        <br />
        <SectionThree />
        <br />
        <br />
        <br />
      </main>

    </div>
  )
}
