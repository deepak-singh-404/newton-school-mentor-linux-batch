const form = document.querySelector('form')

function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
}

function validPassword(p) {
    var filter = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return String(p).search(filter) != -1;
}

// regex
// event, 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    //Validaton
    if (!validEmail(email)) {
        alert("Invalid email")
        return
    }

    if (!validPassword(password)) {
        alert("Invalid password")
        return;
    }

    alert("ALL CORRECT")

}

)


