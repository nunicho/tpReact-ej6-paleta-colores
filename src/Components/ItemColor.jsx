import { ListGroup, Button} from "react-bootstrap";
import Swal from 'sweetalert2';
import {  borrarColorAPI, consultarAPI } from "../Components/helpers/queries";
import { FaPaintBrush } from 'react-icons/fa';

const ItemColor = ({color, setColor}) => {
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
    borrarColorAPI(color._id).then((respuesta)=>{
    if (respuesta.status === 200) {
      consultarAPI().then((respuesta) => {
        setColor(respuesta);
    });

      Swal.fire(
      'Color borrado!',
      'El color fue correctamente borrado',
      'success'
       );
      } else {
        Swal.fire(
      'Se produjo un error',
      'Pruebe hacer esta operación más tarde',
      'success'
     );
    }
    });
   }
});
}
    return (
        <ListGroup.Item className="d-flex justify-content-between my-2 border-2 overflow-auto">
            <div>
            <h2 className="fs-1"style={{color:(color.nombreColor)}}><FaPaintBrush/></h2>
            {color.nombreColor}
            </div>
            <div>
            <h2 className="fs-1"style={{color:(color.colorHexadecimal)}}><FaPaintBrush/></h2>
            {color.colorHexadecimal}
            </div>
            <div>
            <h2 className="fs-1"style={{color:(color.colorRGBRGBA)}}><FaPaintBrush/></h2>
            {color.colorRGBRGBA}
            </div>            
            <Button variant="danger" onClick={borrarColor}>Borrar</Button> 
        </ListGroup.Item>
    );
};  

export default ItemColor;
