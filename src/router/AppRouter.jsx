import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyles } from "../components/globalstyles/GlobalStyles"
import Navbar from "../components/nav/Navbar"
import About from "../pages/about/About"
import Detail from "../pages/detaail/Detail"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter"


const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="login" element={<Login/>}/>

        <Route path="about" element={<PrivateRouter/>}>
        <Route path ="" element={<About/>}/>
        </Route>

        <Route path="detail" element={<PrivateRouter/>}>
        <Route path ="" element={<Detail/>}/>
        </Route>

        
      
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter
