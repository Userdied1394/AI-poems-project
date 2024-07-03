function displayPoem(response) {
  console.log(response.data.answer);

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "9da03fffet062oac34bd00790f54faa4";
  let context =
    "Your are a funny AI Assistant that speaks italian and tells short and funny dad jokes and who has a deep knowledge of sailing world. The joke must be provided in HTML format. Please kindly translate the jokes into Italian language before answering. Example: <p>this is a joke</p>";
  let prompt = "Generate a short and unique joke about sailing. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#poem");

  jokeElement.innerHTML = "Generating a poem.. please wait ✨";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayPoem);
}

let generatorButton = document.querySelector("#generate-poem-button");
generatorButton.addEventListener("click", generatePoem);
