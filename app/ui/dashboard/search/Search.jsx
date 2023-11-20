import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

function Search({placeholder}) {
  return (
    <div className={styles.container}>
        <MdSearch size={20}/>
        <input type="text"
        className={styles.input} 
        placeholder="Search for a User" />
    </div>
  )
}

export default Search