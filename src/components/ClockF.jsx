import React, { useState, useEffect } from 'react';

const ClockF = () => {
  const [fecha, setFecha] = useState({
    fecha: new Date(),
    edad: 1,
    nombre: 'Martín',
    apellidos: 'San José',
  });

  const tick = () => {
    setFecha(prevState => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  };

  useEffect(() => {
    //Se ejecuta continuamente
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      console.log('Componente va a desaparecer');
    };
    clearInterval(timerID);
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {fecha.nombre} {fecha.apellidos}
      </h3>
      <h1>Edad: {fecha.edad}</h1>
    </div>
  );
};

export default ClockF;
