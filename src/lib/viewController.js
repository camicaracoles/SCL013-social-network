firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var textoVerificado="";
      if(emailVerified===false){
        textoVerificado="Email no verificado";
      }
      else{
        textoVerificado="Email verificado";
      }
      var providerData = user.providerData;
      document.getElementById('login').innerHTML=`
      <button onclick="cerrar()">Cerra sesion</button>
      `;
      console.log(user);
    } else {
      document.getElementById('root').innerHTML="No Logueado ";
    }
    });
  
    function enviar(){
      var email=document.getElementById('emailR').value;
      var pass=document.getElementById('passR').value;
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
      })
      .then(function(){
        verificar();
      });
    }
    function verificar(){
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
      // Email sent.
      }).catch(function(error) {
      // An error happened.
      });
    }
    function acceso(){
          var emailA=document.getElementById('email').value;
          var passA=document.getElementById('contraseña').value;
          firebase.auth().signInWithEmailAndPassword(emailA, passA)
          .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage);
          });
     }
     function cerrar(){
      firebase.auth().signOut()
      .then(function(){
        console.log('Salir');
      })
      .catch(function(error){
        console.log(error);
      })
     }