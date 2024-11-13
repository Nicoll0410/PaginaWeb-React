import { Button } from "./components/Button"
import { Layaut } from "./components/Layaut"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
          <Layaut>
            <Button name="Nicoll" />
            <Button name="Miguel" />
            <Button name="Alahia" />
            <Button name="Simon" />
          </Layaut>
      </div>
    </>
  )
}

export default App
