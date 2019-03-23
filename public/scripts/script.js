const userEmail = document.getElementById("inputEmail4");
const userPass = document.getElementById("inputPassword4");
const btnSign = document.getElementById("btnSign");
const auth = firebase.auth();
function signIn(){

    var userEmail = document.getElementById("inputEmail4").value;
    var userPass = document.getElementById("inputPassword4").value;

    btnSign.addEventListener('click', e => {
        const email = userEmail.Value;
        const pass = userPass.Value;
        
        //sign in 
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      });

    }


