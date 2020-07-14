const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';
const xhttp = new XMLHttpRequest();


const fetchData = (url_api) => {
  xhttp.responseType = 'json';
  xhttp.open('GET', url_api, true);
  xhttp.send();
  return new Promise((resolve, reject) => {
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200){
		const response = JSON.parse(xhttp.responseText);  
        resolve(response);
	  }
      else reject(Error(`${url_api} request did not load succesfully`));
    }
  }
 })
}

fetchData(`${API}`).then(data1 => {
	console.log(`Primer Llamado...`);
	console.log(`Personajes: ${data1.info.count}`);
	return fetchData(`${API}${data1.results[0].id}`)
}).then(data2 => {
	console.log(`Segundo Llamado...`);
	console.log(`Primer Personaje: ${data2.name}`);
	return fetchData(`${data2.origin.url}`)
}).then(data3 => {
	console.log(`Tercer Llamado...`);
	console.log(`Dimensión: ${data3.dimension}`);
}).catch(error => {
  console.log(error)
})

