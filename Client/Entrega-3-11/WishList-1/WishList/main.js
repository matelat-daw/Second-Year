import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import UserInput from "./Components/UserInput";
import ShowData from "./Components/ShowData";
export default function App() {
  const [wish, setwish] = useState([]);
  function add({ addWish }) {
    if(addWish.trim() === ""){
        alert("Tienes que Escribir un Deseo Para Agregarlo a la Lista.");
      // toast (2, "¿Ningún Deseo?", "Tienes que Escribir un Deseo Para Agregarlo a la Lista.");
      return;
    }
    setwish([...wish, addWish]);
  }
  function clearAll(clear) {
    if (clear) {
      setwish([]);
    }
  }
  function DeleteItem(index) {
    let temp = [...wish];
    temp.splice(index, 1);
    setwish(temp);
  }
  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List(Lista de Deseos Pendientes)</h1>
        <UserInput addtothelist={add} clearAll={clearAll} />
        <ShowData sendData={wish} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}
// document.querySelector('#app').innerHTML = `
//   <div>
//     // <a href="https://vite.dev" target="_blank">
//     //   <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     // </a>
//     // <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//     //   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     // </a>
//     <h1>WishList(Lista de Deseos)</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
