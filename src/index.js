const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://rickandmortyapi.com/api/character/";

const fetchData = ({
  method = "GET",
  urlApi = API
  // done = () => {},
  // error = () => {}
}) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = event => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.status);
        }
      }
    };
    request.open(method, urlApi, false);
    request.send();
  });
};

fetchData({})
  .then(res => {
    console.log(`Total de Personajes: ${res.info.count}`);
    return res.results[0].id;
  })
  .then(id => {
    fetchData({ urlApi: `${API}/${id}` })
      .then(res2 => {
        console.log(`Primer Personaje: ${res2.name}`);
        return res2.origin.url;
      })
      .then(url => {
        fetchData({ urlApi: url })
          .then(res3 => {
            console.log(`Dimensión: ${res3.dimension}`);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(`Error: ${err}`));