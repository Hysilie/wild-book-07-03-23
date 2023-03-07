import React from 'react'
import blank_image from '../assets/blank-profile.png'
import styles from '../styles/Wilder.module.css'

function Wilder({name,city, skills}) {



    return (
<article className={styles.card}>
<img src={blank_image}  alt='blank_picture'/>

<h3>{name} - {city}</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse ut eos eius delectus molestias fugiat, impedit adipisci porro tenetur doloremque aspernatur. Voluptate odio a ipsam rerum architecto, illum natus!</p>
<h4>Skills</h4>
<ul className={styles.skills} >
{ skills?.map((skill) => 
  <li>
    {skill.title}
    <span className={styles.votes}>{skill.votes}</span>
  </li>
)}
 </ul>

    </article>
  )
}

export default Wilder