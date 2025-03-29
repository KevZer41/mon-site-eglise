function afficherMessage() {
    document.getElementById("message").textContent = "Bravo ! Tu as cliqué sur le bouton !";
}
// Tableau contenant les publications
const publications = [
    { titre: "Notre première publication", contenu: "Bienvenue sur notre site !" },
    { titre: "Événement spécial", contenu: "Ne manquez pas notre prochain événement." },
    { titre: "Message du jour", contenu: "Ayez foi et avancez avec courage !" }
];

// Fonction pour afficher les publications
function afficherPublications() {
    let publicationsDiv = document.getElementById("publications");
    publications.forEach(pub => {
        let article = document.createElement("div");
        article.innerHTML = `<h3>${pub.titre}</h3><p>${pub.contenu}</p>`;
        article.style.border = "1px solid #ccc";
        article.style.padding = "10px";
        article.style.margin = "10px 0";
        publicationsDiv.appendChild(article);
    });
}

// Charger les publications au chargement de la page
window.onload = afficherPublications;
// Sélection du formulaire
document.getElementById("don-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    let nom = document.getElementById("nom").value;
    let montant = document.getElementById("montant").value;

    // Affichage du message de confirmation
    let message = `Merci, ${nom}, pour votre don de ${montant}$ !`;
    document.getElementById("confirmation").textContent = message;

    // Réinitialiser le formulaire
    document.getElementById("don-form").reset();
});
function afficherPublications() {
    let publicationsDiv = document.getElementById("publications");
    publications.forEach((pub, index) => {
        let article = document.createElement("div");
        article.innerHTML = `<h3>${pub.titre}</h3><p>${pub.contenu}</p>`;
        article.style.border = "1px solid #ccc";
        article.style.padding = "10px";
        article.style.margin = "10px 0";
        article.style.opacity = "0"; // Début invisible
        article.style.transform = "translateY(20px)";
        article.style.transition = "all 0.5s ease";
        publicationsDiv.appendChild(article);

        // Déclencher l'animation après un court délai
        setTimeout(() => {
            article.style.opacity = "1";
            article.style.transform = "translateY(0)";
        }, index * 300);
    });
}