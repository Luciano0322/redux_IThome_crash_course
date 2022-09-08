import CakeBlock from "./components/CakeBlock"
import CoffeeBeanBlock from "./components/CoffeeBeanBlock"
import CoffeeBlock from "./components/CoffeeBlock"

function App() {

  return (
    <div className="container">
      <h1>Restaurant Record</h1>
      <CoffeeBlock/>
      <CoffeeBeanBlock/>
      <CakeBlock/>
    </div>
  )
}

export default App
