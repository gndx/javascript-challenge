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
        return reject(`Ocurrió un error`);
      }
    }
  };
})
}


Promise
  .all([fetchData(API)])
  .then(data1 => {


  console.log(`Primer Llamado...`)
  console.log(`'Personajes: ${data1[0].info.count}`);
  return fetchData(`${API}${data1[0].results[0].id}`)


})

.then(data2 => {
  console.log(`Segundo Llamado...`)
  console.log(`Primer Personaje: ${data2.name}`);
  return fetchData(data2.origin.url)
})

.then(data3 => {
  console.log(`Tercer Llamado...`)
  console.log(`Dimensión: ${data3.dimension}`);
})

.catch(message => console.log(message))

