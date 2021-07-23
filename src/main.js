//Primero importamos la data para poder darle funcionalidad y asi convertirla en información
import data from './data/ghibli/ghibli.js';
//importamos la data js donde aplicamos funcionalidad pura
import { ordenar } from './data.js';
//Localizamos los elementos del DOM usando los selectores,.getElementById() 
//Usamos .addEventListener() para adjuntar un controlador de eventos al documento.
//usa el método addEventListener () para adjuntar un evento 'keyup' a un elemento de entrada. 
document.getElementById("btnordenar").addEventListener("click",misort);
let edtbuscar=document.getElementById("buscador");
edtbuscar.addEventListener("keyup",buscar);

//function for y template string para plasmar información de peliculas en el main
mostrarpeliculas(data.films);
function mostrarpeliculas(misdatos){
  let cajadatos=document.getElementById("peliculas");
  cajadatos.innerHTML="";
  for (let j=0; j<misdatos.length; j++){
  cajadatos.innerHTML+=`        <article class="miarticulo">
 
   <h2>${misdatos[j].title}</h2>
            <div id='${misdatos[j].id}' class="pelicula">
            
            <a class="empezar" href="detalle.html" 
            ><img  src="${misdatos[j].poster}" alt=""></a>
          </div>
          </article>`
  }

}

//function para ordenar
function misort(){
  console.log(data.films.sort(ordenar))
 
  mostrarpeliculas( data.films.sort(ordenar));
}

//funcion para buscar
function buscar(){

 const predicado = (item) => {
  if(item.title.substring(0,edtbuscar.value.length).toLowerCase()==edtbuscar.value.toLowerCase()){
    return true;
  }
  return false;
}
mostrarpeliculas(data.films.filter(predicado));

}

//funcion para mostrar personajes en main usando for y template strings
mostrarpersonajes(data.films);
function mostrarpersonajes(misdatos){
  let cajadatos=document.getElementById("peliculas");
  cajadatos.innerHTML="";
  for (let j=0; j<misdatos.length; j++){
  cajadatos.innerHTML+=`        <article class="miarticulo">
 
   <h2>${misdatos[j].name}</h2>
            
            
            <a class="empezar" href="detalle.html" 
            ><img  src="${misdatos[j].img}" alt=""></a>
            <p>Género: "${misdatos[j].gender}"</p>
            <p>Edad: "${misdatos[j].age}"</p>
            <p>Color de ojos: "${misdatos[j].eye_color}"</p>
            <p>color de cabello: "${misdatos[j].hair_color}"</p>
            <p>Especie: "${misdatos[j].specie}"</p>
          </div>
          </article>`
  
  }
}
//función filtrar personajes con for each
const selectPersonajes= document.querySelector(".selectp")
function filtrarPersonajes(){
  console.log (selectPersonajes.value);
  data.films.forEach(elemento=>{
    if(selectPersonajes.value=== elemento.title){
      mostrarpersonajes(elemento.people);
      
    }
   } 
  )}
  selectPersonajes.addEventListener("change", filtrarPersonajes)   
 
//función filtrar personajes con map
console.log(data.films.map((item)=>{
  return  `${item.director}`;
   }));
    console.log();
  data.films[0].director;
   console.log(data.films[1].director)
 let directores= data.films[1].director;
 document.getElementById(".nav-container__item").addEventListener("click",mostrarpeliculas);`${directores}`