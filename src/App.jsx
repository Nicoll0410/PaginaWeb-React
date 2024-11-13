import { Blocks } from "./components/Blocks"
import { Layaut } from "./components/Layaut"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
          <NavBar></NavBar>
          <Layaut>
          </Layaut>
          <Blocks />
      </div>
    </>
  )
}

export default App
