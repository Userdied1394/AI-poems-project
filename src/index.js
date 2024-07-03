function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "E allora dammi mille baci e cento, <br/> e mille ancora poi, quindi altri cento, <br/> e poi fino a altri mille e ancora cento.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
