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

function ver()
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
.catch(function(url_api){
    console.log(url_api)
})
} 
ver()
/* fetchData(API).then((error1, data1)=> {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...');
})
// console.log(data1);
fetchData(API + data.results[1].id).then((error2, data2)=> {
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...');
})    
    fetchData(data2.origin.url,  (error3, data3)=> {
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    }); */
 




/* 
const API = 'https://rickandmortyapi.com/api/character/';
const fetchData=(url_api, callback) =>{ 
  console.log(url_api)
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.send(null);
  xhttp.onreadystatechange = ()=> {
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200)
      {  
        var resultado=JSON.parse(xhttp.responseText);
        callback(null,resultado);
      }  
        else return callback(url_api);
    }
  };
   
};

fetchData(API,(error1, data1)=> {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...')
  console.log(data1.results[1].id)//numero2
  fetchData(API + data1.results[1].id,  (error2, data2)=> {
    // console.log(typeof data1)
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url,  (error3, data3)=> {
      if (error3) return console.error(error3);
      console.log(data3)

      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    });
  });
});   */



/* fetchData(API,(error1, data1)=>{
  console.log(data1)
  if (error1) return console.error(`Error  ${error1}`);
  console.log('Primer Llamado...');

  fetchData(API+ data2.results[0].id,(error2, data2)=>{
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    
  });
}); */
  
   /*fetchData(API,(error1, data1)=> {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...')
  fetchData(API + data1.results[0].id,  (error2, data2)=> {
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url,  (error3, data3)=> {
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    });
  });
}); 
}); */

/* fetchData(API,(error1, data1)=> {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...')
  fetchData(API + data1.results[0].id,  (error2, data2)=> {
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    fetchData(data2.origin.url,  (error3, data3)=> {
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + data1.info.count);
      console.log('Primer Personaje:' + ' ' + data2.name);
      console.log('Dimensión:' + ' ' + data3.dimension);
    });
  });
}); */