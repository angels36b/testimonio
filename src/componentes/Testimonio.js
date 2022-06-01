import React from 'react';
import '../style/Testimonio.css'

function Testimonio(props) {
  return(
   <div className='contenedor-testimonio'>
     <img 
        className='imagen-testimonio'
        src={require (`../imagenes/Testimonio-${props.imagen}.png`)}
        alt='Foto con react'
     />
     <div className='contenedor-texto-testimonio'>
       <p className='titulo-testimonio'> <strong>  {props.titulo} </strong></p>
       <p className='ciudad-testimonio'> <strong> {props.ciudad} </strong></p>
       <p className='texto-testimonio'> "{props.testimonio}"</p>
       </div> 

   </div> 
  );

}

export default Testimonio;

//exportacion por defecto= dice que sera el unico elementos que se exportara en el archivo
//exportacion nombrada= se puede exportar varios elementos de un mismo archivo