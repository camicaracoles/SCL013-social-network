import {loginEmail} from "../viewController.js" ;
import {registro} from "./templateRegistro.js";

export const login = () => {
window.location.hash = '/login';
document.getElementById('root').innerHTML =  /*html*/ `
  
<div id="contenedorGeneral">
    <img id="logo" src="./image/logo.jpg">
    <div class="carrusel">
      <div id="imagenUno">
        <div class="textoInicial">
          <p class="parrafoUno">¿Te gusta </p>
          <p class="parrafoUno">viajar por Chile ?</p>
        </div>
      </div>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
    <img id="usuario" src="image/usercian 1.png">
    <!--Formulario de logeo-->
    <div id="contenedorIngreso">
      <input class="email" id="emailIngreso" placeholder="Correo electronico" type="email">
      <input class="contraseña" id="passIngreso" placeholder="Contraseña" type="password">
      <button class="iniciar" id="iniciarSesion">Iniciar sesion</button>
      <button id="btngoogle"><img id="iconoGoogle"/> sesión con Google</button>  
      <p id="pTres">¿Aún no eres parte?</p>
      <button id="botonRegistrate"> Registrate</button>
    </div>
  </div>
    `;

 const botonIngreso = document.getElementById('iniciarSesion');
 botonIngreso.addEventListener("click", () => {
   console.log("user registrado mija");
   loginEmail(); 
 }) 

 const botonRegistrate = document.getElementById('botonRegistrate');
 botonRegistrate.addEventListener("click", () => {
   console.log("user registrado mija");
   registro();  
 }) 

}