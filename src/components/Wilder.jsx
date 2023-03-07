import React from 'react'
import blank_image from '../assets/blank-profile.png'
import Skills from './Skills'

function Wilder({name,city, skills}) {

console.log(...skills)


    return (
    <article className="card">
<img src={blank_image} />

<h3>{name} - {city}</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse ut eos eius delectus molestias fugiat, impedit adipisci porro tenetur doloremque aspernatur. Voluptate odio a ipsam rerum architecto, illum natus!</p>
<h4>Skills</h4>
<Skills skills={skills} />

    </article>
  )
}

export default Wilder