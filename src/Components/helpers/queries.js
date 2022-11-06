
const URL = 'http://localhost:4005/apicolor/colores' 

export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch (URL);
        const listaColores = await respuesta.json();
        // console.log(listaProductos)
        return listaColores
    }catch(error){
        console.log(error)
    }
}

export const creaColorAPI = async(color) =>{
    try{
        const respuesta = await fetch (URL, {
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}

export const borrarColorAPI = async(id) =>{
    try{
        const respuesta = await fetch (`${URL}/${id}`, {
         method: "DELETE",        
        });
        return respuesta;
    }catch(error){
        console.log(error)
    }
}


export const obtenerColorAPI = async(id) =>{
    try{
        const respuesta = await fetch (URL+'/'+id);
        const productoBuscado = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
       return productoBuscado
    }catch(error){
        console.log(error)
    }
}


export const editarColorAPI = async(id, datosActualizados)=>{
    try{
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosActualizados)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}


