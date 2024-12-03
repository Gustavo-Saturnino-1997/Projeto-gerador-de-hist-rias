const characters = ["um dragão falante", "uma princesa corajosa", "um cientista louco"];
const settings = ["em um castelo voador", "em uma ilha deserta", "em uma estação espacial"];
const actions = ["descobriu um segredo sobre o universo", "lutou contra um exército de robôs", "encontrou um mapa do tesouro"];

const storySection = document.getElementById("story");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    const story = `${randomCharacter}, ${randomSetting}, ${randomAction}.`;
    storySection.innerHTML = `<p>${story}</p>`;
});