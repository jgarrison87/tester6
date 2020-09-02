const form = document.getElementById("modal-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");
const challengeBtn = document.querySelector(".challenge-btn");
const modal = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-close");
const showcaseBtn = document.querySelector(".showcase-btn");
const discountContainer = document.querySelector(".discount-container");
const discountCloseBtn = document.querySelector(".discount-modal-close");

// show modal
// window.addEventListener("scroll", () => {
//   modal.classList.add("bg-active");
// });

challengeBtn.addEventListener("click", () => {
  modal.classList.add("bg-active");
});

showcaseBtn.addEventListener("click", () => {
  discountContainer.classList.add("discount-active");
});

// close modal
modalClose.addEventListener("click", () => {
  modal.classList.remove("bg-active");
});

discountCloseBtn.addEventListener("click", () => {
  discountContainer.classList.remove("discount-active");
});

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formControl error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  checkEmail(email);
  // checkPasswordsMatch(password, password2);
});
