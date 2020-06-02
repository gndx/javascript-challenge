const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api) {
  let xhttp = new XMLHttpRequest();
  return new Promise ((resolve, reject)=>{
  xhttp.onreadystatechange = event=> {
    if (xhttp.readyState == 4) {
      if (xhttp.status == 200)
        resolve(JSON.parse(xhttp.responseText));
      else return reject(url_api);
    };
  };
  xhttp.open('GET', url_api,true);
  xhttp.send();
  });
};

function onerror(url_api){
    console.log(`sucedió un error :(`);
}

fetchData(API)
  .then((data)=> {
    data1=data;
    console.log(`Primer Llamado...`);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data)=> {
    data2=data;
    console.log(`Segundo Llamado...`);
    return fetchData(`${data.origin.url}`);
  })
  .then((data)=> {
    data3=data;
    console.log(`Tercer Llamado...`);
    console.log(`Personajes: ${data1.info.count}`);
    console.log(`Primer Personaje:${data2.name}`);
    console.log(`Dimensión: ${data3.dimension}`);
  })
  .catch(onerror);