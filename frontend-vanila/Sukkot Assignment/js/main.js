import { API_KEY } from "./API-KEY.js";
import { utils } from "./utils.js";

// catch all the elements from the html with dom

const continerEl = document.querySelector(".continer");
const continerMoviePageEl = document.querySelector(".continer-moviePage");
const continersearchByIdEl = document.querySelector(".searchById");
const favoritesEl = document.querySelector("#favorites");
const topRatingEl = document.querySelector("#topRating");
const btnByTitle = document.querySelector("#searchByTitle");
const searchButton = document.getElementById("searchBtn");
const carouselEL = document.querySelector(".caroisel-center");
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".image-item");
const continerCurrnetPageEl = document.querySelector(".continer-pages");
const btnCurrentPage = continerCurrnetPageEl.querySelectorAll("button");
const errorPageEl = document.querySelector(".errorPage");
const searchPhoneSizeEl = document.querySelector(".searchWhenItSmall");
const btnByTitlePhoneSize = searchPhoneSizeEl.querySelector("#searchByTitle");
// global data

const KET_STORAGE = "favoritesListOfData";
const favoritesListOfData = utils.getFromStorage(KET_STORAGE) || [];
let currentIndex = 0;
let onFavorites = false;
let isOnHomePage = true;
let currentPagePopular = 1;
let currentPageRated = 1;

// get data from API

const getPopularMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPagePopular}`
    );
    renderMovieHomePage(response.data.results);
  } catch (error) {
    console.error(error.message);
  }
};

const getMostRatingMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPageRated}`
    );
    renderMovieHomePage(response.data.results);
  } catch (error) {
    console.error(error.message);
  }
};

const getMovieById = async (movieID) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
    );
    return response.data; //חשוב
  } catch (error) {
    renderErrorPage();
  }
};

const getMovieByTitle = async (movieTitle) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`
    );
    return response.data.results; //חשוב
  } catch (error) {
    console.error(error.message);
  }
};

//addEventListener

favoritesEl.addEventListener("click", async () => {
  continerCurrnetPageEl.classList.add("hidden");
  await renderFavorites();
});

topRatingEl.addEventListener("click", () => {
  continerCurrnetPageEl.classList.remove("hidden");
  carouselEL.innerHTML = "";
  getMostRatingMovie();
  btnCurrentPage.forEach((btn) => {
    btn.classList.remove("currnent-page");
  });
  isOnHomePage = false;
});

btnByTitle.addEventListener("click", () => {
  continerCurrnetPageEl.classList.add("hidden");
  SearchByTitle(document.getElementById("search").value);
  document.getElementById("search").value = "";
});
btnByTitlePhoneSize.addEventListener("click", () => {
  continerCurrnetPageEl.classList.add("hidden");
  SearchByTitle(searchPhoneSizeEl.querySelector("#search").value);
  searchPhoneSizeEl.querySelector("#search").value = "";
});

searchButton.addEventListener("click", async function () {
  carouselEL.innerHTML = "";
  continerCurrnetPageEl.classList.add("hidden");
  const searchValue = document.getElementById("inById").value;
  const data = [];
  data.push(await getMovieById(searchValue));
  if (await getMovieById(searchValue)) {
    renderMovieHomePage(data);
  }
  document.getElementById("inById").value = "";
});

document.querySelector(".next-button").addEventListener("click", () => {
  currentIndex =
    currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

document.querySelector(".prev-button").addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  updateCarousel();
});

// all the function

function renderErrorPage() {
  continerCurrnetPageEl.classList.add("hidden");
  continerMoviePageEl.innerHTML = "";
  continersearchByIdEl.innerHTML = "";
  continerEl.innerHTML = "";
  errorPageEl.innerHTML = `<div>
  <p>You have searched for an unidentified ID, please try a different one</p>
  </div>`;
}

function renderMovieHomePage(data) {
  errorPageEl.innerHTML = "";
  continerMoviePageEl.innerHTML = "";
  continersearchByIdEl.innerHTML = "";
  continerEl.innerHTML = "";
  data.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
             alt="${movie.title}">
        <p>${movie.title}</p>
        <div class="rating">AVG rating: ${movie.vote_average}</div>
        <button class="fav-add"><span class=hidden>Added to</span> Favorites</button>
      </div>
      `;
    const img = movieElement.querySelector("img");
    img.addEventListener("click", () => renderMoviePage(movie.id));
    const btnFavAdd = movieElement.querySelector("button");
    const spanEl = movieElement.querySelector("span");
    if (onFavorites) {
      spanEl.classList.add("hidden");
    }
    btnFavAdd.addEventListener("click", () => {
      btnFavAdd.classList.toggle("btntoggle");
      addToFavorites(movie.id, spanEl);
    });
    continerEl.appendChild(movieElement);
  });
}

async function renderMoviePage(movieId) {
  errorPageEl.innerHTML = "";
  continersearchByIdEl.innerHTML = "";
  continerMoviePageEl.innerHTML = "";
  const data = await getMovieById(movieId); //חשוב
  continerMoviePageEl.innerHTML = `
  <div class="movie-detail">
    <h1>${data.title}</h1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
    <p>${data.overview}</p>
    <p>movie page <a href=${data.homepage}>${data.homepage}</a></p>
    <p>Release Date: ${data.release_date}</p>
    <p class="Rating">Rating: ${data.vote_average}</p>
    <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt="${data.title}">
  </div>
`;
  window.scrollTo(0, 0);
}

const addToFavorites = async (movieId, spanEl) => {
  spanEl.classList.toggle("hidden");
  let find = favoritesListOfData.findIndex((movie) => {
    return movie.id === movieId;
  });
  if (find === -1) {
    favoritesListOfData.push(await getMovieById(movieId));
    utils.saveToStorage(KET_STORAGE, favoritesListOfData);
  } else {
    favoritesListOfData.splice(find, 1);
    utils.saveToStorage(KET_STORAGE, favoritesListOfData);
    if (onFavorites) {
      renderMovieHomePage(favoritesListOfData);
    }
  }
};

const renderFavorites = () => {
  carouselEL.innerHTML = "";
  renderMovieHomePage(favoritesListOfData);
  onFavorites = true;
};

async function SearchByTitle(title) {
  carouselEL.innerHTML = "";
  const data = await getMovieByTitle(title);
  renderMovieHomePage(data);
}

const updateCarousel = () => {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
};

btnCurrentPage.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    btnCurrentPage.forEach((btn) => {
      btn.classList.remove("currnent-page");
    });
    btn.classList.add("currnent-page");
    if (isOnHomePage) {
      currentPagePopular = ev.target.value;
      getPopularMovie();
    } else {
      currentPageRated = ev.target.value;
      getMostRatingMovie();
    }
  });
});

// render the home page

getPopularMovie();
