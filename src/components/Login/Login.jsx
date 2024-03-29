
// import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return <>
    <div className="login">
      <h3>Inicio de sesion</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="usuario"/>
        <input type="text" placeholder="pass"/>

        <button type="submit"> Login</button>
      </form>


      {/* <Link to="/">
        <button className="btnLogin">Login</button>
      </Link> */}

    </div>

  </>

}

// rfce

