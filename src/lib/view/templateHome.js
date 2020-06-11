export const home = () => {
    window.location.hash = '/home';
    document.getElementById('root').innerHTML = /*html*/ `
    <header>
    <img id="logoMenu" src="./image/logo.jpg">
    <div id="contenedorBotonesMenu">
        <button class="colorUno">Ruta</button> 
        <button class="colorDos">Hospedaje</button>
        <button class="colorUno">Comida</button>
        <button class="colorDos">Clima</button>
        <button class="colorUno">Transporte</button>
        <button class="colorDos">Tour</button>
    </div>
    </header>
    <div id="contenedorEscribir">
        <input id="inputHome" type="text" placeholder="¿Cual es tu pica'?">
        <input type="file"> 
        <select id="opcionPublicar">

        <option>Ruta </option>
        <option> Hospedaje</option>
        <option>Comida </option>
        <option>Clima </option>
        <option>Transporte </option>
        <option> Tour</option>

         </select>
 
   
    <button id="btnPublicar"> Publicar</button>
     </div>

<div id="contenedorPublicacion">
<p id="nombreParticipantes"></p>
<div id="imagenParticipante"> </div>
<p id="textoPublicacion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
<div id="interacciones"></div>
</div>

<div class="contenedorSalida"> 

   
    <a id="btnHome" href='#/home'></a>
 
 
    <a href="#/muroPersonal">Personajes</a>
  
    <a  id="btnCerrar"></a>
       

</div>
    `


}