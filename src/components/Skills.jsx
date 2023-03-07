import React from 'react'

function Skills({skills}) {

  return (
        <ul className="skills">
{ skills?.map((skill) => 
  <li>
    {skill.title}
    <span className="votes">{skill.votes}</span>
  </li>
)}
 </ul>

    
  )
}

export default Skills