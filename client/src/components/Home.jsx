import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {todosLosProductos} from '../actions/actions'
import Paginado from './Paginado';
import { Box } from '@mui/system';
import Card from './Card';
import Navbar from './Navbar'
import {Grid} from '@mui/material'
import '../styles/box.css'



export default function Home(){

    const dispatch = useDispatch();
    const newState = useSelector(state => state.products)

    const [page, setPage] = useState(1);
    const [characterPerPage, setCharacterPerPage] = useState(8);
    const index = page * characterPerPage;
    const endIndex = index - characterPerPage;
    const actualPage = newState?.slice(endIndex, index);

    const paginado = (numPage) =>{
        setPage(numPage)
      }
 
    useEffect(()=>{

        dispatch(todosLosProductos())

    },[dispatch]) 

    return(
        <div>
            <Navbar/>
            <Box id='box'>
                <Box id='textBox1'>We love the sea,</Box>
                <Box id='textBox2'>We love sailing...</Box>
            </Box>
            
            <Grid container spacing={1}>
            {
                
                actualPage?.map(e => 
                    {
                        return(
                            <Fragment>
                               
                                <Grid item xs={12} sm={6} md={4} lg={3}>
<<<<<<< HEAD
                                
=======
                                    
                                        
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
                                        <Card 
                                            tipo = {e.tipo}
                                            Marca={e.Marca}
                                            modelo = {e.modelo}
                                            Motor={e.Motor}
                                            precio = {e.precio}
                                            astillero = {e.astillero}
                                            fabricacion = {e.fabricacion}
                                            localizacion = {e.localizacion}
                                            imagenes = {e.imagenes[0]}
                                            producto={e.producto}
                                            descripcion={e.descripcion}
                                            Tamaño={e.Tamaño}
<<<<<<< HEAD
                                            Link={<Link to={`/home/${e._id}`} >Info</Link> }
                                        />
                                  
=======
                                            Link={<Link to={`/home/${e.id}`} id='buttonText'>Info</Link> }
                                        />
                                      
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
                                </Grid>
                        
                            </Fragment>
                        )
                    })
            }
            </Grid>

            <Paginado 
            characterPerPage ={characterPerPage}
            newState ={newState.length}
            paginado = {paginado}
            />

        </div>
    )

}   


