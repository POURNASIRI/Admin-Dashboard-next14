import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebare from '../ui/dashboard/sidebar/Sidebar'

function Layout({children}) {
  return (
    <div>
        <div>
        <Sidebare/>
        </div>
        <div>
        <Navbar/>
        {children}
        </div>
    </div>
  )
}

export default Layout