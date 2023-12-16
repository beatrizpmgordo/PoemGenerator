function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "No tempo em que festejavam o dia dos meus anos,",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let formElement = document.querySelector("#generator-form");
formElement.addEventListener("submit", generatePoem);
