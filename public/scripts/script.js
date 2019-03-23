function logIn(){

    window.alert("working");
}

(function() {
    const userEmail = document.getElementById("inputEmail4");
    const userPass = document.getElementById("inputPassword4");
    const btnSign = document.getElementById("btnSign");
        
    btnSign.addEventListener('click', e => {
            const email = userEmail.Value;
            const pass = userPass.Value;
            console.log(email);
            
            //sign in 
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
          });
    })();


