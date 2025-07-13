import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
  <h1>VinFix411 – Vehicle Issue Lookup</h1>
  <p>Enter your 17-digit VIN to check for known problems, recalls, and DIY fixes.</p>

  <input
    type="text"
    placeholder="Enter VIN here"
    maxLength="17"
    style={{ padding: '10px', fontSize: '16px', width: '300px' }}
  />

  <br /><br />

  <button style={{ padding: '10px 20px', fontSize: '16px' }}>
    Check VIN
  </button>

  <div style={{ marginTop: '20px' }}>
    <p><i>Results will appear here...</i></p>
  </div>
</main>

      <Footer />
    </div>
  )
}
