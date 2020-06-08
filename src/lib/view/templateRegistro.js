export const registro = () => {
  const divRegistro = document.createElement("div");

  const viewRegistro = `
  <div id="pagRegistro">
  <div id="logo"></div>
  <div class="titulo"> <p>Registro</p></div>
   <div id="cont-registro">
    <form id="form-registro">
      <input id="email" type="email" placeholder="correo electrónico">
      <input type="password" id="pass"placeholder="contraseña">
      <button id="btnregistro" onclick="enviar()">Registrar</button>
    </form>
    </div>
  </div>
  `
  divRegistro.appendChild = viewRegistro;
  return divRegistro;

}