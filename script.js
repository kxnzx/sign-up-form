// This tells the browser to pay attention to the following element:
const form = document.getElementById("form");
// This tells the browser to prevent the form from submitting by default:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // This tells the browser to pay attention to the following elements:
  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  const password = form["password"].value;
  // When the input is empty, do this:
  if (firstName === "") {
    addError("firstName", "First Name cannot be empty");
    // When the input is valid, do this:
  } else {
    removeError("firstName");
  }
  // When the input is empty, do this:
  if (lastName === "") {
    addError("lastName", "Last Name cannot be empty");
    // When the input is valid, do this:
  } else {
    removeError("lastName");
  }
  // When the input is empty do this:
  if (email === "") {
    addError("email", "Email cannot be empty");
    // When the input is invalid check REGEX and do this:
  } else if (!isValid(email)) {
    addError("email", "Looks like this is not an email");
    // When the input is valid, do this:
  } else {
    removeError("email");
  }
  // When the input is empty, do this:
  if (password === "") {
    addError("password", "Password cannot be empty");
    // When the input is valid, do this:
  } else {
    removeError("password");
  }
});
// Add Error Message & Icon
function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
}
// Remove Error Message & Icon
function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

// REGEX = Regular Expression
function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
