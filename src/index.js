const API = 'https://rickandmortyapi.com/api/character/';
const fetchData=(url_api) =>{ 
  return new Promise((resolve,reject)=>{

  // const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.send(null);
    xhttp.onreadystatechange = ()=> {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
        {  
          
          var resultado=JSON.parse(xhttp.responseText);
          resolve(resultado);
        }  
        else return reject(url_api);
      }
    };
  })
};

const ver=()=>
{
const objeto={};

fetchData(API).
then((data1)=>{
  console.log('Primer Llamado...');
  objeto.data1=data1;
  return fetchData(API + data1.results[1].id)
})

.then((data2)=>{
  objeto.data2=data2
  console.log('Segundo Llamado...');
  return fetchData(data2.origin.url);
})

.then((data3)=>{
  objeto.data3=data3
  console.log('Tercero Llamado...')
      console.log(`Personajes: ${objeto.data1.info.count}`);
      console.log(`Primer Personaje:${objeto.data2.name}`);
      console.log('Dimensión:' + ' ' + data3.dimension);
})
.catch((url_api)=>{
    console.log(url_api)
})
} 
ver()
