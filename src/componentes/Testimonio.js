import React from 'react';
import '../style/Testimonio.css'

function Testimonio(){
  return(
   <div className='contenedor-testimonio'>
     <img 
        className='imagen-testimonio'
        src={require ('../imagenes/Testimonio-Beatles.jpg')}
        alt='Foto con Beatle'
     />
     <div className='contenedor-texto-testimonio'>
       <p className='titulo-testimonio'> Angel junto a los Beatles</p>
       <p className='Ciudad-testimonio'>ciudad de New york</p>
       <p className='texto-testimonio'> "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."  </p>
       </div> 

   </div> 
  );

}

export default Testimonio;

//exportacion por defecto= dice que sera el unico elementos que se exportara en el archivo
//exportacion nombrada= se puede exportar varios elementos de un mismo archivo