const projects = [
  {
    name: "Random-Color-Generator",
    bug: "De kleuren HEX code die ik p het scherm zie moet uit 6 characters bestaan in plaats van 8.",
  },
  {
    name: "Analog-clock",
    bug: "De seconde wijzer is op tilt geslagen!",
  },
  {
    name: "Tip-Calculator",
    bug: "Ik kan niet kiezen voor rekening delen door 1 persoon (of 3.. of 5 etc..)",
  },
  {
    name: "BMI-Calculator",
    bug: "De kleur van de BMI cirkel klopt niet als er 'obese' uitkomt",
  },
  {
    name: "Speed-Reader",
    bug: "Elke keer als ik op start klik wordt de tekst sneller voorgelezen?",
  },  
  {
    name: "Password-Generator",
    bug: "Als ik de checkbox voor speciale characters aanvink, zie ik deze 4 characters nooit in mijn gegenereerde wachtwoorden,maar die moeten dus wel worden gebruikt: ASCII codes 123,124,125,126 oftewel { | } ~ ",
  },
  {
    name: "Quotes-Generator",
    bug: "Onder de quote zou de auteur moeten staan, ik zie nu alleen maar 'undefined'",
  },
  {
    name: "HTML-Canvas",
    bug: "De bedoeling is dat er alleen maar wordt getekend als de muis/trackpad is ingedrukt. Dus moet stoppen met tekenen als je de muis loslaat",
  },
  {
    name: "Age-Calculator",
    bug: "Er klopt iets niet, de juiste leeftijd wordt niet weergegeven.",
  },
  {
    name: "Form-Validation",
    bug: "Als mijn 2de wachtwoord niet gelijk is aan de eerste zie ik dat niet in een foutmelding.",
  },
  {
    name: "Todo-List",
    bug: "Als ik een item op mijn todo lijst op compleet zet (door op het vinkje te klikken) dan komt er een lijn onder de item tekst te staan. Dit moet een streep door de tekst zijn.",
  },
  {
    name: "Currency-Converter",
    bug: "Als ik converteer naar Canadese dollars, dan krijg ik de waarde in euro's ?",
  },
  {
    name: "Superhero-Card",
    bug: "Durability en speed zijn altijd gelijk?",
  },
];
const list = document.querySelector(".list");

//sort alphabetically
projects.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

updateUI(projects);

function updateUI(projects) {
  projects.forEach(({ name, bug }) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("type", "1");

    listItem.innerHTML = `
            
            <a href="./${name}/index.html" class="project-name">
                ${projectNameFormater(name)}
            </a>
            <div class="project-bug">
              ${bug}
            </div>
        `;
    list.appendChild(listItem);
  });
}

function projectNameFormater(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
