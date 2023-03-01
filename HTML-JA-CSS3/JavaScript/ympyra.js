
// Testaa onko popupit sallittu
function popupTestaus() {
    var newWindow = window.open(null, "", "width=0", "height=0");
    try {
        newWindow.close();
        return false;
    } catch (error) {
        return true;
    }
}
function popup() {
if (popupTestaus()) {
    txt = "popup on blokattu.";
    document.getElementById("popup").innerHTML = txt;
    console.log("popup on blokattu.");
} else {
    txt = "popup on sallittu.";
    document.getElementById("popup").innerHTML = txt;
    console.log("popup on sallittu.");
}
}


function Laskepintaala() {

    // säde tekstimuodossa
    let Rteksti = prompt("Anna ympyrän säde (m), lasken pinta-alan");

    // säde numeromuodossa
    let R = parseFloat(Rteksti);
    console.log(R);

    // Jos arvo ei ole numero
    if (Number.isNaN(R)) {
        txt = "Syöte ei ole numeerisessa muodossa!";
        document.getElementById("Virhe").innerHTML = txt;
        return;
    }
    // Negatiivisen arvon tarkistus
    if (R < 0) {
        txt = "Numero ei saa olla negatiininen!";
        document.getElementById("Virhe").innerHTML = txt;
        return;
    }

    // Lasketaan pinta-ala
    let A = 3.14 * R * R;

    // Esitetään tulos 2 desimaalin tarkkuudella
    alert("Pinta-ala ympyrälle on " + A.toFixed(2) + " m²"); // 0178
    console.log(A);

    // Tyhjentää virhekentän
    txt = "";
        document.getElementById("Virhe").innerHTML = txt;

}

