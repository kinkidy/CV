var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, thanks");
  } else {
    email.setCustomValidity("");
  }
});
