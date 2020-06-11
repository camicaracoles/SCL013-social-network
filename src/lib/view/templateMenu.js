export const menu = () => {
    const divMenu = document.createElement("div");
    const viewMenu =
        /*html*/
        `  
        <ul>
            <li> 
           <a href='#/home'>Home</a>
            </li>
            <li> 
            <a href="#/muroPersonal">Personajes</a>
            </li>
            <li> 
            <a href="#/cerrar" id="btnCerrar">Cerrar Sesion</a>
            </li>         
        </ul>
      `
    divMenu.innerHTML = viewMenu;
    
    return divMenu;
}