
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import type { NextPage } from "next"

const Layout: NextPage = ({children}) => {
    return (
        <>
        <Navbar/>
            {children}
       <Footer/>
        </>
    )
}

export default Layout
