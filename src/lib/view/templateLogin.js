export const login = () => {

  const divLogin = document.createElement("div");

  const viewLogin =
    /*html*/ `
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
      <input class="contraseña" id="contraseñaIngreso" placeholder="Contraseña" type="password">
      <button class="iniciar" id="iniciarSesion"><a href="#/home"> Iniciar sesion</a></button>
      <button id="btngoogle"><img id="iconoGoogle"/> sesión con Google</button>  
      <p id="pTres">¿Aún no eres parte?</p>
      <button id="botonRegistrate"> <a href="#/registro">Registrate</a></button>
    </div>
  </div>
    `
  divLogin.innerHTML = viewLogin;

  console.log(divLogin);
  return divLogin;

}