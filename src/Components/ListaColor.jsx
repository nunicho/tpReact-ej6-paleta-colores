import React from "react";
import ItemColor from "./ItemColor";
import ListGroup from "react-bootstrap/ListGroup";


const ListaColor = ({color, setColor}) => {
  
return (
    <div>
    <ListGroup>
        {
            color.map((color)=>  <ItemColor key={color._id} color={color} setColor={setColor}></ItemColor> )
        }    
    </ListGroup>

    </div>
  );
};

export default ListaColor;