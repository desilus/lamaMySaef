import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>COMING SOON </span>
          <h3 className={styles.title}>Come usare la nuova versione di MySaef</h3>
          <span className={styles.subtitle}>Tempo di visione 4 minuti</span>
            <p> className={styles.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className={styles.button}>
              <MdPlayCircleFilled />
              Guarda
            </button>
        </div>
      </div>
      <div className={styles.item}>
       
        
        <div className={styles.texts}>
          <span className={styles.notification}>IT'S HAPPENING</span>
          <h3 className={styles.title}>Nuovo evento team building</h3>
          <span className={styles.subtitle}>Gareggia con i colleghi</span>
            <p> className={styles.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className={styles.button}>
              <MdReadMore />
              Impara
            </button>
        </div>
      </div>
      </div>
    
  )
}

export default Rightbar