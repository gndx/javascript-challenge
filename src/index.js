const API = 'https://rickandmortyapi.com/api/character/';
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
          return reject('Se esta presentando un Error');
        }
      }
    };
  })
}

Promise.all([fetchData(API)])
    .then(data => {
      data1=data;
      console.log('Primer Llamado...')
      return fetchData(`${API}${data1[0].results[0].id}`)
    })
    .then(data => {
      data2=data;
      console.log('Segundo Llamado...')
      return fetchData(data2.origin.url)
    })
    .then(data => {
      console.log('Tercero Llamado...');
      console.log(`Personajes: ${data1[0].info.count}`);
      console.log(`Primer Personaje:${data2.name}`);
      console.log(`Dimensión: ${data.dimension}`);
    })
  