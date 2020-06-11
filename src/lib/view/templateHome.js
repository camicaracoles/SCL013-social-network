export const home = () => {
 const divHome = document.createElement("div");
 
    const viewHome = /*html*/ `
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
<input id="inputHome" placeholder="¿Cual es tu pica'?">
<div id="contenedorPublicacion">
<p id="nombreParticipantes"></p>
<div id="imagenParticipante"> </div>
<p id="textoPublicacion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
<div id="interacciones"></div>
</div>

<div class="contenedorSalida"> <ul >
    <li> 
    <a href='#/home'>Home</a>
    </li>
    <li> 
    <a href="#/muroPersonal">Personajes</a>
    </li>
    <li> 
    <a href="" id="btnCerrar">Cerrar Sesion</a>
    </li>         
    </ul>   
</div>
    `
    console.log(viewHome);
    divHome.innerHTML = viewHome; 

 

    return viewHome;
}