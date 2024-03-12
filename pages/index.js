import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>bdr.de</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="tetstttttt" />
        <p className="description">
          Hahahaha
        </p>
      </main>

      <Footer />
    </div>
  )
}
