const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";

const xhttp = new XMLHttpRequest();

const onError = error =>  console.error(`Se presentó un error ${error}`);

const fetchData = url_api => {
  return new Promise( (resolve, reject) => {
    xhttp.onreadystatechange = (event) =>
    xhttp.readyState === 4 && xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject (url_api)
    xhttp.open('GET', url_api, false)
    xhttp.send();
  })
}

fetchData(API)
  .then (data1 => {
    console.log('Primer Llamado...')
    console.log(`Cantidad de Personajes: ${data1.info.count}`);
    console.log('----------------------------------------')
    return fetchData(`${API} ${data1.results[0].id}`)
  })
  .then (data2 => {
    console.log('Segundo Llamado...')
    console.log(`Primer Personaje: ${data2.name}`);
    console.log(`Especie: ${data2.species}`);
    console.log(`Genero: ${data2.gender}`);
    console.log('----------------------------------------')
    return fetchData(data2.origin.url)
  })
  .then (data3 => {
    console.log('Tercero Llamado...')
    console.log(`Dimension: ${data3.dimension}`);
  }).catch(onError)
