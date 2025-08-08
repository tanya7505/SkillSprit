
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout(){
  return(
    <>
    
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layout