function getHumanChoice(){
    const humanChoice = prompt("choose (rock, paper, scissors)");
    return humanChoice.toLowerCase();
}

function getComputerChoice(){
    const options = [ "rock", "paper" , "scissors"];
    let choiceRandom = Math.floor(Math.random()*3);
    return options[choiceRandom];
    
}



let scoreHuman =0;
let scorePc = 0;

function playRound(humanSelected , computerSelected){
    if(humanSelected == computerSelected){
        console.log("Empate")
        console.log("PC:"+computerSelected + " Human: "+ humanSelected);
// human wins
    }else if(
        (humanSelected =='rock' && computerSelected== 'scissors') ||
        (humanSelected =='scissors' && computerSelected== 'paper')||
        (humanSelected =='paper' && computerSelected== 'rock')
    ){
        scoreHuman++;
        console.log("Human Wins: " +scoreHuman+ "Points");
        console.log("PC:"+computerSelected + " Human: "+ humanSelected);
        
    }else{
        scorePc++;
        console.log("Pc Wins :" +scorePc+ "Points")
        console.log("PC:"+computerSelected + " Human: "+ humanSelected);
        
    }

}


while(scoreHuman <5 || scorePc <5){
    let humanSelected = getHumanChoice();
    let computerSelected = getComputerChoice();
    playRound(humanSelected, computerSelected);

}
if(scoreHuman ===5){
    console.log('Human Wins');
}else{
    console.log('PC wins')
}