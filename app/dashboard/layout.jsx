import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebare from '../ui/dashboard/sidebar/Sidebar'
import styles from '../ui/dashboard/dashboard.module.css'

function Layout({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
        <Sidebare />
        </div>
        <div className={styles.content}>
        <Navbar/>
        {children}
        </div>
    </div>
  )
}

export default Layout