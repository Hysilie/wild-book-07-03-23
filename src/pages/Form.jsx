import React, {useState} from 'react'
import FormInput from '../components/FormInput';
import axios from 'axios';

function Form() {
const [wilderInformations, setWilderInformations] = useState({name :'', city:'', email:''})

  const handleWilderInformations = (e) => {
    const { name, value } = e.target;
    setWilderInformations({
      ...wilderInformations,
      [name]: value,
    });
  };

    const addWilder = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/wilder',  wilderInformations ) 
    }


return (
    <div>
        <form onSubmit={addWilder}>

        <FormInput inputType='text' inputName='name' labelName='Name' handleWilderInformations={handleWilderInformations} />
        <FormInput inputType='email' inputName='email' labelName='Email' handleWilderInformations={handleWilderInformations} />
        <FormInput inputType='text' inputName='city' labelName='City' handleWilderInformations={handleWilderInformations} />

        <button type='submit'>Ajouter un Wilder </button>
        </form>
    </div>
  )
}

export default Form