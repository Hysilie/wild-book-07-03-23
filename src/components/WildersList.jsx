import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Wilder from './Wilder'
 import wildersData from "../data/wilders"
import styles from "../styles/WildersList.module.css"

function WildersList() {
const [wilders, setWilders] = useState([])
const deleteWilder =  (id) => {
  axios.delete(`http://localhost:5000/api/wilder/${id}`)
  setWilders(wilders.filter((wilder) => wilder.id !== id))
}

useEffect(() => {
 const getWilders = async () => {
  const results = await axios.get("http://localhost:5000/api/wilder")
  setWilders(results.data)
 }

 getWilders()
}, [wilders.length])

console.log(wilders)


  return (
    <section className={styles.cardRow}>
        {wilders?.map((wilder, index) => <Wilder key={wilder.id} {...wilder} deleteWilder={deleteWilder}/>)} 
   </section>
  )
}

export default WildersList