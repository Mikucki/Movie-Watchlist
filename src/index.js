// get the background image from the API pls TODO MEGA IMPORTANT (better quality )

fetch("http://www.omdbapi.com/?apikey=[yourkey]&")
  .then((res) => res.json())
  .then((data) => console.log(data));
