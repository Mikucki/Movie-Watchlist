// get the background image from the API pls TODO MEGA IMPORTANT (better quality )

fetch("https://image.unsplash.com/example")
  .then((res) => res.json())
  .then((data) => console.log(data));
