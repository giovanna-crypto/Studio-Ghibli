//Primero importamos la data para poder darle funcionalidad y asi convertirla en información

//importamos la data js donde aplicamos funcionalidad pura

//Localizamos los elementos del DOM usando los selectores,.getElementById() 
//Usamos .addEventListener() para adjuntar un controlador de eventos al documento.
//usa el método addEventListener () para adjuntar un evento 'keyup' a un elemento de entrada. 
import data from './data/ghibli/ghibli.js';
import { ordenar } from './data.js';
document.getElementById("btnlistaPeli").addEventListener("click", listaPeli);

document.getElementById("btnordenar").addEventListener("click",misort);
let edtbuscar=document.getElementById("buscador");
edtbuscar.addEventListener("keyup",buscar);



mostrarDesplegableDirector(data.films);
function mostrarDesplegableDirector(misdatos)
{
    let namesSet = new Set(misdatos.map(item=>item.director));
    let cajadatos=document.getElementById("selectDirector");
    cajadatos.innerHTML="";
    cajadatos.innerHTML=`<option value="" disabled selected>Movies por Director</option>`

/**
 * for(let j=0; j<misdatos.length; j++)
 * {cajadatos.innerHTML+=`<option value=<option value="${elemento.title}">${elemento.title}</option>`}
 */
   namesSet.forEach((elemento)=>cajadatos.innerHTML+=`<option value="${elemento}">${elemento}</option>`)
}


const selectDirectores=document.getElementById("selectDirector");
function filtrarDirectores()
{
    const predicado=(item)=>{
      if(item.director==selectDirectores.value)
      {
        return true;
      }
      return false;
    }
    mostrarpeliculas(data.films.filter(predicado));
}
selectDirectores.addEventListener("change", filtrarDirectores)

  // lista de locations de la pelicula "castle in the sky"
// ojo aqui modal revisalo

listadetodaslasPeli(data.films)
function listadetodaslasPeli(misdatos)
{
    let cajadatos=document.getElementById("peliculas");
    cajadatos.innerHTML="";
    for (let j=0; j<misdatos.length; j++)
    {
      cajadatos.innerHTML+=`        <article class="miarticulo">
                
      <h2>${misdatos[j].title}</h2>
              <div id='${misdatos[j].id}' class="pelicula">
              
              <a class="empezar" href="#" 
              ><img  src="${misdatos[j].poster}" alt=""></a>
            </div>
           
            </article>`
    }

}


mostrarpeliculas(data.films);
function mostrarpeliculas(misdatos)
{
    let cajadatos=document.getElementById("peliculas");
    cajadatos.innerHTML="";
    for (let j=0; j<misdatos.length; j++)
    {
      cajadatos.innerHTML+=`        <article class="miarticulo">
                
      <h2>${misdatos[j].title}</h2>
              <div id='${misdatos[j].id}' class="pelicula">
              
              <a class="empezar" href="#tuId${j}" 
              ><img  src="${misdatos[j].poster}" alt=""></a>
            </div>
            <h3>Director: ${misdatos[j].director}</h3>
            </article>
            <section id="tuId${j}" class="modalDialog">
            <section>
            <a href="#close" title="Close" class="close">X</a>
            <h2><strong style="color:white;">Titulo:</strong> ${misdatos[j].title}</h2>
            <h4><strong style="color:white;">Descripcion:</strong> ${misdatos[j].description}</h4>
            <h4><strong style="color:white;">Director:</strong> ${misdatos[j].director}</h4>
            <h4><strong style="color:white;">Productor:</strong> ${misdatos[j].producer}</h4>
            <h4><strong style="color:white;">Lanzamiento:</strong> ${misdatos[j].release_date}</h4>
            <h4><strong style="color:white;">Puntuacion:</strong> ${misdatos[j].rt_score}</h4>
            <img src="${misdatos[j].poster}" alt="">
            </section>
            </section> `
    }
  //document.getElementById(misdatos[0].id).addEventListener("click",mipelicula(misdatos[0].id),true);
}
// desplegable personajes


//mostrar selecionar personajes1

const selectPersonajes= document.querySelector(".selectp")
function filtrarPersonajes(){
  //console.log (selectPersonajes.value);
  data.films.forEach(elemento=>{
    if(selectPersonajes.value=== elemento.title)
        mostrarpersonajes(elemento.people);
   } 
  )}
  selectPersonajes.addEventListener("change", filtrarPersonajes)   

//mostrarpersonajes(data.films);
function mostrarpersonajes(misdatos){
  let cajadatos=document.getElementById("peliculas");
  cajadatos.innerHTML="";
  for (let j=0; j<misdatos.length; j++){
   cajadatos.innerHTML+=`        <article class="miarticulo">
   <h2>${misdatos[j].name}</h2>
   
            
            <a class="empezar" href="" 
            ><img  src="${misdatos[j].img}" alt=""></a>
          
            <p>Género: "${misdatos[j].gender}"</p>
            <p>Edad: "${misdatos[j].age}"</p>
            <p>Color de ojos: "${misdatos[j].eye_color}"</p>
            <p>color de cabello: "${misdatos[j].hair_color}"</p>
            <p>Especie: "${misdatos[j].specie}"</p>
           
            </div>
          </article>`

  }
  //document.getElementById(misdatos[0].id).addEventListener("click",mipelicula(misdatos[0].id),true);
}
//person
//<div id='${misdatos[j].id}' class="pelicula">
//lista de todas las peliculas (20 peliculas)
function listaPeli(){
  // console.log("hola");
  // console.table(data.films)
  listadetodaslasPeli(data.films)
}

function misort()
{
   // console.log(data.films.sort(ordenar))
    mostrarpeliculas( data.films.sort(ordenar));
}

function buscar()
{   // 1. Filter the list of inventors for those who were born in the 1980's
    const predicado = (item) => {
       if(item.title.substring(0,edtbuscar.value.length).toLowerCase()==edtbuscar.value.toLowerCase())
       {
           return true;
       }
       return false;
    }
   // const predicado = item => item.release_date >= 1980 && item.release_date <2000;
    mostrarpeliculas(data.films.filter(predicado));
}

//miid
// function mipelicula(miid)
// {
//   console.log(miid);
//   console.log("clic en pelicula")

// }