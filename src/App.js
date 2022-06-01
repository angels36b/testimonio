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
          titulo="Una API sencila by Miguel"
          ciudad="Suecia"
          testimonio="Aprender React es más fácil de lo que parece si ya tienes unas bases de programación y Javascript. Suele costar más el cambio de mentalidad (pasar de una programación imperativa a una declarativa) que aprender como usar su API."
          imagen="blue-react"
        />
        <Testimonio
          titulo="Una API sencila by Miguel"
          ciudad="Suecia"
          testimonio="Aprender React es más fácil de lo que parece si ya tienes unas bases de programación y Javascript. Suele costar más el cambio de mentalidad (pasar de una programación imperativa a una declarativa) que aprender como usar su API."
          imagen="placa-react"
        />
      </div>
    </div>
  );
}

export default App;
