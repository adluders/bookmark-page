const UIElements = {
  tabs: ".features-tab",
  titles: ".features-tab__title",
  contents: ".features-tab__content"
};

const tabs = document.querySelectorAll(UIElements.tabs);
const titles = document.querySelectorAll(UIElements.titles);
const contents = document.querySelectorAll(UIElements.contents);

function showContent() {
  removeActive();

  hideContents();

  this.childNodes[1].classList.add("active-tab");

  const messages = document.querySelector(`#${this.id}__content`);

  messages.style.display = "grid";
}

function hideContents() {
  contents.forEach(content => (content.style.display = "none"));
}

function removeActive() {
  titles.forEach(title => title.classList.remove("active-tab"));
}

// console.log(tabs);

// console.log(contents);

// Event Listeners
tabs.forEach(tab => tab.addEventListener("click", showContent));
