// variables
const messageContainer = document.querySelector("#message");
const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

// form validation function
function validateForm() {
  event.preventDefault();

  try {
    if (checkLength(name.value, 1)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }

    if (checkLength(subject.value, 9)) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }

    if (checkLength(address.value, 24)) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }

    if (checkEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    console.dir("The form has been submitted");
  } catch (error) {
    console.dir(error);

    const message = createMessage("error", "An error has occurred");

    messageContainer.innerHTML = message;
  }
}

// form submission function
function submitForm(event) {
  event.preventDefault();

  if (
    checkLength(name.value, 1) &&
    checkLength(subject.value, 9) &&
    checkEmail(email.value) &&
    checkLength(address.value, 24)
  ) {
    messageContainer.innerHTML = `<h2 class="success">Your form has been submitted.</h2>`;
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

// checkLength function
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// checkEmail function
function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
