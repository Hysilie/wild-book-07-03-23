import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Wilder from './Wilder'
import styles from "../styles/WildersList.module.css"
import { useWilderContext } from '../contexts/WilderContext';

function WildersList() {

  const { wilders, getWilders, setWilders } = useWilderContext()

  const [allSkills, setAllSkills] = useState([])

const getSkills = async () => {
  const results = await axios.get("http://localhost:5000/api/skill")
  setAllSkills(results.data)
 }



useEffect(() => {
 getSkills()
}, [])





  return (
    <section className={styles.cardRow}>
        {wilders?.map((wilder) => <Wilder key={wilder.id} {...wilder} setWilders={setWilders} wilders={wilders} allSkills={allSkills} getWilders={getWilders}/>)} 
   </section>
  )
}

export default WildersList