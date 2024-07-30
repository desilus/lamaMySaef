import React from 'react'
import styles from '/app/ui/dashboard/users/users.module.css'
import Search from '/app/ui/dashboard/search/search'
import Pagination from '/app/ui/dashboard/pagination/pagination'
import Link from 'next/link'
import Image from 'next/image'

const Persone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/persone/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            
            <td>Creato Il</td>
            <td>Ruolo</td>
            <td>Corso</td>
            <td>Azione</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
              John Doe
              </div>
              </td>
              <td>12/01/2024</td>
              <td>Impiegato</td>
              <td>Generale</td>
              <td>
                <div className={styles.buttons}>

                <Link href="/dashboard/persone/test">
                <button className={`${styles.button} ${styles.view}`}>Visualizza</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Cancella</button>
                </div>
              </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Persone