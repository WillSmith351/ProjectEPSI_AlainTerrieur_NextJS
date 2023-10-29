import Head from 'next/head'
import WithSubnavigation from '@/components/navbar/index'
import SmallCentered from '@/components/footer'
import CallToActionWithIllustration from '@/components/pageAcc'
import CaptionCarousel from '@/components/caroussel'
import SimpleThreeColumns from '@/components/about'
import TestimonialContent from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alain Terrieur BTP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WithSubnavigation/>
        <CallToActionWithIllustration/>
        <CaptionCarousel/>
        <SimpleThreeColumns/>
        <TestimonialContent/>
        <Contact/>
        <SmallCentered/>
      </main>

    </>
  )
}
