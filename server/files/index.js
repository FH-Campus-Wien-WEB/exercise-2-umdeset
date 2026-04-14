
  function reverseString(s) {
  return s.split("").reverse().join("");
}

  window.onload = function () {
  const xhr = new XMLHttpRequest()
  xhr.onload = function () {
  const bodyElement = document.querySelector("body")
  if (xhr.status == 200) {
  /* Part 2: Build the HTML elements here and append them to the body */
  const movies = JSON.parse(xhr.responseText)
  movies.forEach(function (movie) {
  const movieArticle = document.createElement("article");
    movieArticle.id = movie.imdbID;
  const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
  const posterElement = document.createElement("img");
  const titleElement = document.createElement("h2");
  const infoElement = document.createElement("p");
  const plotElement = document.createElement("p");
  const directorHeader = document.createElement("h3");
  const directorList = document.createElement("ul");
  const writerHeader = document.createElement("h3");
  const writerList = document.createElement("ul");
  const actorHeader = document.createElement("h3");
  const actorList = document.createElement("ul");


  movieArticle.append(posterElement);
    movieArticle.append(editButton);
  movieArticle.append(titleElement);
  movieArticle.append(infoElement);
  const ratingContainer = document.createElement("div");
  ratingContainer.className = "rating-container";
  const imdbSpan = document.createElement("span");
  imdbSpan.className = "imdb";
  imdbSpan.textContent = "IMDb " + movie.imdbRating;
  const metaSpan = document.createElement("span");
  metaSpan.className = "metascore";
  metaSpan.textContent = "Metascore " + movie.Metascore;
  ratingContainer.append(imdbSpan);
  ratingContainer.append(metaSpan);
  movieArticle.append(ratingContainer);
  const genreContainer = document.createElement("div");
  genreContainer.className = "genre-container";

  movie.Genres.forEach(function (genre) {
  const genreSpan = document.createElement("span");
  genreSpan.textContent = genre;
  genreSpan.className = "genre";
  genreContainer.append(genreSpan);
});
  editButton.onclick = function() {
      location.href = "edit.html?imdbID=" + movie.imdbID;
    };
  movieArticle.append(genreContainer);
  movieArticle.append(directorHeader);
  movie.Directors.forEach(function (director) {
  const li = document.createElement("li");
  li.textContent = director;
  directorList.append(li);
})
  movieArticle.append(directorList);

  movieArticle.append(writerHeader);
  movie.Writers.forEach(function (writer) {
  const li = document.createElement("li");
  li.textContent = writer;
  writerList.append(li);
})
  movieArticle.append(writerList);

  movieArticle.append(actorHeader);
  movie.Actors.forEach(function (actor) {
  const li = document.createElement("li");
  li.textContent = actor;
  actorList.append(li);
})
  movieArticle.append(actorList);

  movieArticle.append(plotElement);


  posterElement.src = movie.Poster;
  infoElement.innerHTML = "• Runtime: " + movie.Runtime + "m <br>• Released on: " + movie.Released;
  infoElement.className = "movie-info";
  titleElement.textContent = movie.Title;
  bodyElement.append(movieArticle);
  plotElement.textContent = movie.Plot;
  directorHeader.textContent = "Director";
  writerHeader.textContent = "Writer";
  actorHeader.textContent = "Actor";

})
} else {
  bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
}
}
  xhr.open("GET", "/movies")
  xhr.send()
}