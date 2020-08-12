import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// function User({ userId }) {
//   // 101
//   const [userId, setUserId] = useState(userId);
//   const [name, setName] = useState();
//   const [lastName, setLastName] = useState();

//   useEffect(() => {
//     console.log('Buscar user: userId 101');
//     // Llamar a firebase o llamen a un recurso
//     // -> 
//     const response = get(userId);
//     // Tardar x tiempo
//     name = response.name;

//     return () => {
//       // Cancelar request para usuario 100;
//     }
//   }, []);

//   return <p>poli, coder</p>
// }


function App({ start }) {
  const [clicks, setClicks] = useState(start);
  const [date, setDate] = useState(null);

  console.log('1. Starting App');

  // Initialize effect - se ejecuta al inicio y al montar
  useEffect(() => {
    console.log('3. Componente inicializado');
    // Llamar a firebase o llamen a un recurso
  }, []);

  // Change effect - inicio y al cambiar el estado clicks
  useEffect(() => {
    console.log('4. Clicked' + clicks);
    // Sincronizar con la base
    return () => {
      // Ejecuta antes de re-renderear
      console.log('Clicks / date change: ' + clicks);
    }
  }, [clicks, date]);

  // Render effect - inicio y al renderear
   useEffect(() => {
     console.log('5. Rendering')

     return () => {
            console.log('Clean render hook')
     }
   })

  console.log('2. Will render');

  function addClick() {
    setClicks(clicks + 1);
    setDate(new Date().toISOString());
  }
  return <>
  <button onClick={addClick}>Clickme!</button>
  {clicks} Ultimo click: {date}
  </>
}

render(<App start={2} />, document.getElementById('root'));
