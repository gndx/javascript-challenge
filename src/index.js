const API = 'https://rickandmortyapi.com/api/character/'

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhttp = new XMLHttpRequest();


function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    xhttp.open('GET', url_api, true);
    xhttp.send();
    xhttp.onreadystatechange = event => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(JSON.parse(xhttp.responseText));
      else {
        return reject(`Ocurrió un error, No se pudo descargar la información`);
      }
    }
  };
})
}

Promise
  .all([fetchData(API)])
  .then(infoChar1 => {

  console.log(`Primer Llamado...`)
  console.log(`'Personajes: ${infoChar1[0].info.count}`);
  return fetchData(`${API}${infoChar1[0].results[0].id}`)
})

.then(infoChar2 => {
  console.log(`Segundo Llamado...`)
  console.log(`Primer Personaje: ${infoChar2.name}`);
  return fetchData(infoChar2.origin.url)
})

.then(infoDim => {
  console.log(`Tercer Llamado...`)
  console.log(`Dimensión: ${infoDim.dimension}`);
})

.catch(message => console.log(message))

