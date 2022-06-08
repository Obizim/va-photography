import React from "react"
import { Navbar } from "./navbar"

interface Iprops {
    children: React.ReactNode
}

const Layout = ({children }: Iprops) => {
    return <React.Fragment>
        <Navbar />
        {children}
    </React.Fragment>
}

export default Layout