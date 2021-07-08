//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

 //console.log(example, data);
 console.log(data.films);
 //2baf70d1-42bb-4437-b551-e5fed5a87abe

const film=`<article id='${data.films[0].id}'>
<h2>${data.films[0].title}</h2>
<div class='pelicula1'>
  <img src='${data.films[0].poster}'>
</div>
</article>`
console.log(film);




  



