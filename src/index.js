
const API = 'https://rickandmortyapi.com/api/character/';
const fetchData = url_api => {
  return new Promise((resolve, reject) => {
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.send();
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(JSON.parse(xhttp.responseText));
        else return reject(new_Error('Algo ha fallado.'));
      }
    };
  })
}

Promise.all([fetchData(API)])
  .then(data1 => {
    if (data1 != null) {
      console.log(data1[0].info.count)
      fetchData(API + data1[0].results[0].id).then(data2 => {
        console.log(data2.name);
        fetchData(data2.origin.url).then(data3 => {
          console.log(data3.dimension)
        })
      })
    }
  });
