import React from 'react'
import styles from './search.module.css'
import { MdSearch} from 'react-icons/Md'

const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search