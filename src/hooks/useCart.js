
import {db} from '../data/db'
import { useEffect, useState,useMemo } from 'react'


export function useCart(){

    const  initialCart = () =>{
        const localStorageCart = localStorage.getItem('cart')
      
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
      const [data] = useState(db)
      const [car, setCar] = useState(initialCart)
      
      useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(car)) 
      
      },[car])
      
      
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
      
      
      function incrementCart(id){
       let updateCart = car.map(item => {
        if(item.id ===id){
          return{
            ...item,
            quantity:item.quantity+1
          }
        }
        return item
       })
       setCar(updateCart)
      
      }
      
      function decrementCart(id){
        let updateCart = car.map(item => {
         if(item.id ===id && item.quantity > 0){
           return{
             ...item,
             quantity:item.quantity-1
           }
         }
         return item
        })
        setCar(updateCart)
       
       }
      
      function clearCart(){
        setCar([])
      }

      
    /**useMemo es un hook que se ua para el performar de una aplicacion, evita que react renderice una pieza de codigo si 
     * la dependencia aun no ha cambiado. esto evita carga inecesaria
     */
    const isEmpy= useMemo( ()=> car.length === 0, [car])
        
    
    function carTotal(){
       return car.reduce((total,item) => total + (item.quantity * item.price), 0)
    }

    return{
        addCart, clearCart,decrementCart,incrementCart,removeFromCart,car,carTotal,isEmpy,data
    }
}