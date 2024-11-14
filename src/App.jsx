import { Routes, Route } from "react-router-dom"
import { Layaut } from "./components/Layaut"
import { NavBar } from "./components/NavBar"
import { Inicio } from "./pages/Inicio"
import { Cursos } from "./pages/Cursos"
import { Login } from "./pages/Login"
import { Registro } from "./pages/Registro"
import { Imagenes } from "./pages/Imagenes"
import { Footer } from "./components/Footer"
import { NotFound } from "./components/NotFound"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
          <NavBar></NavBar>
          <Layaut>
              <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/cursos" element={<Cursos/>}></Route>
                <Route path="/imagenes" element={<Imagenes/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/registro" element={<Registro/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
              </Routes>
          </Layaut>
          <Footer />
      </div>
    </>
  )
}

export default App
