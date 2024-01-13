(function () {
  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  async function getRandomMovie() {
    let data = await axios({
      method: "get",
      url: apiUrl,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWY4MTVhMzY5MmViZjgzZTk0MTY3NWQxMTdkZjExYyIsInN1YiI6IjY1OWI0Y2E4NGQwZThkMDI1OWQ1YTU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BFIXm9RvoYuG5CNzzT6J2wole8zvUUKtf8icpoEG1mQ",
      },
    });

    const randomIndex = Math.floor(Math.random() * data.data.results.length);
    const randomMovie = data.data.results[randomIndex];

    const movieContainer = document.getElementById("movieContainer");
    movieContainer.innerHTML = `
          <h2>${randomMovie.title}</h2>
          <img src="https://image.tmdb.org/t/p/w500${randomMovie.poster_path}" alt="${randomMovie.title} Poster">
          <p>${randomMovie.overview}</p>
        `;
  }

  async function searchMovie() {
    let userSearchInput = document.querySelector("#gsearch").value;
    console.log(userSearchInput);

    try {
      let data = await axios({
        url: `https://api.themoviedb.org/3/search/movie?query=${userSearchInput}&include_adult=false&language=en-US&page=1`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWY4MTVhMzY5MmViZjgzZTk0MTY3NWQxMTdkZjExYyIsInN1YiI6IjY1OWI0Y2E4NGQwZThkMDI1OWQ1YTU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BFIXm9RvoYuG5CNzzT6J2wole8zvUUKtf8icpoEG1mQ",
        },
      });
      console.log(data);
      const movies = data.data.results;
      if (movies.length > 0) {
        const movie = movies[0];
        const movieContainer = document.getElementById("movieContainer");
        movieContainer.innerHTML = `
              <h2>${movie.title}</h2>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
              <p>${movie.overview}</p>
            `;
      } else {
        console.log("No results found.");
      }
    } catch (error) {
      console.log(error, "IT NO WORK");
    }
  }

  const searchBtn = document.querySelector(".searchBtn");
  searchBtn.addEventListener("click", searchMovie);
  const shuffleButton = document.getElementById("shuffleButton");
  shuffleButton.addEventListener("click", getRandomMovie);
})();
