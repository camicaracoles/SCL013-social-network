// importamos funciones 
import {myFunction} from "./lib/index.js";
import {changeRoute} from "./lib/router.js"
import {login} from "./lib/view/templateLogin.js";

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