import { GiPaintBucket } from 'react-icons/gi';

const IconoInicio = ({nombreColor}) => {

    return (
    <h2 className="display-4 mx-1">
    < GiPaintBucket className="fs-1"style={{color:(nombreColor)}}></GiPaintBucket></h2>
    );
};  

export default IconoInicio;