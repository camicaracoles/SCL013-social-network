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
    `
    console.log(viewHome);
    divHome.innerHTML = viewHome;

    return viewHome;
}
