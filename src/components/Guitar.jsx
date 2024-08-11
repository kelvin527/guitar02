/* eslint-disable react/prop-types */

export default function Guitar({guitar,addCart}) {


  return (
    <>
       <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`img/${guitar.image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                    <p>{guitar.description}</p>
                    <p className="fw-black text-primary fs-3">${guitar.price}</p>
                    <button 
                        //onClick={()=> handleClick(guitar)}
                        /*si queremos pasar una funcion a un evento de htmel usando JSX debemos colocarla con un error funtion.
                        ESTO EVITA QUE LA FUNCION SE EJECUTE CUANDO CARGUE LA PAGINA Y LO QUE QUEREMOS ES QUE SE EJECUTE SE DE CLICK*/
                        onClick={()=> addCart(guitar)}
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
    </>
  )
}
