// importamos funciones 
import {
    myFunction
} from "./lib/index.js";
import {
    changeRoute
} from "./lib/router.js"
import {
    login
} from "./lib/view/templateLogin.js";
import {
    home
} from "./lib/view/templateHome.js";
/* import {accederGoogle} from "./lib/index.js" */

myFunction();

const init = () => {
    document.getElementById("root").innerHTML = login();
    window.addEventListener("hashchange", () => {

        myFunction();
        console.log(window.location.hash);
        changeRoute(window.location.hash)

    })
}
window.addEventListener(`load`, init);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('usar ok')
        document.getElementById("root").innerHTML = home();
        cerrarSesion()
    } else {
        console.log('no existes')
        document.getElementById("root").innerHTML = login();
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