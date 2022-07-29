# Frontend Mentor - Intro Component with Sign Up Form Solution

This is a solution to the [Intro Component with Sign up Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

#### Screensize 1440px - Desktop

![Desktop](images/Desktop.gif)

#### Screensize 375px - Mobile

![Mobile](images/Mobile.gif)

### Links

- View my Solution on [Frontend Mentor]()
- View the Live Site [here]()

## My process

- HTML semantics
- Importing Google Fonts
- Set variables
- JavaScript
- Reset default settings
- Styles (Mobile First)
- Media Queries

### Built with

- JavaScript
- Semantic HTML5 markup
- SASS custom properties
- CSS Grid
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - For Fonts

### What I learned

```js
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
```

## Author

- Frontend Mentor - [@kxnzx](https://www.frontendmentor.io/profile/kxnzx)
