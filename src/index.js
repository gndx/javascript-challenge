import fetch from 'node-fetch';
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api) {
  return fetch(url_api)
    .then( response => {
      if(response.status == 200){
        return response.json()
      }
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    });
};

async function getData (){
    const first = await fetchData(API);
    const urlSecond = `${API}${first.results[0].id}`;
    const second = await fetchData(urlSecond);
    const urlThird = `${second.origin.url}`;
    const third = await fetchData(urlThird);
    console.log(`Personajes: ${first.info.count}`);
    console.log(`Primer Personaje: ${second.name}`);
    console.log(`Dimensión: ${third.dimension}`);
}
getData()