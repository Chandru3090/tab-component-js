const content = [
  [
    "JavaScript is a high-level, often just-in-time compiled language that has become a standard for creating interactive web pages.",
    "It is a multi-paradigm language, supporting event-driven, functional, and imperative programming styles.",
    "JavaScript is an essential part of web applications, enabling dynamic content and user interaction.",
  ],
  [
    "JavaScript is a versatile language.",
    "It is widely used for web development.",
    "JavaScript can be used on both the client-side and server-side.",
  ],
  ["MDN Web Docs", "JavaScript.info", "Eloquent JavaScript"],
];

const tabContent = document.getElementById("content");
const buttons = document.querySelectorAll("[data-tab]");

buttons.forEach((btn) => btn.addEventListener("click", handleClick));

function populateContent(index) {
  tabContent.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("list-disc", "pl-5", "space-y-2");
  content[index].forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  tabContent.appendChild(ul);
}

(function init() {
  highlightButton(document.querySelector("[data-tab='0']"));
  populateContent(0);
})();

function handleClick(event) {
  const index = parseInt(event.target.dataset.tab);
  highlightButton(event.target);
  populateContent(index);
}

function highlightButton(activeBtn) {
  buttons.forEach((btn) => btn.classList.toggle("active", btn === activeBtn));
}
