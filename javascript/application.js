import Mustache from "mustachejs";

console.log("hello from application.js")

const movieContainer = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate").innerHTML;

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const movieData = { "movies": data.Search };
    const output = Mustache.render(template,movieData);
    movieContainer.innerHTML = output;
  })
