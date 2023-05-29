// Dichiaro le costanti iniziali
const endPointUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q="; // endpoint
const mainDiv = document.getElementById("searchSection"); // div contenitore delle cards
const loadingDiv = document.getElementById("loading"); // div dell'icona animata di loading
const foundDiv = document.getElementById("found") // div genitore di mainDiv

// Creo la funzione per inviare la chiamata all'endpoint
// dalla stringa inserita dall'utente e passato con onclick()
function searchSong() {
    let userInput = (document.getElementById("searchField")).value;
    loadingDiv.classList.toggle("d-none");
    fetch(endPointUrl + userInput)
    .then((res) => {   // scritto res => res.json() non necessita del return
        return res.json();
    })
    .then((json) => {
        console.log(json);
        console.log(json.data);
        getSongs(json.data);
    })
    .catch((err) => {
        console.log('Request failure. Errore: ' + err);
        loadingDiv.classList.toggle("d-none");
    });
}

// Creo la funzione che cicla l'array con le canzoni e le estrae singolarmente
// passandole alla funzione createBox()
function getSongs(song){
    mainDiv.innerHTML = "";
    song.forEach((element) => {
        createBox(element);
    });
    searchField.value="";
    loadingDiv.classList.toggle("d-none");
}


// Creo la funzione che struttura il template della card
// con l'elemento passato dal foreach
function createBox(songObject) {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("text-light", "p-3", "text-center");
    let boxImage = document.createElement("img");
    boxImage.src = songObject.album.cover;
    let boxTitle = document.createElement("h6");
    boxTitle.classList.add("mt-2");
    boxTitle.innerText = songObject.title;
    let boxArtist = document.createElement("em");
    boxArtist.innerText = songObject.artist.name;


    boxDiv.appendChild(boxImage);
    boxDiv.appendChild(boxTitle);
    boxDiv.appendChild(boxArtist);

    mainDiv.appendChild(boxDiv);

}


