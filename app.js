let slidePosition = 0;
let slides;
let films;

document.getElementById("carousel-left").addEventListener("click", prevSlide);
document.getElementById("carousel-right").addEventListener("click", nextSlide);

let jpTitle = document.querySelector("#jptitle");
let title = document.querySelector("#title");

let card = document.querySelector(".poster-img");

let release = document.querySelector(".release-date");
let director = document.querySelector(".director");
let producer = document.querySelector(".producer");
let runtime = document.querySelector(".runtime");

let description = document.querySelector(".description-content");
const ost = new Audio("/resources/ost.mp3");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    films = data;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

function prevSlide() {
  ost.play();
  document.querySelector(".title-info").classList.remove("hidden");
  document.querySelector(".details").classList.remove("hidden");

  if (slides === undefined || slides === 0) {
    slides = films.length - 1;
  } else {
    slides--;
  }
  updateSlidePosition();
}
function nextSlide() {
  ost.play();
  document.querySelector(".title-info").classList.remove("hidden");
  document.querySelector(".details").classList.remove("hidden");
  if (slides === undefined || slides === films.length - 1) {
    slides = 0;
  } else {
    slides++;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  jpTitle.innerText = films[slides].original_title;
  title.innerText = films[slides].title;
  card.src = films[slides].image;

  description.innerText = films[slides].description;

  director.innerText = `Director: ${films[slides].director}`;
  producer.innerText = `Producer: ${films[slides].producer}`;
  runtime.innerText = `Runtime: ${films[slides].running_time}min`;
  release.innerText = `Release Date: ${films[slides].release_date}`;
}
