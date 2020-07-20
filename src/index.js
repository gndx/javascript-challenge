let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const error = new Error('Wooops! ' + url_api)
        return callback(error, null);
      }
    }
  };
  xhttp.send();
};

fetchData(API, (error1, data1) => {
  if (error1) return console.error(`Error ${error1}`);
  console.log('Primer Llamado...')
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log(`Personajes: ${data1.info.count}`);
      console.log(`Primer Personaje: ${data2.name}`);
      console.log(`Dimensión: ${data3.dimension}`);
    });
  });
});