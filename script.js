/* Callback functions for terminal--------*/
function infome (command) {
    if(command == "who am i?"){
        
        return "Tobias Lilja";
    } 
     if (command == "help"){
        const helpArr = ["Who am i?" , "ls" , "uptime" , "contact" , "hire" , "clear" ];
       return helpArr.join("\n");
        
    } if (command=="ls"){
        return "Kommer snart";
    }
    if (command=="uptime"){
        return "Kommer snart";
    }
    if (command=="contact"){
        return "Kommer snart";
    }
    if (command=="hire"){
        return "Kommer snart";
    }
    if (command=="clear"){
        return "";
    }else {
        return "Ogiltigt kommand";
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
      output.textContent = reply;
    }

    input.value = "";
  }
});
