const API = `https://rickandmortyapi.com/api/character/`;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) =>{
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(xhttp.responseText);
        else reject(Error(`${API}`));
      }
    };
    xhttp.open('GET', url_api, true);
    xhttp.send();
})
  };

  let dataOne
  let dataTwo
fetchData(API)
  .then (data1 =>{
    console.log(`Primer Llamado...`)
    dataOne = JSON.parse(data1)
    return fetchData(`${API} ${dataOne.results[0].id}`)
  })
  .then(data2 =>{
    console.log(`Segundo Llamado...`)
    dataTwo = JSON.parse(data2)
    return fetchData(dataTwo.origin.url)
  })
  .then(data3 =>{
    let dataThree = JSON.parse(data3)
      console.log(`Tercero Llamado...`)
      console.log(`Personajes: ${dataOne.info.count}`);
      console.log(`Primer Personaje: ${dataTwo.name}`);
      console.log(`Dimensión: ${dataThree.dimension}`);
  })
  .catch((url_api)=>{
    console.log(`Error: ${url_api}`)
  })
