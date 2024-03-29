import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Login/Login";
import { Navbar } from "../components/Navbar";




function LayoutWithNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// Componente de diseño sin el Navbar
function LayoutWithoutNavbar({ children }) {
  return <>
    <Login />
    {children}
  </>;
}



export const RoutesD = () => {

  return <>
    <BrowserRouter>      
      <Routes>
        <Route element={<LayoutWithNavbar />} >
          <Route path="/" element={<h1>Home</h1>} />
        </Route>

        <Route element={<LayoutWithoutNavbar />} >
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </>

}



