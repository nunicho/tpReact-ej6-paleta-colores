import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import FormularioColor from './Components/FormularioColor';



const App = () => {
  return (
    
    <Container className='my-5'>
    <h1 className="display-4">Administrar colores</h1> 
    <hr />
    <FormularioColor>

    </FormularioColor>
    </Container>
    
  );
};

export default App;
