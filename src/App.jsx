
import './App.css'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { useCart } from './hooks/useCart'
function App() {

  
const { addCart, clearCart,decrementCart,incrementCart,removeFromCart,car,data,carTotal,isEmpy} = useCart()


  return (
    <>
    <Header
    car={car}
    removeFromCart={removeFromCart}
    incrementCart={incrementCart}
    decrementCart={decrementCart}
    clearCart={clearCart}
    carTotal={carTotal}
    isEmpy={isEmpy}
    />  

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar
            key={guitar.id}
            guitar = {guitar}
            addCart = {addCart}
            />

          ))}
          

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
