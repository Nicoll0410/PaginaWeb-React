import { Routes, Route } from "react-router-dom"
import { Layaut } from "./components/Layaut"
import { NavBar } from "./components/NavBar"
import { Inicio } from "./pages/Inicio"
import { Cursos } from "./pages/Cursos"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
          <NavBar></NavBar>
          <Layaut>
              <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/cursos" element={<Cursos/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>
              </Routes>
          </Layaut>
      </div>
    </>
  )
}

export default App
