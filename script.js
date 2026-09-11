/* Callback functions for terminal--------*/
function infome (command) {

const normalized = command.toLowerCase().trim();

switch (normalized){

case "who am i?":
    return "Tobias Lilja · 32 · Sverige\nJunior mjukvarutestare → aspirerande systemutvecklare";
    break;
case "help":
 const helpArr = ["who am i?" , "ls" , "uptime" , "contact" , "hire" , "clear"];

 return helpArr.join("\n");
break;
    case "ls":
    return "NAMN            VERSION      STATUS\nvaultwarden     demo         online\nadguard-home    demo         online\ncaddy           demo         online\nportainer       demo         online\n\n(demo-data, kopplas till en riktig read-only status-API senare)";
    break;

    case "uptime":
    return "Servern har varit igång sen jag startade lära mig drifta den — pågående projekt, se 'Homelabb' i erfarenhetslistan.";
    break;
    case "contact":
    return "Email: <a href='mailto:tobias@alctim.xyz'>tobias@alctim.xyz</a>";
    break;

    case "hire":
    return "Öppen för uppdrag från Q2 2026. Skriv 'contact' för att nå mig, eller se kontaktkorten längst ner på sidan.";
    break;

        case "clear":
        return "";
        break;
            default:
            return "Ogiltigt kommando";
            break;

}



}

const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");


//Reply-callback function-this checks user input and if valid replies with infome func.
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const reply = infome(input.value);

    if (reply === "Ogiltigt kommando") {
      alert("wrong input");
    } else {
      output.innerHTML = reply;
    }

    input.value = "";
  }
});
