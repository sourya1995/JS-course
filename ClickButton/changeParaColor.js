document.addEventListener("keydown", e => {
    let key = e.key;
    key = key.toUpperCase();
    let color = "";
    switch(key) {
        case "R":
            color = "red";
            break;
        case "Y":
            color = "yellow";
            break;
        case "B":
            color = "blue";
            break;
        default:
            console.log(`The ${key} key is not handled`);
    }

    const divElements = Array.from(document.getElementsByTagName("div"));
    divElements.forEach(divElement => {
        divElement.style.backgroundColor = color;
    })
})