function toontafel ()
{
    let tafelvan = document.getElementById("tafel").value;
    let teller = 1
    let uitkomst = 0;
    let output = "";
    while (teller < 11) {
        output += teller + "x" + tafelvan + " = " + (tafelvan * teller) + "<br>";
        teller++;
        uitkomst = tafelvan * teller;
    }

    document.getElementById("output").innerHTML = output;
}