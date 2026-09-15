import AnnouncementBar from "./announcementBar"
import Navbar from "../navbar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
    <AnnouncementBar/>
    <Navbar />
    <main>
        <Outlet/>
    </main>
    <Footer />
    </>
  )
}

export default MainLayout
