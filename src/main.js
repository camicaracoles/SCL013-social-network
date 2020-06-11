// importamos funciones 
import {myFunction} from "./lib/index.js";
import {login} from "./lib/view/templateLogin.js";
import {home} from "./lib/view/templateHome.js";


myFunction();

//funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('usar ok')
        home();
        cerrarSesion()
    } else {
        console.log('no existes')
        login();
        iniciarSesion()
    }
});
 
const cerrarSesion = () => {
    const btnCerrar = document.querySelector('#btnCerrar')
    btnCerrar.addEventListener('click', () => {
        firebase.auth().signOut()
    })
}
const iniciarSesion = () => {
    const btngoogle = document.querySelector('#btngoogle')
    btngoogle.addEventListener('click', async () => {
        console.log('me diste click google')
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    })
}  


