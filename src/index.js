const { XMLHttpRequest } = require('xmlhttprequest');

const API = 'https://rickandmortyapi.com/api/character/';
const xhttp = new XMLHttpRequest();

function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = event => {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200) {
          const jsonData = JSON.parse(xhttp.responseText);
          resolve(jsonData);
        }
      }

      reject(url_api);
    };

    xhttp.open('GET', url_api, false);
    xhttp.send();
  });
}

(async () => {
  try {
    const data1 = await fetchData(API);
    console.log('Primer Llamado...');

    const data2 = await fetchData(`${API}${data1.results[0].id}`);
    console.log('Segundo Llamado...');

    const data3 = await fetchData(data2.origin.url);
    console.log('Tercero Llamado...');

    console.log(`Personajes: ${data1.info.count}`);
    console.log(`Primer Personaje: ${data2.name}`);
    console.log(`Dimensión: ${data3.dimension}`);
  } catch (error) {
    console.error(`Error ${error}`);
  }
})();
