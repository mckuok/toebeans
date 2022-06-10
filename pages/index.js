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
        <title>Toe Beans &amp; Dreams Adoption Cafe</title>
        <meta name="description" content="Toe Beans &amp; Dreams Adoption Cafe, connecting animals and people together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <StatsPanel />
        <div className='py-5 flex flex-col justify-center gap-y-14 md:gap-y-9 '>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </main>

    </div>
  )
}
