
const   XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const  API = 'https://rickandmortyapi.com/api/character/';

const xhttp = new XMLHttpRequest();

fetchData=(url_api)=>{
  
  return new Promise ((resolve, reject)=>{
    xhttp.open('GET', url_api, false);
  xhttp.onreadystatechange =  ()=> {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200)
      res = JSON.parse(xhttp.responseText);
        return resolve(res);
    }else {
      return  reject(new error('error has ocurred'))
    }
  };


  xhttp.send();
})

};


const getData= async url=>{
  try {
    const first= await fetchData(url) //es el primer llamado a nuestra api vamos a traer los personajes
    const second = await fetchData(`${API}${first.results[0].id}`)
    const third =await fetchData(second.origin.url)
    
          console.log(`personajes ${first.info.count}`);
          console.log(`primer personaje ${second.name}`);
          console.log(`Dimension: ${third.dimension}`);
  } catch (error) {
    console.log(error)
  }
}
getData(API)
// fetchData(API, (error1, data1) => {
//   if (error1) return console.error(`error ${erro1}`);
//   console.log('Primer Llamado...')
//   fetchData(API + data1.results[0].id, (error2, data2)=> {
//     if (error2) return console.error(error1);
//     console.log('Segundo Llamado...')
//     fetchData(data2.origin.url, (error3, data3) =>{
//       if (error3) return console.error(error3);
//     });
//   });
// });




















// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const API = 'https://rickandmortyapi.com/api/character/'

// const fetchData = url_api => {
//   xhttp.open('GET', url_api)
//   return new Promise((resolve, project)=>{
    
//     xhttp.onreadystatechange = function (event) {
//       let  xhttp = new XMLHttpRequest();
//       if (xhttp.readyState === 4) {
//         if (xhttp.status === 200)
        
//         resolve(JSON.parse(xhttp.responseText));
//         else return reject(' ha fallado')
//       }
//     }
//     xhttp.send();

//   })
// }

// function error(url_api){
//   console.log(` error:()`)
// }


// fetchData(API)
//     .then((data) =>{
//         data1=data;
//         console.log('Primer Llamado...')
//         return fetchData(`${API}${data.results[0].id}`)
//     })
//     then((data)=> {
//         data2=data;
//         console.log(`Segundo Llamado...`);
//         return fetchData(`${data.origin.url}`)
//     })

//     .then((data)=> {
//         data3=data;
//         console.log(`Tercer Llamado...`);
//         console.log(`Personajes: ${data1.info.count}`)
//     console.log(`Primer Personaje:${data2.name}`)
//     console.log(`Dimensión: ${data3.dimension}`)
//   })
//   .catch(error);














































