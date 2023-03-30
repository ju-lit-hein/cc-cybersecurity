function login_func() {
    var pseudo = document.getElementById("login-input").value;
    pseudo = pseudo.toLowerCase();
    var password = document.getElementById("password-input").value;
    password = password.toLowerCase();
    if (pseudo == "3pi" && password == "t3ch") {
        alert("Bravo, vous etes connecte : assembler le username et le password pour avoir le mot de passe de l'epreuve.");
    } else {
        alert("Mauvaise combinaison de username et password. Il faut reessayer.");
    }
};
