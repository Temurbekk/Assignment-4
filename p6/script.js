let calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", (event) => {
    let value = document.getElementById("radius").value;
    let unit = document.getElementById("measurement").value;
    radius = parseFloat(value);
    let volume = 4 / 3 * Math.PI * Math.pow(radius,3);
    volume = volume.toFixed(2);
    document.getElementById("volume").innerText = volume + " " + unit; 
});