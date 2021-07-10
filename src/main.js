//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
import { ordenar } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';
document.getElementById("btnordenar").addEventListener("click",misort);
let edtbuscar=document.getElementById("buscador");
edtbuscar.addEventListener("keyup",buscar);

 //console.log(example, data);
//console.table(data.films);
//console.log(data.films);

 //2baf70d1-42bb-4437-b551-e5fed5a87abe

 //const film=`<article id='${data.films[0].id}'>
//<h2>${data.films[0].title}</h2>
//<div class='pelicula1'>
//   <img src='${data.films[0].poster}'>
// </div>
// </article>`
// console.log(film);


/**
 * 
 * const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 'Titulo is: ' + data.films[0].title;
 */
 //for( let i=0; i<3;i++)
 //{
   //console.log(document.getElementById("demo").innerHTML = 'Titulo is: ' + data.films[i].title);
 //}






  // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1980's
 /***
  *  const predicado = (item) => {
    if(item.release_date >= 1980 && item.release_date <2000){
      return true;
    }
    return false;
  }
  */

    //const predicado = item => item.release_date >= 1980 && item.release_date <2000;
    //console.table(data.films.filter(predicado));
    
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
   // console.log(data.films.map(item => `${item.director} ${item.producer}`));

  /**
   *  console.log(data.films.map((item)=>{
    return `${item.director} ${item.producer}`;
  }));
   * 
   */

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
/**
 * 
console.table(data.films.sort((a,b)=>{
  //return a.release_date - b.release_date;
  if(a.release_date > b.release_date){
    return 1;
  } 
  if(a.release_date < b.release_date) {
    return -1;
  }
  return 0;
}));
 */

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
//reduccion,.. realista, estdistica, max, min, reduce
   /**
    *  console.log(data.films.reduce(
      (prev.item)=> prev +(item.passed-item.release_date),
      0,
    ));
    */

    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

  
  /**
   *   const alpha = data.films.people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
   */

    ///  lista de ordenar las peliculas (title)


 
  
  // console.log(data.films.map((item)=>{
  //    return  `${item.title}`;
  //  }));
    //console.log();
  //data.films[0].title;
   // console.log(data.films[1].title)

   //lista de personajes (people) de la pelicula "Castle in the Sky"
// for (let i=0; i<13; i++){
//   console.log(data.films[0].people[i].name);
// }
// lista de locations de la pelicula "castle in the sky"


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
  //document.getElementById(misdatos[0].id).addEventListener("click",mipelicula(misdatos[0].id),true);
}




function misort(){
  console.log(data.films.sort(ordenar))
 

  mostrarpeliculas( data.films.sort(ordenar));
}
function buscar(){

    // 1. Filter the list of inventors for those who were born in the 1980's
 const predicado = (item) => {
  if(item.title.substring(0,edtbuscar.value.length).toLowerCase()==edtbuscar.value.toLowerCase()){
    return true;
  }
  return false;
}
 

   // const predicado = item => item.release_date >= 1980 && item.release_date <2000;
    mostrarpeliculas(data.films.filter(predicado));

}

function mipelicula(miid){
  console.log(miid);
  console.log("clic en pelicula")

}

