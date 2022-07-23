document.querySelector("form").addEventListener("submit", e => {
    const password1 = e.target.elements.password1.value;
    const password2 = e.target.elements.password2.value;

    let message = "password validation successful";
    if (password1 === password2) {
        const minimalLength = 6;
        if (password1.length >= minimalLength) {
            const regexPassword = /\d+/;
            if (!regexPassword.test(password1)) {
                message = "Error! password must contain at least one digit";
            }
        } else {
            message = `Error! Password must be atleast ${minimalLength} characters long`;
        }


    } else {
        message = "Error! passwords don't match";
    }

    document.getElementById("passwordHelp").textContent = message;
    e.preventDefault();

});