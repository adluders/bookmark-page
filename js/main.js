const UIElements = {
  tabs: ".features-tab",
  titles: ".features-tab__title",
  contents: ".features-tab__content",
  questions: ".question-header",
  answers: ".answer"
};

const tabs = document.querySelectorAll(UIElements.tabs);
const titles = document.querySelectorAll(UIElements.titles);
const contents = document.querySelectorAll(UIElements.contents);
const questions = document.querySelectorAll(UIElements.questions);
const answers = document.querySelectorAll(UIElements.answers);

function showContent() {
  removeActive();

  hideContents();

  this.childNodes[1].classList.add("active-tab");

  const messages = document.querySelector(`#${this.id}__content`);

  messages.style.display = "grid";
}

function displayAnswer() {
  hideAnswers();

  const questionAnswer = document.getElementById(`${this.id}__answer`);
  const arrow = this.childNodes[3];

  questionAnswer.style.display = "block";

  arrow.setAttribute("src", "images/icon-arrow-close.svg");
}

function hideContents() {
  contents.forEach(content => (content.style.display = "none"));
}

function removeActive() {
  titles.forEach(title => title.classList.remove("active-tab"));
}

function hideAnswers() {
  answers.forEach(answer => (answer.style.display = "none"));
}

// Event Listeners
tabs.forEach(tab => tab.addEventListener("click", showContent));

questions.forEach(question =>
  question.addEventListener("click", displayAnswer)
);

window.addEventListener("load", hideAnswers);
