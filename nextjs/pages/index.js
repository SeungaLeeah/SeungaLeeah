import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.js</a></li>
        <li><a href="/sub/about">/pages/sub/about.js</a></li>
        <li><a href="/sub/1"></a>/pages/sub/[id].js</li>
        <li><a href="/sub/2"></a>/pages/sub/[id].js</li>
      </ul>
    </div>
  )
}
