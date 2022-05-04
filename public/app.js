const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;
  const data = { name, email, number };
  console.log(name, email, number);

  fetch("/pizza", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((beans) => console.log(beans));
});
