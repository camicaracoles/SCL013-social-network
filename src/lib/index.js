// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
//función para acceder a la app con cuenta de google
export const accederGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); 
  firebase.signInWithPopup(provider)
  
  .then(result => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   var token = result.credential.accessToken;
   // información del usuario registrado
   var user = result.user;
   console.log('usuario logeado')
  }).catch(function(error) {
  
    // manejo de mensajes de error al usuario
    var errorCode = error.code;
    var errorMessage = error.message;
    // mensaje el correo de la cuenta del usuario esta utilizado
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('error email')
  });
 }