const mainEl = document.querySelector("main");

function insertp(p) {
  mainEl.insertAdjacentHTML(
    "afterbegin",
    `
        <p>${p[0]}</p>
        <p>${p[1]}</p>
        <p>${p[2]}</p>

    `
  );
}

fetch("https://dog-api.kinduff.com/api/facts?number=5")
  .then((response) => response.json())
  .then((data) => insertp(data.facts));
