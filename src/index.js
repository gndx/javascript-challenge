const API = 'https://rickandmortyapi.com/api/character/';
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

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
