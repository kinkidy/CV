//verifying for email address

var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, thanks");
  } else {
    email.setCustomValidity("");
  }
});

// a pop upmessage after submitting
document.getElementById("getInTouch").addEventListener("click", function() {
  alert("Thank you for your message!!!");
});
