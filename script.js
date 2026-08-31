/* Callback functions for terminal--------*/
function infome (command) {
    if(command == "who am i?"){
        
        return "Tobias Lilja";
    } 
    else if (command == "help"){
        const helpArr = ["Who am i?" , "ls" , "uptime" , "contact" , "hire" , "clear" ];
       return "hjälp text här";
        
    } else {
        return "Ogiltigt kommand";
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
      output.textContent = reply;
    }

    input.value = "";
  }
});
