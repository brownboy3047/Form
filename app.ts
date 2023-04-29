//* validate the email
const firstName = document.querySelector("#firstname") as HTMLInputElement;
const nameError = document.querySelector("#name-error") as HTMLElement;
const nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const email = document.querySelector("#email") as HTMLInputElement;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailError = document.querySelector("#email-error") as HTMLElement;
const button = document.querySelector("#submit") as HTMLInputElement;

firstName.addEventListener("blur", (e) => {
  const givenName: string = firstName.value.trim();

  if (!nameRegEx.test(givenName)) {
    nameError.textContent = "Name is valid.please enter a valid name";
    nameError.style.color = "red";
    e.preventDefault();
  } else {
    nameError.textContent = "Name is valid";
    nameError.style.color = "green";
  }
});

email.addEventListener("blur", (e) => {
  const givenEmail: string = email.value.trim();

  if (!emailRegEx.test(givenEmail)) {
    button.disabled = true;
    emailError.textContent = "Email is invalid.please enter a valid email";
    emailError.style.color = "red";
    e.preventDefault();
  } else {
    button.disabled = false;
    emailError.textContent = "Email is valid";
    emailError.style.color = "green";
  }
});
