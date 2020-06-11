/*aqui iran las funciones de firebase*/

export const registrar = () =>{
    console.log('diste clic en registrar')
    const email = document.querySelector('#emailRegistro').value;
    const pass = document.querySelector('#passRegistro').value;

    firebase.auth().createUserWithEmailAndPassword(email,pass)
    .catch(function(error){
        var errorCode=error.code;
        var errorMessage = error.menssage;
        console.log(errorCode)
        console.log(errorMessage)
    });
}

export const loginEmail = ()=>{
    const emailI = document.querySelector('#emailIngreso').value;
    const passI = document.querySelector('#passIngreso').value;
  firebase.auth().signInWithEmailAndPassword(emailI, passI)
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    }) 
    console.log(emailI)
    console.log(passI)
}