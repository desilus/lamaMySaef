import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '/app/ui/dashboard/sedi/sedi.module.css'
import Search from '/app/ui/dashboard/search/search'
import Pagination from '/app/ui/dashboard/pagination/pagination'

const Sedi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Cerca sedi..."/>
        <Link href="/dashboard/sedi/add" >
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Sede</td>
            <td>Indirizzo</td>
            <td>Totale Dipendenti</td>
            <td>Azione</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.sedi}>
              <Image src="/noproduct.jpg" alt="" width={80} height={80} className={styles.sediImage} />
              Brescia
              </div>
              </td>
              <td>via borgosatollo 1</td>
              <td>45</td>
              
              <td>
                <div className={styles.buttons}>

                <Link href="/dashboard/sedi/test">
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

export default Sedi