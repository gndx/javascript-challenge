var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = "https://rickandmortyapi.com/api/character/";
var xhttp = new XMLHttpRequest();

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    xhttp.open("GET", url_api, false);
    xhttp.onreadystatechange = (event) => {
      if (xhttp.readyState === 4 && xhttp.status == 200)
        resolve(JSON.parse(xhttp.responseText));
      else reject();
    };
    xhttp.send();
  });
};

fetchData(API)
  .then((data1) => {
    console.log("Primer Llamado...");

    setTimeout(() => {
      console.log(`Personajes: ${data1.info.count}`);
    }, 1000);

    return fetchData(API + data1.results[0].id);
  })
  .then((data2) => {
    console.log("Segundo Llamado...");

    setTimeout(() => {
      console.log(`Primer Personaje: ${data2.name}`);
    }, 1000);

    return fetchData(data2.origin.url);
  })
  .then((data3) => {
    console.log("Tercer Llamado...");

    setTimeout(() => {
      console.log(`Dimensión: ${data3.dimension}`);
    }, 1000);
  })
  .catch((err) => console.log("Error! " + err));
