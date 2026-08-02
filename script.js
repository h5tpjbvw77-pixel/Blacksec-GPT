function send(){
let msg=document.getElementById("message").value;

let chat=document.getElementById("chat");

chat.innerHTML += 
"<p>You: "+msg+"</p>";

chat.innerHTML +=
"<p class='ai'>AI: I received your message 🤖</p>";

document.getElementById("message").value="";

}


function settings(){

alert("Settings coming soon ⚙️");

}