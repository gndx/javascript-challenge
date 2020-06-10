const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = url_api => {
  return new Promise((resolve, project)=>{
    
    xhttp.open('GET', url_api)
    xhttp.send();
    xhttp.onreadystatechange = function (event) {
      let  xhttp = new XMLHttpRequest();
        if (xhttp.readyState === 4) {
          if (xhttp.status == 200)
          
            resolve(JSON.parse(xhttp.responseText));
          else return reject(' ha fallado')
       }
    }

  })
}

function error(url_api){
  console.log(` error:()`)
}


fetchData(API)
    .then((data) =>{
        data1=data;
        console.log('Primer Llamado...')
        return fetchData(`${API}${data.results[0].id}`)
    })
    then((data)=> {
        data2=data;
        console.log(`Segundo Llamado...`);
        return fetchData(`${data.origin.url}`)
    })

    .then((data)=> {
        data3=data;
        console.log(`Tercer Llamado...`);
        console.log(`Personajes: ${data1.info.count}`)
    console.log(`Primer Personaje:${data2.name}`)
    console.log(`Dimensión: ${data3.dimension}`)
  })
  .catch(error);














































