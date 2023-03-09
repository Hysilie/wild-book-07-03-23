import React from 'react'
import styles from '../styles/FormInput.module.css'

function FormInput({label, name, type,placeholder, handleWilderInformations}) {


  return (
    <div className={styles.inputRow}>
    <label>{label} </label>
    <input 
    name={`${name}`}
    type={`${type}`}
    onChange={handleWilderInformations}
    placeholder={`${placeholder}`}
     />
    
    </div>
  )
}

export default FormInput