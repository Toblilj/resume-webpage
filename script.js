function infome (whoamI) {
    if(whoamI=="who am i?"){
        
        return "Tobias Lilja";
    } 
    else{
        return "Ogiltigt kommand"; 
    }

}

const input=document.getElementById("terminalInput");
const output=documet.getElementById("textoutput");

function  getEvent (event) {
   
    if(terminalInput ==whoamI){
        return terminalInput;
    } else
        alert("Wrong input");



}


// input.addEventListener("keydown", function (event));

// if (event.key=="Enter"){
    
// return whoamI;

// }