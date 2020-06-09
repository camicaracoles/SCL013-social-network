export const login = () => {

  var divLogin = document.createElement("div");

  const viewLogin =
    /*html*/
    `
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
  <div id="contenedorIngreso">

    <input id=email placeholder="Correo electronico" type="email">

    <input id="contraseña" placeholder="Contraseña" type="password">
    <button id="iniciar">  <a href="#/home">Iniciar sesion </a ></button>
    <button id="google">
      <img id="iconoGoogle" /> sesión con Google
    </button>
    <p id="pTres">¿Aún no eres parte?</p>
    <Button id="botonRegistrate"> <a href="#/registro"> </a >Registrate</Button>

  </div>
  </div>
    `


  divLogin.innerHTML = viewLogin;
  console.log(divLogin);
  return viewLogin;

}