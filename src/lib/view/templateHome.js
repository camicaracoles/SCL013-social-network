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
    <div id='nomUsuario'></div>
</header>
<ul>
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
    `
    console.log(viewHome);
    divHome.innerHTML = viewHome;

    return viewHome;
}
