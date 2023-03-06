import { Form } from "react-router-dom"


const Header = () => {
  return (
    <Form>
      <h2>Recipe App</h2>
      <input/>
      <button>SEARCH</button>
      <select name="mealType" id="mealType"></select>
    </Form>
  )
}

export default Header
