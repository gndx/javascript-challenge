const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";
const request = new XMLHttpRequest();

const fetchData = (urlApi, callback) => {
  request.onreadystatechange = event => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(null, JSON.parse(request.responseText));
      } else {
        return callback(urlApi);
      }
    }
  };
  request.open("GET", urlApi, false);
  request.send();
};

fetchData(API, function(error1, data1) {
  if (error1) return console.error(`Error ${error1}`);
  console.log("Primer Llamado...");
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if (error2) return console.error(error1);
    console.log("Segundo Llamado...");
    fetchData(data2.origin.url, function(error3, data3) {
      if (error3) return console.error(error3);
      console.log("Tercero Llamado...");
      console.log(`Personajes: ${data1.info.count}`);
      console.log(`Primer Personaje: ${data2.name}`);
      console.log(`Dimensión: ${data3.dimension}`);
    });
  });
});