
// Zoek de knop op
const knop = document.getElementById("tafelKnop");

// Zoek het invoerveld op
const invoer = document.getElementById("tafelnummer");

// Zoek het resultaat op
const resultaat = document.getElementById("resultaat");

// Wanneer iemand op de knop klikt
knop.addEventListener("click", function() {

    // Haal het ingevulde tafelnummer op
    let tafel = Number(invoer.value);

    // Maak het resultaat eerst leeg
    resultaat.innerHTML = "";

    // Controleer of het getal tussen 1 en 10 ligt
    if (tafel < 1 || tafel > 10 || invoer.value === "") {
        resultaat.innerHTML = "Vul een getal tussen 1 en 10 in!";
        return;
    }

    // Maak de tafel met een for-lus
    for (let i = 1; i <= 10; i++) {
        resultaat.innerHTML += tafel + " x " + i + " = " + (tafel * i) + "<br>";
    }

});