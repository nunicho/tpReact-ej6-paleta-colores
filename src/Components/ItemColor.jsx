import { ListGroup} from "react-bootstrap";
import { Button} from "react-bootstrap";
import { FaPaintBrush } from 'react-icons/fa';
import { consultarAPI, borrarColorAPI } from "../Components/helpers/queries";
import Swal from 'sweetalert2';

const ItemColor = ({color, setColores}) => {

const borrarColor = () =>{
Swal.fire({
  title: '¿Estás seguro? de eliminar el color',
  text: "No se puede revertir este paso",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Borrar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    //realizar la consulta a la API
    borrarColorAPI(color._id).then((respuesta)=>{
      if(respuesta.status === 200){
        // actualizar el state productos o la tabla
      consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setColores(respuesta)
      })
      Swal.fire(
      'Color borrado!',
      'El color fue correctamente borrado',
      'success'
    )
      } else {
        Swal.fire(
      'Se produjo un error',
      'Pruebe hacer esta operación más tarde',
      'success'
     )}
    })
  
  }
})

  }
    
  

    return (
        <ListGroup.Item className="d-flex justify-content-between my-2 border-2">
            <div>
            <h2 className="fs-1"style={{color:(color.nombreColor)}}><FaPaintBrush/></h2>
            {color.nombreColor}
            </div>
            <div>
            <h2 className="fs-1"style={{color:(color.codigoHexadecimal)}}><FaPaintBrush/></h2>
            {color.codigoHexadecimal}
            </div>
                  <div>
            <h2 className="fs-1"style={{color:(color.codigoRGBRGBA)}}><FaPaintBrush/></h2>
            {color.codigoRGBRGBA}
            </div>
            
            <Button variant="danger" onClick={borrarColor}>Borrar</Button> 
        </ListGroup.Item>
    );
};  

export default ItemColor;


/*
import { ListGroup} from "react-bootstrap";
import { Button} from "react-bootstrap";
import { FaPaintBrush } from 'react-icons/fa';
import { consultarAPI, borrarColorAPI } from "../Components/helpers/queries";
import Swal from 'sweetalert2';

const ItemColor = ({color, setColores}) => {


const borrarColor = () =>{
Swal.fire({
  title: '¿Estás seguro? de eliminar el color',
  text: "No se puede revertir este paso",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Borrar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    //realizar la consulta a la API
    borrarColorAPI(color.id).then((respuesta)=>{
      if(respuesta.status === 200){
        // actualizar el state productos o la tabla
      consultarAPI().then((respuesta)=>{
        console.log(respuesta)
        setColores(respuesta)
      })
      Swal.fire(
      'Color borrado!',
      'El color fue correctamente borrado',
      'success'
    )
      } else {
        Swal.fire(
      'Se produjo un error',
      'Pruebe hacer esta operación más tarde',
      'success'
     )}
    })
  
  }
})

  } 

    return (
        <ListGroup.Item className="d-flex justify-content-between my-2 border-2">
            <div>
            <h2 className="fs-1"style={{color:(color)}}><FaPaintBrush/></h2>
            </div>
            {color}
            <Button variant="danger" onClick={borrarColor}>Borrar</Button>
        </ListGroup.Item>
    );
};  

export default ItemColor;


*/