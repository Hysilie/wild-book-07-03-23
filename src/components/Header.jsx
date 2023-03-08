import React from 'react'
import { Link } from "react-router-dom"
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.container}>
        <Link to='/'> <h1>Wilders Book</h1></Link>
          <Link to='/'><h2>Home </h2></Link>
          <Link to='/form'> <h2>Inscription</h2></Link>
        </div>
      </header>
  )
}

export default Header