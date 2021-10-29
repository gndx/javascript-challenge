var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () =>{
    if (xhttp.readyState === xhttp.DONE) {
      if (xhttp.status == 200){
        const respose = JSON.parse(xhttp.responseText)
        callback(null, respose);
      }
      else return callback(url_api);
    }
  };
  xhttp.open('GET', url_api, false);
  xhttp.send();
};

fetchData(API, (error1, data1) => {
  if (error1) return console.error(`Error ${error1}`);
  console.log('Primer Llamado...')
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(`Error ${error2}`);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url, (error3, data3) =>{
      if (error3) return console.error(`Error ${error3}`);
      console.log('Tercero Llamado...')
      console.log(`Personajes: ${data1.info.count}`);
      console.log(`Primer Personaje: ${data2.name}`);
      console.log(`Dimensión: ${data3.dimension}`);
    });
  });
});