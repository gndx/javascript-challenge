let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200)
        callback(null, xhttp.responseText);
      else return console.log(`sucedió un error`)
    }
  };
  xhttp.open('GET', url_api, true);
  xhttp.send();
};

fetchData(API, function (error1, data1) {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...')
  fetchData('https://rickandmortyapi.com/api/character/1', function (error2, data2) {
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    fetchData('https://rickandmortyapi.com/api/location/1', function (error3, data3) {
      if (error3) return console.error(error3);
      console.log('Tercer Llamado...')
      console.log('Personajes:' + ' ' +data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    });
  });
});