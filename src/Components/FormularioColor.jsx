import ListaColor from "./ListaColor";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const FormularioColor = () => {

  const coloresLocalStorage = JSON.parse(localStorage.getItem('arregloColorKey')) || [];

  const [color, setColor] = useState("");
  const [arregloColor, setArregloColor] = useState(coloresLocalStorage);

useEffect(()=>{
JSON.stringify(arregloColor)
localStorage.setItem('arregloColorKey', JSON.stringify(arregloColor));
},[arregloColor])

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setArregloColor([...arregloColor, color]);

    setColor('');
  };
const borrarColor = (nombre) =>{
  let arregloModificado = arregloColor.filter((item)=>(item !== nombre ))

  setArregloColor(arregloModificado)
}
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese un color ej Blue"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaColor arregloColor={arregloColor} borrarColor={borrarColor} ></ListaColor>
    </div>
  );
};

export default FormularioColor;