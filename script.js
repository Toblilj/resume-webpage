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
    return "NAMN            VERSION      STATUS\nvaultwarden     demo         online\nadguard-home    demo         online\ncaddy           demo         online\nportainer       demo         online\n\n<span class='hint'>→ demo-data, skriv 'help' för fler kommandon</span>";
    break;

    case "uptime":
    return "TJÄNST          UPTIME\nvaultwarden     12d 4h\nadguard-home    12d 4h\ncaddy           31d 9h\nportainer       12d 4h\n\n<span class='hint'>→ demo-data, skriv 'help' för fler kommandon</span>";
    break;
    case "contact":
    return "Email: <a href='mailto:tobias@alctim.xyz'>tobias@alctim.xyz</a>";
    break;

    case "hire":
    return "Öppen för uppdrag från Q2 2026. Skriv 'contact' för att nå mig, eller se kontaktkorten längst ner på sidan.";
    break;

            default:
            return "Ogiltigt kommando";
            break;

}



}

const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");

//Lägger till en ny rad i terminalens historik och scrollar ner till den.
//html: förtroendd text/HTML (kommer bara från infome, aldrig direkt från användaren).
function printLine(html) {
  const line = document.createElement("div");
  line.innerHTML = html;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

//Skriver ut prompten + det du faktiskt skrev in, som ren text (aldrig som HTML)
//eftersom det kommer direkt från användaren.
function printCommandLine(command) {
  const line = document.createElement("div");

  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = "tobbel@home:~$";

  const typedText = document.createElement("span");
  typedText.className = "typed-command";
  typedText.textContent = " " + command;

  line.appendChild(prompt);
  line.appendChild(typedText);
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

//Reply-callback function-this checks user input and if valid replies with infome func.
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const typed = input.value;
    const normalizedTyped = typed.toLowerCase().trim();

    if (normalizedTyped === "clear") {
      output.innerHTML = "";
      input.value = "";
      return;
    }

    const reply = infome(typed);

    printCommandLine(typed);

    if (reply === "Ogiltigt kommando") {
      alert("wrong input");
    } else {
      printLine(reply);
    }

    input.value = "";
  }
});
