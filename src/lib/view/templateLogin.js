export const login = () => {
  const divLogin = document.createElement("div");

  const viewLogin = `
<div id="pagLogin">

  <img id="logo" src="./image/logo.jpg">

  <div class="carrusel">
    <div class="imgSlider" id="imagenUno">
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

  <input id=email placeholder="Correo electronico">

  <input id="contraseña" type= "password"placeholder="Contraseña">
  <button id="iniciar"> Iniciar sesión</button>
  <button id="google"><img id="iconoGoogle"/> Iniciar sesión con Google</button>
  <p id="pTres">¿Aún no eres parte?</p>
  <Button id="botonRegistrate">Registrate</Button>

</div>
</div>
  `
  
    
  divLogin.innerHTML = viewLogin;
 const btn = document.createElement('btn');
   btn.innerHTML = 'Hola';
   divLogin.appendChild(btn);
   btn.addEventListener('click', (e) => {
       window.location.hash = '/'
   })
   return viewLogin;
}

/* 
<div class="carrusel">
    <div id="imagenDos">
      <div class="textoInicial">
        <p class="parrafoUno">Publica tus</p>
        <p class="parrafoUno">mejores picadas</p>
      </div>
    </div>
  </div>

  <div class="carrusel">
    <div id="imagenTres">
      <div class="textoInicial">
        <p class="parrafoUno">Conoce a otros </p>
        <p class="parrafoUno">viajeros</p>
      </div>
    </div>
  </div>


  <div class="carrusel">
    <div id="imagenCuatro">
      <div class="textoInicial">
        <p class="parrafoUno">Recorrer Chile </p>
        <p class="parrafoUno">ya no es </p>
        <p class="parrafoUno">una excusa </p>
      </div>
    </div>
  </div> */


/* let slideIndex = 0;
const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("carrusel");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000);
}
<<<<<<< HEAD
 */
=======
 */
>>>>>>> 3447ee6ee5a0203932509c5c3b449fd1e88c06ad
