document.getElementById("password").addEventListener("input", e => {
    const password = e.target.value;
    let passwordLength = "too short";
    let messageColor = red;
    if(password.length >= 8){
        passwordLength = "adequate";
        messageColor = green;
    }
    else if(password.length >= 4){
        passwordLength = "moderate";
        messageColor = "orange";
    }

    const passwordHelpElement = document.getElementById("passwordHelp");
    passwordHelpElement.textContent = `Length: ${passwordLength}`;
    passwordHelpElement.style.color = messageColor;
})