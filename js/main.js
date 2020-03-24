const UIElements = {
  tabs: ".features-tab",
  titles: ".features-tab__title",
  contents: ".features-tab__content",
  questions: ".question-header",
  answers: ".answer",
  email: "#email",
  form: ".contact-form",
  invalid: ".invalid-email",
  errorImg: "#email + img",
  togglerOpen: ".toggler",
  togglerClose: ".close-mobile-nav",
  mobileNav: ".mobile-nav"
};

const tabs = document.querySelectorAll(UIElements.tabs),
  titles = document.querySelectorAll(UIElements.titles),
  contents = document.querySelectorAll(UIElements.contents),
  questions = document.querySelectorAll(UIElements.questions),
  answers = document.querySelectorAll(UIElements.answers),
  email = document.querySelector(UIElements.email),
  form = document.querySelector(UIElements.form),
  invalid = document.querySelector(UIElements.invalid),
  errorImg = document.querySelector(UIElements.errorImg),
  togglerOpen = document.querySelector(UIElements.togglerOpen),
  togglerClose = document.querySelector(UIElements.togglerClose),
  mobileNav = document.querySelector(UIElements.mobileNav);

function showContent() {
  removeActive();

  hideContents();

  this.childNodes[1].classList.add("active-tab");

  const messages = document.querySelector(`#${this.id}__content`);

  messages.style.display = "grid";
}

function displayAnswer() {
  const questionAnswer = document.getElementById(`${this.id}__answer`);
  const arrow = this.childNodes[3];

  questionAnswer.classList.toggle("show");

  if (questionAnswer.classList.contains("show")) {
    arrow.setAttribute("src", "images/icon-arrow.svg");
  } else {
    arrow.setAttribute("src", "images/icon-arrow-close.svg");
  }
}

function validateEmail(e) {
  e.preventDefault();
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/;

  if (!re.test(email.value)) {
    errorImg.style.display = "block";
    invalid.style.display = "flex";
  } else {
    errorImg.style.display = "none";
    invalid.style.display = "none";
  }
}

function hideContents() {
  contents.forEach(content => (content.style.display = "none"));
}

function removeActive() {
  titles.forEach(title => title.classList.remove("active-tab"));
}

function openMenu() {
  mobileNav.style.display = "block";
}

function closeMenu() {
  mobileNav.style.display = "none";
}

// Event Listeners
tabs.forEach(tab => tab.addEventListener("click", showContent));

questions.forEach(question =>
  question.addEventListener("click", displayAnswer)
);

form.addEventListener("submit", validateEmail);

togglerOpen.addEventListener("click", openMenu);

togglerClose.addEventListener("click", closeMenu);
