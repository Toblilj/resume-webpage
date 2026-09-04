/* Callback functions for terminal--------*/
function infome (command) {

switch (command){

case "Who am i?":
    return "Tobias lilja";
    break;
case "help":
 const helpArr = ["Who am i?" , "ls" , "uptime" , "contact" , "hire" , "clear" ];
       
 return helpArr.join("\n");
break;
    case "ls":

    return "Kommer snart";
    break;

    case "uptiime":

    return "Kommer snart";
    break;
    case "contact":

    return "Email: <a href='mailto:tobbel93@hotmail.com'>tobbel93@hotmail.com</a>";
    break;

    case "hire":
    return "Kommer snart";

        case "clear":
        return "";
        break;
            default:
            return "Ogilitig input";
            break;

}



} 

const input=document.getElementById("terminalInput");
const output=document.getElementById("terminalOutput");


//Reply-callback function-this checks user input and if valid replies with infome func.
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    const reply = infome(input.value);

    if (reply === "Ogiltigt kommand") {
      alert("wrong input");
    } else {
      output.innerHTML = reply;
    }

    input.value = "";
  }
});
