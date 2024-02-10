function SPSgame(yourChoice){
    console.log(yourChoice);

   let  pcChoice, humanChoice ;
   humanChoice = yourChoice.id;

   pcChoice= numberChoice(randomchoice());
   console.log('computer choice =',pcChoice);

   result = winner(humanChoice,pcChoice );
   console.log('result is',result);

   message = final(result);
   console.log(message);

   SPSfinal(yourChoice, pcChoice, message)
}
function randomchoice(){
    return Math.floor(Math.random()*3) ;
}

function numberChoice(number){
    return ['paper','rock','scissor'][number];
}

function winner(yourChoice, pcChoice){
    let winningProb = {
        'rock': {"scissor": 1, "rock": 0.5 , "paper":0 } ,
        'paper': {"scissor": 0, "rock": 1 , "paper":0.5  } ,
        'scissor': {"scissor": 0.5, "rock": 0 , "paper":1 } ,
    }
    let yourScore = winningProb[yourChoice][pcChoice];
    console.log('your score is',yourScore);
    console.log(typeof yourScore);
    
    let computerScore = winningProb[pcChoice][yourChoice];
    console.log('computer score is',computerScore)
    console.log(typeof computerScore);


    return [yourScore,computerScore];
}

function final(yourScore) {

    if(yourScore[0] == 0)
    {
        return{ 'message': 'you lost','color':'red'};
    }
    else if(yourScore[1] == 0.5)
    {
        return{'message': 'Tied', 'color': 'black'};
    }
     else{
        return {'message': 'you won','color':'green'};
     }
}

function SPSfinal(yourChoice, Botchoice, finalmessage)
{
    let imagedata ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();


    let yourdiv = document.createElement('div');
    let winmessage = document.createElement('div');
    let Botdiv = document.createElement('div');

    yourdiv.innerHTML  = "<img src='" + imagedata[yourChoice] +"' height=150 width=150>"
    winmessage.innerHTML ="<h2 style='color: "+ finalmessage['color']+" '>" + finalmessage['message'] + "</h2>"
    Botdiv.innerHTML  = "<img src='" + imagedata[Botchoice] +"' height=150 width=150>"

    document.getElementById('SPS').appendChild(yourdiv);
    document.getElementById('SPS').appendChild(winmessage);
    document.getElementById('SPS').appendChild(Botdiv);


}

