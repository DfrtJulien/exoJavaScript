let reponseUser = "";
let tour = 0;

while ((reponseUser !== "oui") && (reponseUser !== "non") && (reponseUser !== "Oui") && (reponseUser !== "Non") && (reponseUser !== "OUI") && (reponseUser !== "NON")) {
    reponseUser = prompt("On joue à ni oui ni non?");
    tour++;
}
if (tour == 1) {
    document.write(`<p style="color:red">Tu as perdu au bout de ${tour} tour.</p>`);
} else {
    document.write(`<p style="color:red">Tu as perdu au bout de ${tour} tours.</p>`);
}