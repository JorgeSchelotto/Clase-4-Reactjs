import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Field({ text, children }) {
  return <div style={{ display: 'flex', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
    <label>{ text }</label>
    {children}
  </div>
}

function SuperForm() {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [car, setCar] = useState(null);

  const [sent, setSent] = useState(false); 
  // Guardar el estado y solicitar un nuevo render
  
  function onNameChange(event) {
    setName(event.target.value)
  }
  function onLastNameChange(event) {
    setLastName(event.target.value);
  }
  function onCarChange(event) {
    setCar(event.target.value);
  }

  function send() {
    setSent(true);
  }

  return <>
    <p>Formulario de ingreso</p>

    <Field text="Nombre">
       <input type="text" value={name} onInput={onNameChange} />
    </Field>

    <Field text="Apellido">
      <input type="text" onInput={onLastNameChange} />
    </Field>

   <Field text="Auto">
      <select style={{ width: 150 }} onInput={onCarChange}>
        <option value="" >Elige tu auto</option>
        <option value="mercedes" >Mercedes</option>
        <option value="audi">Audi</option>
        <option value="bmw">Bmw</option>
        <option value="fitito">Fitito</option>
      </select>
    </Field>

    <button type="button" 
    disabled={!car || !lastName || !name || sent}
    onClick={send}>
      Enviar!
    </button>
    <p>{name}, {lastName}, {car}</p>
  </>
}

function App() {
  return <SuperForm />
}

render(<App />, document.getElementById('root'));
