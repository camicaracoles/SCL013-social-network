export const registro = () => {
    const divRegistro = document.createElement("div");

    const viewRegistro = /*html*/ `
    
    <div id="pagRegistro">
    <div id="logo"></div>
    <div class="titulo"> <p>Registro</p></div>
     <div id="cont-registro">
      <form id="form-registro">
        <input id="email" type="email" placeholder="correo electrónico">
        <input  id="pass" type="password"placeholder="contraseña">
        <button id="btnregistro">Registrar</button>
      </form>
      </div>
    </div>
    `
    divRegistro.innerHTML = viewRegistro;

    return viewRegistro;

}