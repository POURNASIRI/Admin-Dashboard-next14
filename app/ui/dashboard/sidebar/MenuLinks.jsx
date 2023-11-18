'use client'

import Link from 'next/link'
import styles from '../sidebar/sidebar.module.css'
import { usePathname } from 'next/navigation'


function MenuLinks({icon,title,path}) {

    const pathName = usePathname()

  return (
    <Link className={`${styles.links} ${pathName === path && styles.active}`} href={path}>
    {icon}
    {title}
    </Link>
  )
}

export default MenuLinks