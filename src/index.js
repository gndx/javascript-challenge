var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';
var xhttp = new XMLHttpRequest();
xhttp.responseType = 'json'

function fetchData(url_api, callback) {
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200) {
        callback(xhttp.response)
      }
      else
        callback("url_api Error!");
    }
  };
  xhttp.open('GET', url_api, true, '', '');
  xhttp.send();
};

fetchData(API, function (data1, error1) {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...' + data1)
  fetchData(API + data1.results[0].id, function (data2, error2)  {
    if (error2) return console.error(error2);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url, function (data3, error3) {
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    });
  });
});