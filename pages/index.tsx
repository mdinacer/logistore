import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>LogiStore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href={'/site.webmanifest'} />
        <meta property="og:title" content="LogiStore" />
        <meta
          property="og:description"
          content="The best logistics services."
        />
        <meta
          property="og:image"
          content="
          /preview.jpg"
        />
      </Head>

      <main className="h-full w-full">
        <Hero />
        <Services />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  )
}
