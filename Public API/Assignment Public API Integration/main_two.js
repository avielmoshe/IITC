const imgDiv = document.getElementsByClassName("image-container")[0];

function insertImage(src) {
  imgDiv.insertAdjacentHTML(
    "afterbegin",
    `
        <img src="${src[1]}" alt="Dog Image">    
        <img src="${src[2]}" alt="Dog Image">    
    `
  );
}

fetch("https://imdb.iamidiotareyoutoo.com/justwatch?q=gameof")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.description[0].photo_url);
    insertImage(data.description[0].photo_url);
  });
