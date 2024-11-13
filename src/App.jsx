import { Button } from "./components/Button"
import { Layaut } from "./components/Layaut"
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
          <NavBar></NavBar>
          <Layaut>
            <p></p>
          </Layaut>
      </div>
    </>
  )
}

export default App
