let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userchoicepara = document.getElementById("user-score");
const compchoicepara = document.getElementById("comp-score");



 choices.forEach((choice)  => {
    choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id");
     playgame(userchoice);
    })
 })
  function playgame(userchoice){
    const compchoice = gencompchoice();
if(userchoice===compchoice){
  draw();
}else{
  let userwin = true;
 if(userchoice ==="rock") {
userwin = compchoice==="paper"?false : true;
}else if(userchoice==="paper"){
userwin = compchoice === "scissors" ?false : true;
}else{
  userwin = compchoice === "rock" ? false : true;
}
showwin(userwin);
}
  }
  function gencompchoice(){
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return  options[randidx];
  }
   
function showwin(userwin){
if(userwin){
  userscore++;
  userchoicepara.innerText = userscore;
  msg.innerText ="you win!";
  msg.style.backgroundColor =" green";

}else {
  compscore++;
  compchoicepara.innerText = compscore;
  msg.innerText ="you lose!";
  msg.style.backgroundColor ="red";

}
} 


  function draw(){
    msg.innerText ="game was draw";
  msg.style.backgroundColor ="blue";

  }