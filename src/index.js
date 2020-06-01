const API_URL = 'https://rickandmortyapi.com/api/character/'

const getData = (url_api) => {
  return new Promise((resolve, reject) => {
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(JSON.parse(xhttp.responseText))
        else return reject('Error!')
      }
    }
    xhttp.open('GET', url_api, true)
    xhttp.send()
  })
}

getData(`${API_URL}`)
  .then((data1) =>{
    console.log(`Personajes: ${data1.info.count}`)
    return getData(`${API_URL}${data1.results[0].id}`)
  })
  .then((data2) => {
    console.log(`Primer Personaje: ${data2.name}`)
    return getData(`${data2.origin.url}`) 
  })
  .then((data3) => {
    console.log(`Dimensión: ${data3.dimension}`)
  })
  .catch('Error!')
