window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        const movieArticle = document.createElement("article");
        const posterElement = document.createElement("img");
        const titleElement = document.createElement("h2");
        const infoElement = document.createElement("p");
        const plotElement = document.createElement("p");

        movieArticle.id = movie.imdbID;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        posterElement.src = movie.Poster;
        titleElement.textContent = movie.Title;
        plotElement.textContent = movie.Plot;
        infoElement.innerHTML = "• Runtime: " + movie.Runtime + "m <br>• Released on: " + movie.Released;

        movieArticle.append(posterElement);
        movieArticle.append(titleElement);
        movieArticle.append(infoElement);
        movieArticle.append(plotElement);

        movieArticle.append(editButton);

        bodyElement.append(movieArticle);
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
