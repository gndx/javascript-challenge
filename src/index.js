const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';
const xhttp = new XMLHttpRequest();

const fetchData = url_api => {
  xhttp.open('GET', url_api, false);
  return new Promise((Response, reject)=>{
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          const res =JSON.parse(xhttp.responseText);
          return Response(res);
        } else {
          return rejeact(new Error('Error has ocurred!'))
        }
      }
    }
    xhttp.send();
  })
};

const getDate = async url => {
  try{
    const first = await fetchData(url);
    const second = await fetchData(`${API}${first.results[0].id}`);
    const third = await fetchData(second.origin.url);

    console.log(`Personajes: ${first.info.count}`);
    console.log(`Primer Personaje: ${second.name}`);
    console.log(`Dimension: ${third.dimension}`);
  } catch(error){
    console.log(error)
  }
}

getDate(API)
  





  
       
        
      
    
  