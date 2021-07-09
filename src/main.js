///import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data.films);
const film=`<article id='cd3d059c-09f4-4ff3-8d63-bc765a5184fa'>
<h2>${data.films[0].title}</h2>
<div class='pelicula1'>
  <img src='https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg'>
</div>
</article>`
console.log(film);