import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'


const cardData = data.map(card => {
  return <Card 
          key={card.title}
          {...card}
          />
})

function App() {
  return (
    <div>
      <Navbar />
      <section className='card-list'>
        {cardData}
      </section>
    </div>
  )
}

export default App
