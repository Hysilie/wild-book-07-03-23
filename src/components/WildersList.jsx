import React from 'react'
import Wilder from './Wilder'
import wildersData from "../data/wilders"
import styles from "../styles/WildersList.module.css"

function WildersList() {

  return (
    <section className={styles.cardRow}>
        {wildersData?.map((wilder) => <Wilder {...wilder}/>)}
   </section>
  )
}

export default WildersList