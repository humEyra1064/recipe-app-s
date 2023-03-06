import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>

      <Link to="/">
      <i>{"Hümeyra"}</i>
      <span>Recipe</span>
      </Link>

      <ul>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </ul>
      
    </div>
  )
}

export default Navbar
