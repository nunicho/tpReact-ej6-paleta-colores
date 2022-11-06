import ListaColor from "./ListaColor";
import { Form, Button } from "react-bootstrap";
import { consultarAPI, creaColorAPI } from "../Components/helpers/queries";
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import Swal from 'sweetalert2'
import { GiPaintBucket } from 'react-icons/gi';


const FormularioColor = () => {
const [color, setColor]=useState([])

useEffect(() => {
    consultarAPI().then((respuesta) => {
      setColor(respuesta);
    });
  }, []);

//validaciones
const {register, handleSubmit, formState:{errors}, reset} = useForm({
    defaultValues: {
      nombreColor: "",
      colorHexadecimal:"",
      colorRGBRGBA:"",
  }});

// inicializar la navegación

const onSubmit = (datos) =>{
  creaColorAPI(datos).then((respuesta)=>{
    if(respuesta.status === 201){
      // el producto se creó
      Swal.fire('Color creado', 'El color fue creado correctamente', 'success')
      reset();
      consultarAPI().then((respuesta) => {
      setColor(respuesta);
      });
      }else{
      //mostrar 
      Swal.fire('Color no creado', 'Vuelva a intentar nuevamente', 'error')
    }
    
  })
}

  return (
  <article >
   <div className='d-inline-flex'>
      <h2 className="display-4 mx-1">
         < GiPaintBucket className="fs-1" ></GiPaintBucket></h2> 
       <h1 className="display-4"> Administrar colores</h1> 
        <hr />
    </div>
    <div>
      <Form  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese nombre del color: ej blue, red..."                     
           {...register('nombreColor', {
           required:'Este dato es obligatorio', 
             minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 50 caracteres'
          }       
        })} />
        <Form.Text className="text-danger">{errors.nombreColor?.message}</Form.Text>
       
        <Form.Control
            type="text"
            placeholder="OPCIONAL - Ingrese hexadecimal: ej #eda35c..."
           {...register('colorHexadecimal', {
           minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 50 caracteres'
          }       
        })} />
        <Form.Text className="text-danger">{errors.colorHexadecimal?.message}</Form.Text>

        <Form.Control
            type="text"
            placeholder="OPCIONAL - Ingrese hexadecimal: ej rgb(37, 150, 190)..."
           {...register('colorRGBRGBA', {
           minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 50 caracteres'
          }       
        })} />
        <Form.Text className="text-danger">{errors.colorRGBRGBA?.message}</Form.Text>

          <Button variant="primary my-2"  type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

       {<ListaColor color={color} setColor={setColor}></ListaColor>}
      
      </div>
    </article>
  );
};

export default FormularioColor;




/*


import ListaColor from "./ListaColor";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GiPaintBucket } from 'react-icons/gi';



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
  <article >
    <div className='d-inline-flex'>
    <h2 className="display-4 mx-1">
    < GiPaintBucket className="fs-1" color={color} onChange={updatedColor => setColor(updatedColor)}></GiPaintBucket></h2>
    <h1 className="display-4"> Administrar colores</h1> 
    <hr />
    </div>
    <div>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese color: ej blue, red, #eda35c..."
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
    </article>
  );
};

export default FormularioColor;

*/




/*
import ListaColor from "./ListaColor";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GiPaintBucket } from 'react-icons/gi';



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
  <article >
    <div className='d-inline-flex'>
    <h2 className="display-4 mx-1">
    < GiPaintBucket className="fs-1" color={color} onChange={updatedColor => setColor(updatedColor)}></GiPaintBucket></h2>
    <h1 className="display-4"> Administrar colores</h1> 
    <hr />
    </div>
    <div>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese color: ej blue, red, #eda35c..."
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
    </article>
  );
};

export default FormularioColor;
*/