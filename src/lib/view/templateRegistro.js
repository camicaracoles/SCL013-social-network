export const registro = () => {
    const divRegistro = document.createElement("div");

    const viewRegistro = `
    
<h1>Registrate Aqui </h1>
<div id=contnedorRegistro>
<input placeholder="Correo electronico"/>
<input placeholder="Contraseña"/>
<input placeholder="Repetir contraseña"/>
<button>Registrarse</button>
</div>

    `
    divRegistro.innerHTML = viewRegistro;

    return viewRegistro;

}