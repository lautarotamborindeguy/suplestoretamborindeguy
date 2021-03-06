import React, {useContext, useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) =>  {
    let {id, nombre, precio, urlImages, descripcion, stock} = producto
    const [count,setCount] = useState(1)
    const valores = useContext(CartContext)

    const objCarrito = {
        id,
        nombre,
        precio,
        urlImages,
        descripcion,
        stock, 
        count
    }

    return (
                    <div className="mt-4 p-2 container-detail ">
                        <div className='d-flex w-100 justify-content-between '>
                            <Link to={`/`} className='navegacionDetail'>Volver</Link>
                            <Link to={`/CartContainer`} className='navegacionDetail'>Ir al Carrito</Link>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src={urlImages} className="images-detail"/>
                            <div>
                                <h2 className="title-detail">{nombre}</h2>
                                <p className="precio-detail">${precio}</p>        
                                <p className="mb-2">{descripcion}</p>
                                <p className="fw-bold mb-2">Stock: {stock}</p>
                                <ItemCount stock={stock} count={count} setCount={setCount} />
                                <Link to={`/CartContainer`}><p className="btn btn-carrito" onClick={()=>valores.addProductos(objCarrito, objCarrito.count)}>Agregar al Carrito</p></Link>
                            </div>
                        </div>
                    </div>
    )
}

export default ItemDetail