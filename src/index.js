let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api) => {
  const xhttp = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          reject(new Error("Wooops! " + url_api));
        }
      }
    };
    xhttp.send();
  });
};
const fetchD1 = async (url_api) => {
  try {
    const response = await fetchData(url_api);
    const data = await fetchData(`${API}${response.results[0].id}`);
    const origin = await fetchData(data.origin.url);
    console.log("Primer Llamado...");
    console.log(`Personajes: ${response.info.count}`);
    console.log("Segundo Llamado...");
    console.log(`Primer Personaje: ${data.name}`);
    console.log("Tercero Llamado...");
    console.log(`Dimensión: ${origin.dimension}`);
  } catch (error) {
    console.error(error);
  }
};

fetchD1(API);

//const fetchD2 = async (url_api) => {
//  try {
//    const response = await fetchData(url_api)
//    console.log('Segundo Llamado...')
//    console.log(`Primer Personaje: ${response.results[4].name}`);
//  } catch (error) {
//    console.error(error)
//  }
//}
//
//const fetchD3 = async (url_api) => {
//  try {
//    const response = await fetchData(url_api)
//    console.log('Tercero Llamado...')
//    console.log(`Dimensión: ${response.dimension}`);
//  } catch (error) {
//    console.error(error)
//  }
//}
//const fechD2 = async () => {
//const data = await fetchData(API + response.result[0].id)
//console.log(`Primer Personaje: ${data.response.name}`);

//console.log('Primer Llamado...')
//return response.results[0].id
//  try {
//    const response = await fetchData(API + data.results[0].id)
//    console.log('Segundo Llamado...')
//    console.log(`Primer Personaje: ${response.name}`, data);
//  } catch{
//
//  }
//}
//const fechD3 = async () => {
//  const response = await fetchData(API)
//  //const data = await response.results[0].id
//  console.log('Tercero Llamado...')
//  console.log(`Dimensión: ${response.dimension}`);
//  return fetchData(API)
//}

//fetchData(API)
//  .then(response => {
//    console.log('Primer Llamado...')
//    console.log(`Personajes: ${response.info.count}`);
//    return fetchData(API + response.results[0].id)
//  })
//  .then(response => {
//    console.log('Segundo Llamado...')
//    console.log(`Primer Personaje: ${response.name}`);
//    return fetchData(response.origin.url)
//
//  })
//  .then(response => {
//    console.log('Tercero Llamado...')
//    console.log(`Dimensión: ${response.dimension}`);
//    return fetchData(API)
//  })
//  .catch(error => console.error(`Error ${error}`))

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
