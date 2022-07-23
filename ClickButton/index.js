const click = () => {
    const clickCountElement = document.getElementById("clickCount");
    const clickCount = Number(clickCountElement.textContent);
    clickCountElement += 1;
}

document.getElementById("myButton").addEventListener("click", click);

document.getElementById("deactivate").addEventListener("click", () => {
    document.getElementById("myButton").removeEventListener("click", click);
})