
let getal1 = 0;
let getal2 = 0;
let goedAntwoord = 0;

let score = 0;
let fout = 0;
let vraag = 0;
let gecontroleerd = false;

const totaalVragen = 10;

// HTML-elementen ophalen
const som = document.getElementById("som");
const antwoord = document.getElementById("antwoord");
const feedback = document.getElementById("feedback");

const controleerKnop = document.getElementById("controleer");
const volgendeKnop = document.getElementById("volgende");
const startKnop = document.getElementById("start");

const scoreElement = document.getElementById("score");
const foutElement = document.getElementById("fout");
const vraagnummer = document.getElementById("vraagnummer");
const voortgang = document.getElementById("voortgang");

const spel = document.getElementById("spel");
const eindscherm = document.getElementById("eindscherm");

// Start een nieuwe oefenronde
function startSpel() {

    score = 0;
    fout = 0;
    vraag = 0;

    scoreElement.innerText = score;
    foutElement.innerText = fout;

    eindscherm.classList.add("hidden");
    spel.classList.remove("hidden");

    startKnop.innerText = "Opnieuw starten";

    nieuweSom();
}

// Genereer een nieuwe som
function nieuweSom() {

    if (vraag >= totaalVragen) {
        eindeSpel();
        return;
    }

    vraag++;

    gecontroleerd = false;

    // Willekeurige tafels tussen 1 en 10
    getal1 = Math.floor(Math.random() * 10) + 1;
    getal2 = Math.floor(Math.random() * 10) + 1;

    goedAntwoord = getal1 * getal2;

    // Toon de som
    som.innerText = getal1 + " × " + getal2 + " = ?";

    // Maak het invoerveld leeg
    antwoord.value = "";
    antwoord.disabled = false;

    feedback.innerText = "";
    feedback.className = "feedback text-center";

    // Knoppen instellen
    controleerKnop.disabled = false;
    volgendeKnop.disabled = true;

    vraagnummer.innerText = vraag + " / " + totaalVragen;

    // Voortgang bijwerken
    voortgang.style.width =
        ((vraag - 1) / totaalVragen * 100) + "%";

    antwoord.focus();
}

// Controleer het antwoord
function controleerAntwoord() {

    if (gecontroleerd || antwoord.value.trim() === "") {
        feedback.innerText = "Vul eerst een antwoord in!";
        feedback.style.color = "#dc3545";
        return;
    }

    let ingevuld = Number(antwoord.value);

    gecontroleerd = true;
    antwoord.disabled = true;

    if (ingevuld === goedAntwoord) {

        score++;

        feedback.innerText = "✓ Helemaal goed! Goed gedaan!";
        feedback.style.color = "#198754";

    } else {

        fout++;

        feedback.innerText =
            "✗ Helaas! Het juiste antwoord is " + goedAntwoord;

        feedback.style.color = "#dc3545";
    }

    // Score bijwerken
    scoreElement.innerText = score;
    foutElement.innerText = fout;

    controleerKnop.disabled = true;
    volgendeKnop.disabled = false;

    volgendeKnop.focus();
}

// Naar de volgende som
function volgendeSom() {

    if (!gecontroleerd) {
        return;
    }

    nieuweSom();
}

// Einde van de oefening
function eindeSpel() {

    spel.classList.add("hidden");
    eindscherm.classList.remove("hidden");

    voortgang.style.width = "100%";

    let percentage = score / totaalVragen * 100;

    let tekst = "Je hebt " + score + " van de " +
        totaalVragen + " vragen goed!";

    if (percentage === 100) {
        tekst += " Fantastisch! Alles goed!";
    } else if (percentage >= 70) {
        tekst += " Heel goed gedaan!";
    } else if (percentage >= 50) {
        tekst += " Goed bezig! Blijf oefenen!";
    } else {
        tekst += " Nog even oefenen, je kunt het!";
    }

    document.getElementById("eindtekst").innerText = tekst;

    startKnop.innerText = "Opnieuw oefenen";
}

// Knoppen koppelen
startKnop.addEventListener("click", startSpel);

controleerKnop.addEventListener("click", controleerAntwoord);

volgendeKnop.addEventListener("click", volgendeSom);

// Enter gebruiken om antwoord te controleren
antwoord.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        controleerAntwoord();
    }

});
