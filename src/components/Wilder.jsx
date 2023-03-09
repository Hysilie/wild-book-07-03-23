import axios from 'axios'
import React from 'react'
import blank_image from '../assets/blank-profile.png'
import trash from '../assets/trash.svg'
import styles from '../styles/Wilder.module.css'
import Skill from './Skill'

function Wilder({id, name,city, skills, wilders, setWilders, getWilders, allSkills}) {


const deleteWilder = async () => {
  await axios.delete(`http://localhost:5000/api/wilder/${id}`)
  setWilders(wilders.filter((wilder) => wilder.id !== id))

}

const addSkill = async(e) =>{
  const value = e.target.value;

  await axios.post(`http://localhost:5000/api/wilder/${id}/skills/${value}/add`)
  getWilders()

}


    return (
<article className={styles.card}>
<img src={blank_image}  alt='blank_picture'/>

<h3>{name} - {city} <button className={styles.trash} onClick={deleteWilder}><img src={trash} alt='Delete'/></button></h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse ut eos eius delectus molestias fugiat, impedit adipisci porro tenetur doloremque aspernatur. Voluptate odio a ipsam rerum architecto, illum natus!</p>
<h4>Skills</h4>
<ul className={styles.skills} >
{ skills?.map((skill) => 
  <Skill skill={skill} />
)}
 </ul>

<h4>Add skill : </h4>
<select onChange={addSkill} > 
  <option>---</option>
  { allSkills?.map((skill) => 
  <option key={skill.id} value={skill.id}>{skill.name}</option>)}

</select>


    </article>
  )
}

export default Wilder