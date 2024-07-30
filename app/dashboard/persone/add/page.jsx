import React from 'react'
import styles from '/app/ui/dashboard/users/addUser/addUser.module.css'

const AddSedePage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='username' name='username' required/>
        <input type="email" placeholder='email' name='email' required/>
        <input type="password" placeholder='password' name='password' required/>
        <input type="phone" placeholder='telefono' name='telefono' />
        <select name='isAdmin' selected id='isAdmin'>
          <option value={false}>Is Admin</option>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
        <select name='isActive' selected id='isActive'>
          <option value={true}>E' Attivo?</option>
          <option value={true}>Si</option>
          <option value={false}>No</option>
        </select>
        
        
        <textarea name='address' id='address' rows="16" placeholder='Indirizzo'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddSedePage