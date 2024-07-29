import React from 'react'
import styles from "./transaction.module.css"
import Image from 'next/image'
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimi documenti</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Stato</td>
            <td>Data</td>
            <td>Sede</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <div className={styles.user}>
              <Image 
              src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage}
              />
              DVR
              </div>                          
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>In scadenza</span>
            </td>
            <td>
              23/08/2024
            </td>
            <td>
              Borgosatollo, BS
            </td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>

              <Image 
              src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage}
              />
              Analisi Rumore
            </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Valido</span>
            </td>
            <td>
              23/03/2026
            </td>
            <td>
            Borgosatollo, BS
            </td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              
              <Image 
              src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage}
              />
              Movimenti ripetuti
            </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.canceled}`}>Scaduto</span>
            </td>
            <td>
              23/03/2021
            </td>
            <td>
            Borgosatollo, BS
            </td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              
              <Image 
              src="/noavatar.png" 
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage}
              />
              Analisi Vibrazioni
            </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.canceled}`}>Scaduto</span>
            </td>
            <td>
              23/03/2021
            </td>
            <td>
              Costa Volpino, BG
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction