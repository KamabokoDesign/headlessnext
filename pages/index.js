import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const data = fetch('http://localhost:8888/headlessnext/graphql', {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({"test": "test"})
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Testing</h1>
      </main>
    </div>
  )
}
