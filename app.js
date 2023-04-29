"use strict";
//* validate the email
const firstName = document.querySelector("#firstname");
const nameError = document.querySelector("#name-error");
const nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const email = document.querySelector("#email");
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailError = document.querySelector("#email-error");
const button = document.querySelector("#submit");
firstName.addEventListener("blur", (e) => {
    const givenName = firstName.value.trim();
    if (!nameRegEx.test(givenName)) {
        nameError.textContent = "Name is valid.please enter a valid name";
        nameError.style.color = "red";
        e.preventDefault();
    }
    else {
        nameError.textContent = "Name is valid";
        nameError.style.color = "green";
    }
});
email.addEventListener("blur", (e) => {
    const givenEmail = email.value.trim();
    if (!emailRegEx.test(givenEmail)) {
        button.disabled = true;
        emailError.textContent = "Email is invalid.please enter a valid email";
        emailError.style.color = "red";
        e.preventDefault();
    }
    else {
        button.disabled = false;
        emailError.textContent = "Email is valid";
        emailError.style.color = "green";
    }
});
