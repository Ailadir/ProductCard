import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import pizza from '../public/pizza.png'

function App() {
  return (
    <>
      <ProductCard title='Margarita' originCountry='Russia' price={34900} image={pizza} />
    </>
  )
}

export default App
