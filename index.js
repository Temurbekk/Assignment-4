const button1 = document.getElementById("imRight");
const button2 = document.getElementById("noImRight");
const text = document.getElementsByTagName("h2");

button1.addEventListener("click", () => {
    text[0].textContent = "I'm Right!";
})

button2.addEventListener("click", () => {
    text[0].textContent = "No, I'm Right!";
});