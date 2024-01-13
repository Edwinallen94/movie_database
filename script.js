(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/documentation/#get-all-characters
   * To get an individual character use this:
   * https://rickandmortyapi.com/documentation/#get-a-single-character
   *
   * Use the AXIOS library to make AJAX requests.
   */

  const dropdown = document.querySelector("#dropdown");

  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/configuration",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWY4MTVhMzY5MmViZjgzZTk0MTY3NWQxMTdkZjExYyIsInN1YiI6IjY1OWI0Y2E4NGQwZThkMDI1OWQ1YTU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BFIXm9RvoYuG5CNzzT6J2wole8zvUUKtf8icpoEG1mQ",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      // Usually, you should display an error message on the screen inside of doing console.error
      console.error(err);
    });
})();
