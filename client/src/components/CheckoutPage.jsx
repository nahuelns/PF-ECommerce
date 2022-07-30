
import NavBar from './Navbar'
import { addToBasket, removeToBasket } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";



export default function CheckoutPage()
{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateBasket = useSelector(state => state.basket)
    useEffect(() =>
    {

        dispatch(addToBasket())

    }, [dispatch])

    const volver = () =>
    {
        navigate(-1)
    }

    const deleteProduct=(id)=>{
        dispatch(removeToBasket(id))
     
    }


    return (
        <div>
            <NavBar />
            <p id='titleCheckoutPage'>Shopping Cart</p>
            {
        
                stateBasket?.map(e => (
                    e !== undefined &&
                <div id='checkoutCard'>

                    <ul id='detalleCheck'>
                        {
                            e.imagenes?.map(e =>
                                <img id='imgCheckout' src={e} alt='img' />
                            )
                        }
                        
                        {
                            e.modelo && <li><p>Modelo: {e.modelo}</p></li>
                        }
                        {
                            e.marca && <li><p>Marca: {e.marca}</p></li>
                        }
                        {
                            e.tipo && <li><p>tipo: {e.tipo}</p></li>
                        }
                        {
                            e.fabricacion && <li><p>fabricacion: {e.fabricacion}</p></li>
                        }
                        {
                            e.astillero && <li><p>astillero: {e.astillero}</p></li>
                        }
                        {
                            e.motor && <li><p>Motor: {e.motor}</p></li>
                        }
                        {
                            e.localizacion && <li><p>localizacion: {e.localizacion}</p></li>
                        }

                        {
                            e.precio && <li><p>precio: {e.precio}</p></li>
                        }
                        {
                            e.producto && <li><p>producto: {e.producto}</p></li>
                        }
                        {
                            e.descripcion && <li><p>descripcion: {e.descripcion}</p></li>
                        }

                        {
                            e.Tamaño && <li><p>Tamaño: {e.Tamaño}</p></li>
                        }
                        
                    </ul>

                        {
                            e._id &&<IconButton aria-label="remove to cart" onClick={()=>deleteProduct(e._id)} >
                                    <DeleteForeverIcon id='buttonRemove' />
                                    </IconButton>
                                    
                        }   
                    
                    </div>
                    ))
                
            }
            <button id='buttonBackCheckout' onClick={volver}>Back</button>
        </div>

    )
}
