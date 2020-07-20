let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api) {
  let xhttp = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = event => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.responseText));
        }
        else {
          const error = new Error('Wooops! ' + url_api)
          return reject(error);
        }
      }
    };
    xhttp.send();
  })
};

fetchData(API)
  .then(response => {
    console.log('Primer Llamado...')
    console.log(`Personajes: ${response.info.count}`);
    return fetchData(API + response.results[0].id)
  })
  .then(response => {
    console.log('Segundo Llamado...')
    console.log(`Primer Personaje: ${response.name}`);
    return fetchData(response.origin.url)

  })
  .then(response => {
    console.log('Tercero Llamado...')
    console.log(`Dimensión: ${response.dimension}`);
    return fetchData(API)
  })
  .catch(error => console.error(`Error ${error}`))

// fetchData(API, (error1, data1) => {
//  if (error1) return console.error(`Error ${error1}`);
//  console.log('Primer Llamado...')
//  fetchData(API + data1.results[0].id, (error2, data2) => {
//    if (error2) return console.error(error2);
//    console.log('Segundo Llamado...')
//    fetchData(data2.origin.url, function (error3, data3) {
//      if (error3) return console.error(error3);
//      console.log('Tercero Llamado...')
//      console.log(`Personajes: ${data1.info.count}`);
//      console.log(`Primer Personaje: ${data2.name}`);
//      console.log(`Dimensión: ${data3.dimension}`);
//    });
//  });
//});