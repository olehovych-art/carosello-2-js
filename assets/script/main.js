// Array di oggetti con i dati dei posti
const places = [
  {
    image: 'https://picsum.photos/id/1015/1000/600',
    title: '1. Sirmione',
    description: 'La perla del lago. Famosa per il maestoso Castello Scaligero e le antiche Grotte di Catullo.'
  },
  {
    image: 'https://picsum.photos/id/1018/1000/600',
    title: '2. Riva del Garda',
    description: 'Incastonata tra le Dolomiti, è il paradiso per gli amanti della natura e degli sport acquatici.'
  },
  {
    image: 'https://picsum.photos/id/1019/1000/600',
    title: '3. Malcesine',
    description: 'Borgo medievale con un celebre castello e la funivia che sale sul Monte Baldo.'
  },
  {
    image: 'https://picsum.photos/id/1043/1000/600',
    title: '4. Limone sul Garda',
    description: 'Caratteristica per le sue storiche limonaie e la pista ciclabile a sbalzo sul lago.'
  },
  {
    image: 'https://picsum.photos/id/1039/1000/600',
    title: '5. Lazise',
    description: 'Affascinante comune circondato dalle mura scaligere con un porticciolo suggestivo.'
  }
];

// Indice della slide attualmente attiva
let currentIndex = 0;

// 2. Selezione degli elementi
// l'immagine grande a sinistra
const mainImage = document.getElementById('main-image');

// titolo h2 e il paragrafo p per cambiarne il testo scritto
const slideTitle = document.getElementById('slide-title');
const slideDescription = document.getElementById('slide-description');

// bottoni per aggiungere l'evento del click
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// contenitore delle miniature a destra
const thumbnailsContainer = document.getElementById('thumbnails-container');

// Funzione per aggiornare l'interfaccia in base a currentIndex
function updateCarousel() {
  // Recuperiamo l'oggetto corrente dall'array
  const currentPlace = places[currentIndex];

  // Aggiorniamo l'immagine grande, il titolo e la descrizione
  mainImage.src = currentPlace.image;
  slideTitle.textContent = currentPlace.title;
  slideDescription.textContent = currentPlace.description;
}

// Inizializziamo la prima vista al caricamento del file
updateCarousel();


// Gestione click bottone "Giù" (Successivo)
nextBtn.addEventListener('click', function () {
  currentIndex++; // Aumentiamo l'indice di 1

  // Se superiamo l'ultima foto, torniamo alla prima (indice 0)
  if (currentIndex >= places.length) {
    currentIndex = 0;
  }

  updateCarousel(); // Aggiorniamo la vista
});

// Gestione click bottone "Su" (Precedente)
prevBtn.addEventListener('click', function () {
  currentIndex--; // Diminuiamo l'indice di 1

  // Se andiamo sotto lo 0, passiamo all'ultima foto dell'array
  if (currentIndex < 0) {
    currentIndex = places.length - 1;
  }

  updateCarousel(); // Aggiorniamo la vista
});