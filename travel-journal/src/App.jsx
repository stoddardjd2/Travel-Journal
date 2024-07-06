import Header from "./components/Header";
import Card from "./components/Card"
import data from "./assets/data"

function App() {
const cards = data.map(i=>
 <Card {...i}/>
)


  return (
    <div className="app">
    <Header/>
    {cards}
    </div>
  )
}

export default App

