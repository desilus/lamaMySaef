import React from 'react'
import styles from '/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>

            <label>Username</label>
            <input type='text' name='username' placeholder='John Doe'/>
            <label>Email</label>
            <input type='email' name='email' placeholder='johndoe@gmail.com'/>
            <label>Password</label>
            <input type='password' name='password' />
            <label>Telefono</label>
            <input type='phone' name='phone' placeholder='0373123456'/>
            <label>Indirizzo</label>
            <textarea type='text' name='address' placeholder='Via della prova 1234'/>
            <label>Is Admin?</label>
            <select name='isAdmin' id='isAdmin'>
                <option value={true}>Si</option>
                <option value={false}>No</option>
            </select>
            <label>E' Attivo?</label>
            <select name='isActive' id='isActive'>
                <option value={true}>Si</option>
                <option value={false}>No</option>
            </select>
            <button>Aggiorna</button>
            </form>
            
        </div>
    </div>
  )
}

export default SingleUserPage