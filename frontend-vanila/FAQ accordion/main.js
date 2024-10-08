const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const answers = document.querySelectorAll(".answer");

plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener("click", () => {
    plusButton.classList.add("hidden");
    minusButtons[index].classList.remove("hidden");
    answers[index].classList.remove("hidden");
  });
});

minusButtons.forEach((minusButton, index) => {
  minusButton.addEventListener("click", () => {
    minusButton.classList.add("hidden");
    plusButtons[index].classList.remove("hidden");
    answers[index].classList.add("hidden");
  });
});
