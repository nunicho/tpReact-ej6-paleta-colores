import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import FormularioColor from './Components/FormularioColor';
import IconoInicio from './Components/IconoInicio';





const App = () => {
  return (
    
    <Container className='my-5'>
    <IconoInicio></IconoInicio>
    <FormularioColor>

    </FormularioColor>
    </Container>
    
  );
};

export default App;
