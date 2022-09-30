import { ListGroup, Button } from "react-bootstrap";
import { FaPaintBrush } from 'react-icons/fa';

const ItemColor = ({nombreColor, borrarColor}) => {

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <h2 className="fs-1"style={{color:(nombreColor)}}><FaPaintBrush/></h2>
            {nombreColor}
            <Button variant='danger' onClick={()=>borrarColor(nombreColor)}>Borrar</Button>
        </ListGroup.Item>
    );
};  

export default ItemColor;