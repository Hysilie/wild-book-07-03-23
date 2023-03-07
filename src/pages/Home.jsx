import React from 'react'
import Header from '../components/Header'
import WildersList from '../components/WildersList'

function Home() {
  return (
    <div>
<Header />
<main className="container">
        <h2>Wilders</h2>
        <WildersList />
        </main>
    </div>
  )
}

export default Home