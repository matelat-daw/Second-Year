import React  from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const wishes = [
    {wish: "Vivir en Europa Como mis Antepasados", done: true},
    {wish: "Ser uno de los Mejores Programadores del Mundo", done: false},
    {wish: "Viajar a Argentina en 2025", done: false},
    {wish: "Viajar a Júpiter", done: false}
];

const App = () => <div>
    <h1>Lista de Deseos</h1>
    <fieldset>
        <legend>Nuevo Deseo</legend>
        <input placeholder='Escribe tu Deseo'/>
    </fieldset>
    <ul>
        {wishes.map(({wish, done}, i) => (
            <li>
                <label htmlFor={`wish$[i]`}>
                    <input id={`wish${i}`} type='checkbox' checked={done}/>
                    {wish}
                </label>
            </li>))}
    </ul>
    <button class=''>Guarda tu Deseo</button>
</div>

export default App
