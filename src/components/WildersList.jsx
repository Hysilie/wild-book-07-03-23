import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Wilder from './Wilder'
 import wildersData from "../data/wilders"
import styles from "../styles/WildersList.module.css"

function WildersList() {
const [wilders, setWilders] = useState([])

useEffect(() => {
 const getWilders = async () => {
  const results = await axios.get("http://localhost:5000/api/wilder")
  setWilders(results.data)
 }

 getWilders()
}, [])

console.log(wilders)


  return (
    <section className={styles.cardRow}>
        {wilders?.map((wilder, index) => <Wilder key={wilder.id} {...wilder}/>)} 
   </section>
  )
}

export default WildersList