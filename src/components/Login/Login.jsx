
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


export const Login = () => {
  const navigate = useNavigate()
  const [valores, setValores] = useState({
    nombre: "",
    pass: "",
    lasName: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(valores);
    navigate('/')
  }
  const handleValores = (e) => {
    // console.log(e.target.name);
    setValores({...valores, [e.target.name]:e.target.value})
  }
  return <>
    <div className="login">
      <h3>Inicio de sesion</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="usuario"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"

        />
        <br />
        <input type="text" placeholder="pass"
          value={valores.pass}
          onChange={handleValores}
          name="pass"
        />
        <br />
        {/* <button type="submit"> Login</button> */}
        <Button type="submit" variant="contained">Hello world</Button>
      </form>


      {/* <Link to="/">
        <button className="btnLogin">Login</button>
      </Link> */}

    </div>

  </>

}

// rfce

