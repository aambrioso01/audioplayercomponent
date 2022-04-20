import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'
import axios from 'axios'

import { AudioPlayer } from '../components/AudioPlayer'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Audiofiler</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main className={styles.main}>
      <button className={styles.forwardBackward}><BsArrowLeftCircle /></button>

        <figure className={styles.artwork}></figure>
        <AudioPlayer /><button className={styles.forwardBackward}><BsArrowRightCircle /></button>
      </main>

      

    </div>
  )
}
