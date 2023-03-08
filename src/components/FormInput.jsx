import React from 'react'

function FormInput({labelName, inputName, inputType, handleWilderInformations}) {


  return (
    <div>
    <label>{labelName} :</label>
    <input 
    name={`${inputName}`}
    type={`${inputType}`}
    onChange={handleWilderInformations} />
    </div>
  )
}

export default FormInput