const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';
const xhttp = new XMLHttpRequest();

const fetchdata = url_api => new Promise((resolve,reject)=>{
  xhttp.onreadystatechange =  event => {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200)
      {
        const objectchange = JSON.parse(xhttp.responseText)
          resolve(objectchange);
        }
        
      else reject (url_api);
    }
  };
  xhttp.open('GET', url_api, false);
  xhttp.send();
}
)

let data1
let data2
  

fetchdata(API)
.then((data)=>{console.log(`Primer Llamado...`)
data1=data
return  fetchdata (API + data.results[0].id)
})
.then((data)=> {console.log(`Segundo Llamado...`)
data2=data
return fetchdata (data.origin.url)
})
.then ((data3)=> {
  console.log('Tercero Llamado...')
  console.log(`Personajes: ${data1.info.count}`);
  console.log(`Primer Personaje: ${data2.name}`);
  console.log( `Dimensión: ${data3.dimension}`);
})
.catch((error)=> console.error(`Error ${error}`))

