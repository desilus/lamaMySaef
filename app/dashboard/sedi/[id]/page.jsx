import React from 'react'
import styles from '/app/ui/dashboard/sedi/singleSede/singleSede.module.css'
import Image from 'next/image'

const SingleSedePage = () => {
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

            <label>Title</label>
            <input type='text' name='title' placeholder='Brescia'/>
            <label>Provincia</label>
            <input type="text" placeholder='provincia' name='provincia' />
            <label>Indirizzo</label>
            <input type="text" placeholder='indirizzo' name='indirizzo' />
            <label>Cap</label>
            <input type="number" placeholder='cap' name='cap' />
            <label>Categoria</label>
            <select name='cat' id='cat'>
                <option value='general'>Scegli una tipologia</option>
                <option value='legale'>Legale</option>
                <option value='operativa'>Operativa</option>
                <option value='unita_locale'>Unità locale</option>
            </select>
            <label>Indirizzo</label>
            <textarea name='desc' id='desc' rows="16" placeholder='Description'></textarea>
            
            <button>Aggiorna</button>
            </form>
            
        </div>
    </div>
  )
}

export default SingleSedePage