import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
];
export default function Home() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      <p>asdasdsa</p>
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
