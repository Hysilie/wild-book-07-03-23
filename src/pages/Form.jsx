import React, {useState} from 'react'
import FormInput from '../components/FormInput';
import axios from 'axios';
import styles from '../styles/Form.module.css'


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
    <div className={styles.container}>
        <form className={styles.formulary} onSubmit={addWilder}>

        <FormInput text='text' name='name' label='Name' placeholder='John Doe'handleWilderInformations={handleWilderInformations} />
        <FormInput text='email' name='email' label='Email' placeholder='email@example.com' handleWilderInformations={handleWilderInformations} />
        <FormInput text='text' name='city' label='City' placeholder='London' handleWilderInformations={handleWilderInformations} />

        <button type='submit'>Add </button>
        </form>
    </div>
  )
}

export default Form