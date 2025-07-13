import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [vin, setVin] = useState('');
  const [result, setResult] = useState('');

  const handleVinCheck = () => {
    if (vin.length === 17) {
      setResult(`✅ VIN ${vin} found. Example issues: Lifter tick, faulty O2 sensor, pending recall on airbags.`);
    } else {
      setResult('❌ VIN must be exactly 17 characters.');
    }
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Head>
        <title>VinFix411</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>VinFix411 – Vehicle Issue Lookup</h1>
        <p>Enter your 17-digit VIN to check for known problems, recalls, and DIY fixes.</p>

        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="Enter VIN here"
          maxLength="17"
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <br /><br />
        <button
          onClick={handleVinCheck}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Check VIN
        </button>

        <div style={{ marginTop: '20px' }}>
          <p><i>{result}</i></p>
        </div>
      </main>
    </div>
  );
}
