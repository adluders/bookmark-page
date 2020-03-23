const UIElements = {
  tabs: ".features-tab",
  titles: ".features-tab__title",
  contents: ".features-tab__content",
  questions: ".question-header",
  answers: ".answer",
  email: "#email",
  form: ".contact-form"
};

const tabs = document.querySelectorAll(UIElements.tabs);
const titles = document.querySelectorAll(UIElements.titles);
const contents = document.querySelectorAll(UIElements.contents);
const questions = document.querySelectorAll(UIElements.questions);
const answers = document.querySelectorAll(UIElements.answers);
const email = document.querySelector(UIElements.email);
const form = document.querySelector(UIElements.form);

console.log(form);

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
  console.log(e);
}

function hideContents() {
  contents.forEach(content => (content.style.display = "none"));
}

function removeActive() {
  titles.forEach(title => title.classList.remove("active-tab"));
}

// Event Listeners
tabs.forEach(tab => tab.addEventListener("click", showContent));

questions.forEach(question =>
  question.addEventListener("click", displayAnswer)
);

form.addEventListener("submit", validateEmail);
