// const getMovie = async (movie) => {
//   const apiKey = "e3a8c71b";
//   const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
// };

// const searchValue = () => {
//   return document.getElementById("input").value.trim();
// };
// const searchButton = () => {
//   getMovie(searchValue());
// };
const getMovie = async (movie) => {
  const apiKey = "e3a8c71b";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
  const res = await fetch(url);
  const data = await res.json();
  showMovie(data);
};

const showMovie = (movieData) => {
  document.getElementById("movieContainer").innerHTML = "";
  const movieContainer = document.getElementById("movieContainer");
  const {
    Poster,
    Title,
    Plot,
    Actors,
    Director,
    Released,
    Genre,
    Runtime,
    imdbRating,
    BoxOffice,
    Writer,
    Language,
    Country,
    Awards,
  } = movieData;

  const div = document.createElement("div");
  div.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "bg-white",
    "shadow-lg",
    "rounded-lg",
    "overflow-hidden"
  );
  div.innerHTML = `
 <div class="md:w-1/3 mx-auto">
            <img
              id="moviePoster"
              src="${Poster}"
              alt="Movie Poster"
              class="w-[250px] lg:w-full lg:h-auto rounded-md object-cover"
            />
          </div>

          <div
            class="md:w-2/3 p-6 mx-auto flex flex-col justify-center lg:ml-32"
          >
            <h1 id="movieTitle" class="text-3xl font-bold text-gray-800 mb-4">
              ${Title}
            </h1>
            <p id="moviePlot" class="text-gray-700 mb-4">
              ${Plot}
            </p>
            <div class="text-gray-600 space-y-1">
              <p>
                <strong>Actors:</strong>
                <span >${Actors}</span>
              </p>
              <hr />
              <p>
                <strong>Director:</strong>
                <span>${Director}</span>
              </p>
              <hr />
              <p>
                <strong>Release:</strong>
                <span>${Released}</span>
              </p>
              <hr />
              <p>
                <strong>Genre:</strong>
                <span>${Genre}</span>
              </p>
              <hr />
              <p>
                <strong>Run Time:</strong>
                <span>${Runtime}</span>
              </p>
              <hr />
              <p>
                <strong>imdb Raring:</strong>
                <span>${imdbRating}</span>
              </p>
              <hr />
              <p>
                <strong>Box Office:</strong>
                <span>${BoxOffice}</span>
              </p>
              <hr />
              <p>
                <strong>Writer:</strong>
                <span>${Writer}</span>
              </p>
              <hr />
              <p>
                <strong>Language:</strong>
                <span>${Language}</span>
              </p>
              <hr />
              <p>
                <strong>Country:</strong>
                <span>${Country}</span>
              </p>
              <hr />
              <p>
                <strong>Awards:</strong>
                <span>${Awards}</span>
              </p>
            </div>
          </div>
`;
  movieContainer.appendChild(div);
};

const searchValue = () => {
  return document.getElementById("input").value.trim();
};

const searchButton = () => {
  const movie = searchValue();
  if (movie) {
    getMovie(movie);
  } else {
    alert("Please enter a movie name.");
  }
};
