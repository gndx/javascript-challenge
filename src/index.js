var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';
var xhttp = new XMLHttpRequest();

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(JSON.parse(xhttp.responseText))
        else
          reject(url_api)
      }
    }
    xhttp.open('GET', url_api, false)
    xhttp.send()
  })
}

fetchData(API).then(data => {
  console.log(`Personajes: ${data.info.count}`)
  return fetchData(`${API}${data.results[0].id}`)
}).then(primerPersonaje => {
  console.log(`Primer Personaje: ${primerPersonaje.name}`)
  return fetchData(primerPersonaje.origin.url);
}).then(origen => {
  console.log(`Dimensión: ${origen.dimension}`)
}).catch(error => {
  console.log(error)
})