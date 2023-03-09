import React from 'react'
import styles from '../styles/Wilder.module.css'
import axios from 'axios'


function Skill({skill, deleteSkill}) {

  return (
    <li key={skill.id}>
    {skill.name}
    <button className={styles.trash} onClick={() => deleteSkill(skill.id)}><h4>X</h4></button>
  </li>
  )
}

export default Skill