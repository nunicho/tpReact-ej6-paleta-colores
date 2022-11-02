// archivo que nos sirva para hacer las consultas a la API (json-server)


const URL = 'http://localhost:3004/colores' // dirección de Json Server
// const URL = 'http://localhost:4000/apicolores/colores';
// tipos de peticiones 
// petición GET que trae todos los colores o un color  
// petición POST, crear un color, login 
// petición DELETE, petición para borrar
// petición PUT, petición que pide modificar un color

// peticion GET que trae todos los colores


// petición GET que trae todos los colores
export const consultarAPI = async() =>{
    try{

        const respuesta = await fetch (URL);
        const listaProductos = await respuesta.json();
        // console.log(listaProductos)
        return listaProductos
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


