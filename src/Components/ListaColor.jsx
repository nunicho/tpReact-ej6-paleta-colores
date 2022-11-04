import React from "react";
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";
import { consultarAPI } from '../Components/helpers/queries';
import { useEffect, useState } from 'react';

const ListaColor = ({color, setColores}) => {



  return (
    <div>
    <ListGroup>
        {
            color.map((color)=>  <ItemColor key={color._id} color={color} setColores={setColores}></ItemColor> )
        }    
    </ListGroup>

    </div>
  );
};

export default ListaColor;