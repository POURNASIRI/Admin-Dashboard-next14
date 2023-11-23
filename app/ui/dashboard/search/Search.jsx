"use client"


import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Search({placeholder}) {

    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathName = usePathname()

    const handleChange = (e)=>{
      const params = new URLSearchParams(searchParams)

      if(e.target.value){
        params.set("q",e.target.value)
        
      }else{
        params.delete("q")
      }
      replace(`${pathName}?${params}`)
    }


  return (
    <div className={styles.container}>
        <MdSearch size={20}/>
        <input type="text"
        className={styles.input}
        onChange={handleChange} 
        placeholder={`Search for a ${placeholder}`} />
    </div>
  )
}

export default Search