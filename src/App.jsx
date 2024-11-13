import { Button } from "./components/Button"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen">
        <h1 className="text-3xl font-bold underline">
          Hello world!
          <Button name="Nicoll" />
          <Button name="Miguel" />
          <Button name="Alahia" />
          <Button name="Simon" />
        </h1>
      </div>
    </>
  )
}

export default App
