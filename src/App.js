import "./App.css";
import Testimonio from "./componentes/Testimonio.js";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        
        <h1>Testimonios de usuarios sobre React js</h1>
        
        <Testimonio
          titulo="Una API sencila by Miguel"
          ciudad="Suecia"
          testimonio="Aprender React es más fácil de lo que parece si ya tienes unas bases de programación y Javascript. Suele costar más el cambio de mentalidad (pasar de una programación imperativa a una declarativa) que aprender como usar su API."
          imagen="black-react"
        />
        <Testimonio
          titulo="Una API sencila by Angel David"
          ciudad="Colombia"
          testimonio="Nos permite organizar nuestra aplicación en torno a componentes, esto hace que nuestro código sea muy ordenado, mantenible y por sobre todas las cosas: reutilizable."
          imagen="blue-react"
        />
        <Testimonio
          titulo="Una API sencila by Miguel"
          ciudad="Mexico"
          testimonio="La naturaleza de la librería es más declarativa, es decir, en lugar de preocuparnos de los script de comportamiento del DOM (jQuery, vanilla JS) contamos con un estado de la aplicación y sus componentes 
                      responden ante la variación de ese estado"
          imagen="placa-react"
        />
      </div>
    </div>
  );
}

export default App;
