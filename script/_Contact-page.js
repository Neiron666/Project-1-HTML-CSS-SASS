const NAME_FIELD = document.getElementById("name");
const NAME_ERROR_FIELD = document.getElementById("create-name-error");

const LAST_NAME_FIELD = document.getElementById("last-name");
const LAST_NAME_ERROR_FIELD = document.getElementById("create-lastName-error");

const EMAIL_FIELD = document.getElementById("email");
const EMAIL_ERROR_FIELD = document.getElementById("create-email-error");

const SUBMIT_BTN = document.getElementById("submit-btn");
const SUBMIT_BTN_ERROR = document.getElementById("create-submit-btn-error");

// class UserFieldChecker {
//   data;
//   errors = [];
//   constructor(data) {
//     this.data = data;
//   }
//   string() {
//     if (typeof this.data !== "string" || !this.data.length)
//       this.errors.push("The data you enter is not a valid string");
//     console.log(this.errors);
//     return this;
//   }
//   number() {
//     if (typeof +this.data !== "number" || this.data <= 0)
//       this.errors.push("The data you enter is not a number");
//     return this;
//   }
// }

// const validator = () => {};

// const FieldChecker = new UserFieldChecker();

const NameChecker = (data) => {
  const errors = [];
  const regex = /^[a-zA-Z]{2,}$/g;
  const check = regex.test(data);

  if (!check)
    errors.push(
      "The name must be at least 2 characters long and contain only letters"
    );
  return errors.join("");
};

const EmailChecker = (data) => {
  const errors = [];
  const emailRegex = /.+@.+\..{2,}/g;
  const emailChecker = emailRegex.test(data);
  if (!emailChecker) errors.push("Please enter a valid email");
  return errors.join("");
};

// const handleSubmit = () => {
//   if (
//     NAME_ERROR_FIELD.value === undefined ||
//     LAST_NAME_ERROR_FIELD.value === undefined ||
//     EMAIL_ERROR_FIELD.value === undefined ||
//     (NAME_FIELD.value.length > 2 &&
//       LAST_NAME_FIELD.value.length > 2 &&
//       EMAIL_FIELD.value.length > 2)
//   ) {
//     return (SUBMIT_BTN_ERROR.innerHTML = "All fields must be filled");
//   }
//   return (SUBMIT_BTN.disabled = false);
// };
// console.log(NAME_ERROR_FIELD.value === undefined);
// handleSubmit();

const name_field_checker = NAME_FIELD.addEventListener(
  "input",
  () => (NAME_ERROR_FIELD.innerHTML = NameChecker(NAME_FIELD.value))
);

LAST_NAME_FIELD.addEventListener(
  "input",
  () => (LAST_NAME_ERROR_FIELD.innerHTML = NameChecker(LAST_NAME_FIELD.value))
);

EMAIL_FIELD.addEventListener(
  "input",
  () => (EMAIL_ERROR_FIELD.innerHTML = EmailChecker(EMAIL_FIELD.value))
);

SUBMIT_BTN.addEventListener("click", () => handleSubmit());

// document.getElementById("submit-btn").disabled = false;
