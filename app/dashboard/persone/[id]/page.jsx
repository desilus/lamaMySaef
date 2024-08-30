import React from 'react'
import styles from '/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { fetchUser } from '../../../lib/data'
import { updateUser } from "/app/lib/actions"

const SingleUserPage = async ({params}) => {

    const {id} = params; 
    const user = await fetchUser(id);
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={user.img || "/noavatar.png"} alt="" fill />
            </div>
            {user.username}
        </div>
        <div className={styles.formContainer}>
            <form action={updateUser} className={styles.form}>
            <input type='hidden' name='id' value={user.id}/>
            <label>Username</label>
            <input type='text' name='username' placeholder={user.username}/>
            <label>Email</label>
            <input type='email' name='email' placeholder={user.email}/>
            <label>Password</label>
            <input type='password' name='password' />
            <label>Telefono</label>
            <input type='phone' name='phone' placeholder={user.phone}/>
            <label>Indirizzo</label>
            <textarea type='text' name='address' placeholder={user.address}/>
            <label>Is Admin?</label>
            <select name='isAdmin' id='isAdmin'>
                <option value={true} selected={user.isAdmin} >Si</option>
                <option value={false} selected={!user.isAdmin} >No</option>
            </select>
            <label>E' Attivo?</label>
            <select name='isActive' id='isActive'>
                <option value={true} selected={user.isActive}>Si</option>
                <option value={false} selected={!user.isActive}>No</option>
            </select>
            <button>Aggiorna</button>
            </form>
            
        </div>
    </div>
  )
}

export default SingleUserPage