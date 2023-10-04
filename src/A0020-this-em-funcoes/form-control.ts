import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

const submitEvent = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) {
    // form.submit()
    console.log("Formulário enviado com sucesso!");
    cleanFields();
  }
};
form.addEventListener("submit", submitEvent);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessege(input, "Campo não pode ficar vazio");
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessege(input, "Email inválido!");
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessege(password, "As senhas precisam ser iguais!");
    showErrorMessege(password2, "As senhas precisam ser iguais!");
  }
}
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessege(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessege = formFields.querySelector(
    ".error-message",
  ) as HTMLSpanElement;
  errorMessege.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function cleanFields(): void {
  const inputList = form.querySelectorAll("input");
  inputList.forEach((input) => (input.value = ""));
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;

  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
