import React from 'react'
import styles from '../styles/Wilder.module.css'


function Skill({skill}) {
  return (
    <li key={skill.id}>
    {skill.name}
  </li>
  )
}

export default Skill