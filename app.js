copy = document.querySelector("#copy-number");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText("+1 437 258 7918");
  alert("Phone number Copied");
});

radioBox = document.querySelector("#other");
radioInput = document.querySelector("#other-input");

radioJobSchool = document.querySelectorAll("#job-school");

radioBox.addEventListener("click", () => {
  radioInput.classList.remove("other-none");
  radioInput.classList.add("other-block");
});

radioJobSchool.forEach((element) => {
  element.addEventListener("click", () => {
    radioInput.classList.remove("other-block");
    radioInput.classList.add("other-none");
  });
});

nav = document.querySelector(".navbar");
hamBurger = document.querySelector(".hamburger");
var navActive = false;

hamBurger.addEventListener("click", () => {
  if (navActive == false) {
    nav.classList.remove("notactive");
    navActive = true;
  } else if (navActive == true) {
    nav.classList.add("notactive");
    navActive = false;
  }
});

form = document.querySelector("#form");
name = document.querySelector("#name");
email = document.querySelector("#email");
streetAddress = document.querySelector("#street-address");
city = document.querySelector("#city");
province = document.querySelector("#province");
postalCode = document.querySelector("#postal-code");
jobSchool = document.querySelector("#job-school");
other = document.querySelector("#other-input");

let messages = [];
const errorElement = document.getElementById("error");

function nullChecker(element, elementName) {
  result = true;
  if (element.value === "" || element.value == null) {
    messages.push(`${elementName} is required`);
    result = false;
  }

  return result;
}

function areAlphabets(element, message) {
  let validRegex = /^[A-Za-z\s]+$/;
  if (!element.value.match(validRegex)) {
    messages.push(message);
  }
}

function nameValidation() {
  const name = document.getElementById("name");
  if (nullChecker(name, "Name")) {
    areAlphabets(name, "Invalid Name / Name should be alphabetical");
  }
}

function emailValidation() {
  const email = document.getElementById("email");
  if (nullChecker(email, "Email")) {
    if (!email.value.includes("@")) {
      messages.push("Invalid Email");
    }
  }
}

function addressValidation() {
  const address = document.getElementById("street-address");
  if (nullChecker(address, "Address") && address.value.includes(" ")) {
    let validRegex = /^[0-9a-zA-Z\s,.'-]*$/;
    if (!address.value.match(validRegex)) {
      messages.push("Invalid Address");
    }
  }
}

function cityValidation() {
  const city = document.getElementById("city");
  if (nullChecker(city, "City")) {
    areAlphabets(
      city,
      "Invalid City / City should be alphabetical and should not contain numbers"
    );
  }
}

function validatePostalCode() {
  let postalCode = document.getElementById("postal-code");
  if (nullChecker(postalCode, "Postal Code")) {
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!postalCode.value.match(validRegex)) {
      messages.push("Invalid Postal Code");
    }
  }
}

function validateMessage() {
  const message = document.getElementById("message");
  if (nullChecker(message, "Message")) {
    if (address.value.length < 10) {
      messages.push("Proper message is required");
    }
  }
}

form.addEventListener("submit", (e) => {
  messages = [];

  nameValidation();
  emailValidation();
  addressValidation();
  cityValidation();
  validatePostalCode();
  validateMessage();

  if (messages.length > 0) {
    e.preventDefault();
    alert(messages.join("\r\n"));
  }
});

form.addEventListener("reset", (e) => {
  messages = [];
});
