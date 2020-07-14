const url='https://rickandmortyapi.com/api/character/';

const fetchData=()=>{
    fetch(url)

        .then(data=>data.json())
        .then(data=>{

            console.log(data);
            
            for(let i in data.results){
                 document.write("<strong>id : </strong>" +data.results[i].id+
                " "+"<strong>Name: </strong>"+data.results[i].name+
                "<strong>Type: </strong>"+data.results[i].type+"<br><br>");
        
            }
        
        })
        .catch(()=>{document.write("Personaje no encontrado!")})

}



async function getData(){
            
    
     const data=await fetch('https://rickandmortyapi.com/api/character/')
    
    try {
          if(data.ok){
            const personajes=await data.json();
            console.log(personajes);
        
          
            for(let i in personajes.results){
                document.write("<strong>Nombre: </strong>" +personajes.results[i].name+
                " "+"<strong>Status: </strong>"+personajes.results[i].status+
                "<strong>Type: </strong>"+personajes.results[i].type+"<br><br>");
            }

        }
    } catch (error) {
        console.log(error)
    }
        
    
    
}

getData()