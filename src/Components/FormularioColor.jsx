import ListaColor from "./ListaColor";
import { Form, Button } from "react-bootstrap";
// import { GiPaintBucket } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { creaColorAPI } from "../Components/helpers/queries";
import Swal from 'sweetalert2'


const FormularioColor = () => {

const {register, handleSubmit, formState:{errors}, reset} = useForm( 
  {defaultValues: {
    nombreColor: "",
  }});

const onSubmit = (datos) =>{
  // los datos ya están validados
  console.log(datos)
  // enviar los datos a la api
  creaColorAPI(datos).then((respuesta)=>{
    if(respuesta.status === 201){
      // el producto se creó
      Swal.fire('Color creado', 'El color fue creado correctamente', 'success')
      reset();
      }else{
      //mostrar 
      Swal.fire('Color no creado', 'Vuelva a intentar nuevamente', 'error')
    }
    
  })
}
  return (
  <article >
    
    <div className='d-inline-flex'>
    {/* <h2 className="display-4 mx-1">
    < GiPaintBucket className="fs-1" color={color} onChange={updatedColor => setColor(updatedColor)}></GiPaintBucket></h2>
     */}
    <h1 className="display-4"> Administrar colores</h1> 
    <hr />
    </div>
    <div>
      <Form  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="nuevoNombreColor">
          <Form.Control
            type="text"
            placeholder="Ingrese color: ej blue, red, #eda35c..."
           {...register('nombreColor', {
           required:'Este dato es obligatorio', 
             minLength: {
            value: 2,
            message: 'Debe ingresar como mínimo 2 caracteres'
          },
          maxLength:{
            value: 50,
            message: 'Debe ingresar como máximo 20 caracteres'
          }       
        })} />
        <Form.Text className="text-danger">{errors.nombreColor?.message}</Form.Text>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

       {<ListaColor></ListaColor>}
      </div>
    </article>
  );
};

export default FormularioColor;