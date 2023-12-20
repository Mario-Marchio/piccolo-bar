// Posizione dell'indirizzo
var posizione = [44.816000622407735, 9.979247643536704];

// Creazione della mappa
var mappa = L.map("mappa").setView(posizione, 30);

// Aggiungi un layer di OpenStreetMap alla mappa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mappa);

// Aggiungi un marcatore alla posizione
var marcatore = L.marker(posizione)
  .addTo(mappa)
  .bindPopup("Lorem Bar")
  .openPopup();

// Aggiungi un gestore di eventi al marcatore per catturare il clic
marcatore.on("click", function () {
  // Costruisci l'URL di Google Maps con le indicazioni
  var urlGoogleMaps =
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=" +
    posizione[0] +
    "," +
    posizione[1];

  // Apri una nuova finestra o scheda con l'URL di Google Maps
  window.open(urlGoogleMaps, "_blank");
});
