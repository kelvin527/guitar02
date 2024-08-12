
import './App.css'
import Header from './components/Header'
import Guitar from './components/Guitar'
import {db} from './data/db'
import { useState } from 'react'

function App() {
// eslint-disable-next-line no-unused-vars
const [data,setDaata] = useState(db)
const [car, setCar] = useState([])

function addCart(items){
  const itemsExiste = car.findIndex(x=> x.id ===items.id)

  if(itemsExiste >=0){

    const updateCar = [...car];
    updateCar [itemsExiste].quantity++
    setCar(updateCar)

  }else{
    items.quantity = 1//se creo una propiedad al objeto para saber la cantidad
    setCar( [...car,items])
  }
}

function removeFromCart(id){
  setCar(x=> x.filter(guitar => guitar.id !==id))
  
}



  return (
    <>
    <Header
    car={car}
    removeFromCart={removeFromCart}
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
