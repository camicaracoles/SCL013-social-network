export const registro = () => {
  const divRegistro = document.createElement("div");

  const viewRegistro = /*html*/ `
    
  <div id="contenedorGeneralRegistro" class="contenedorRegistro">
    <img id="logo" src="./image/logo.jpg">
   
    <div id="contenedorIngreso" >
      <input class="email" id="emailRegistro" placeholder="Correo electronico" type="email">
      <input class="contraseña" id="contraseñaRegistro" placeholder="Contraseña" type="password">
      <input class="usuario" id="usuarioRegistro" placeholder="Nombre de usuario" type="text">
      <button class="iniciar" id="registrarse"> Registrarse</button>
    </div>
  </div>
    `
  divRegistro.innerHTML = viewRegistro;

  const botonRegistro = divRegistro.querySelector('#registrarse');
  botonRegistro.addEventListener("click", () => {
    console.log("FUNCIONOOOOOOOOOOO");
  })



  return divRegistro;

}

