import { useState } from "react";
import { Button } from "../Button";

const CounterApp = () => {

  //HOOK USESTATE

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    console.log("Has pulsado el botón de incrementar");
    setCounter(counter => counter + 1); // Utiliza la forma funcional de setCounter
    // La línea anterior asegura que estás utilizando el estado anterior para calcular el nuevo estado
    // y evita problemas relacionados con el estado siendo asíncrono.
  
    // Ahora, si registras counter, verás el valor actualizado
    console.log(counter); // Esto registrará el valor anterior (0)
  };

  const handleDecrement = () => {
    console.log("Has pulsado el botón de decrementar");
    setCounter((counter) => counter - 1); // Utiliza la forma funcional de setCounter
    // La línea anterior asegura que estás utilizando el estado anterior para calcular el nuevo estado
    // y evita problemas relacionados con el estado siendo asíncrono.
  
    // Ahora, si registras counter, verás el valor actualizado
    console.log(counter); // Esto registrará el valor anterior (0)
  };

  const handleRestart = () => {
    console.log("Has pulsado el botón de resetear");
    setCounter(() => 0); // Utiliza la forma funcional de setCounter
    // La línea anterior asegura que estás utilizando el estado anterior para calcular el nuevo estado
    // y evita problemas relacionados con el estado siendo asíncrono.
  
    // Ahora, si registras counter, verás el valor actualizado
    console.log(counter); // Esto registrará el valor anterior (0)
  };

  const counterComponent = (
    <div className="counter-container">
      <h2 id="counter">{counter}</h2>
      <div id="buttons">
      <Button onClick={handleIncrement} >Add</Button>
        <Button onClick={handleDecrement} >Less</Button>
        <button onClick={handleRestart} id="restart" type="button">
          Restart
        </button>
      </div>
    </div>
  );

  return counterComponent;
};

export default CounterApp;