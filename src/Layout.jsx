import React from 'react'
import { SideNav } from './Components'

const Layout = ({children}) => {
  return (
    <div>
        <SideNav />
        {children}
    </div>
  )
}

export default Layout