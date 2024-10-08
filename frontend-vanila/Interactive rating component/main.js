const ratingNums = document.querySelectorAll(".raiting div");
let selectedRating = null;

ratingNums.forEach((num) => {
  num.addEventListener("click", function () {
    ratingNums.forEach((num) => {
      num.classList.remove("selected-rating", "num");
    });
    num.classList.add("selected-rating", "num");
    selectedRating = num.textContent;
    num.classList.add("selected-rating", "num");
    console.log("Selected Rating:", selectedRating);
  });
});
document
  .getElementById("raiting-form")
  .addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (selectedRating) {
      document.querySelector(
        ".result"
      ).textContent = ` You selected ${selectedRating} out of 5`;
      document.querySelector(".container, rating").classList.add("hidden");
      document.querySelector(".thankYou").classList.remove("hidden");
    } else {
      console.log("Please select a rating.");
    }
  });
