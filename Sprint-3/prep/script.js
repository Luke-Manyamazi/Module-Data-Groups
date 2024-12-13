const textarea = document.querySelector("textarea");

updateCharacterLimit();

function updateCharacterLimit() {
    const remainingCharacters = textarea.maxLength - textarea.value.length;

    const charactersLeftP = document.querySelector("#character-limit-info");
    charactersLeftP.textContent = `You have ${remainingCharacters} characters remaining`;

  }
  
  textarea.addEventListener("keyup", updateCharacterLimit);
