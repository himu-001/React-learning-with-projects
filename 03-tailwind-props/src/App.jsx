import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "BillaSur",
    job : "meow meow"
  }

  let newArr = [1,2,3,4]
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="bg-blue-500 text-white p-4">Tailwind Test</h1>
        <Card
          username="Hima"
          btntext="dont-click"
          someObj={myObj}
          newObj={newArr}
        />
        <Card username="Billa" btntext="dont-click" />
      </div>
    </>
  );
}

export default App
