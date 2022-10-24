// get the background image from the API pls TODO MEGA IMPORTANT (better quality )

fetch("http://www.omdbapi.com/?t=ninja&y=2000&plot=full")
  .then((res) => res.json())
  .then((data) => console.log(data));
