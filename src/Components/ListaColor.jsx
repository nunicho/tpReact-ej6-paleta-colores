import React from "react";
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";
import { consultarAPI } from '../Components/helpers/queries';
import { useEffect, useState } from 'react';

const ListaColor = () => {

  const [colores, setColores]=useState([])

useEffect  (()=>{

consultarAPI().then((respuesta)=>{
console.log(respuesta)
setColores(respuesta)
})

},[])


  return (
    <div>
    <ListGroup>
        {
            colores.map((color)=>  <ItemColor key={color.id} color={color} setColores={setColores}></ItemColor> )
        }    
    </ListGroup>

    </div>
  );
};

export default ListaColor;