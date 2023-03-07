import meal from "../../assets/meal.svg"
import { FormContainer, LoginContainer } from "./Login.styled"

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <img src={meal} width={250} />
        <h1>Recipe</h1>
        <form action="">
          <input type="text" placeholder="Enter username" />
          <input type="text"
          placeholder="Enter password" />
          <button type="submit">Llogin</button>
        </form>
      </FormContainer>
    </Login>
  )
}

export default Login
