import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WildersList from '../components/WildersList'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div>
<Header />
<main className={styles.container}>
        <h2>Wilders</h2>
        <WildersList />
        </main>
        <Footer />
    </div>
  )
}

export default Home