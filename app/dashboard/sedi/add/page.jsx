import React from 'react'
import styles from '/app/ui/dashboard/sedi/addSede/addSede.module.css'

const AddSedePage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required/>
        <select name='cat' id='cat'>
          <option value='general'>Scegli una tipologia</option>
          <option value='legale'>Legale</option>
          <option value='operativa'>Operativa</option>
          <option value='unita_locale'>Unità locale</option>
        </select>
        <input type="text" placeholder='provincia' name='provincia' />
        <input type="text" placeholder='indirizzo' name='indirizzo' />
        <input type="number" placeholder='cap' name='cap' />
        <textarea name='desc' id='desc' rows="16" placeholder='Description'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddSedePage