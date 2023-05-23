fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
.then((response) => response.json())
.then((json) => console.log(json))
.catch((err) => console.log("Error detected: " + err));
