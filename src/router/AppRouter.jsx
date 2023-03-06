import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/about/About"
import Detail from "../pages/detaail/Detail"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="login" element={<Login/>}/>
        <Route path ="about" element={<About/>}/>
        <Route path ="detail" element={<Detail/>}/>
      
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRouter
