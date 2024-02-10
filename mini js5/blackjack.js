let blackjack ={
    'you':{'scoreSpan':'#yourscore', 'div':'#yourbox', 'score':0},
    'bot':{'scoreSpan':'#botscore', 'div':'#botbox', 'score':0},
    'deck':['2','3','4','5','6','7','8','9','A','J','K','Q'],
    'score':{'2': 2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'A':[1,11],'J':10,'K':10,'Q':10},
    "wins":0,
    "losses":0,
    "draw":0,
    "standlgc":false,
    "deallgc":false,
}

console.log(blackjack)

const you = blackjack['you'];
console.log(you['div']);
const bot = blackjack['bot'];

const cards = blackjack['deck'];



document.querySelector('#hitButton').addEventListener('click', hitbutton);
document.querySelector('#standButton').addEventListener('click', botturn);
document.querySelector('#dealButton').addEventListener('click', dealbutton);

const hitsound = new Audio('sounds/swish.m4a');
const winsound = new Audio('sounds/cash.mp3');
const losssound = new Audio('sounds/aww.mp3');



function hitbutton(){
    console.log(blackjack['standlgc']);

if(blackjack['standlgc']==false){

    console.log(blackjack['standlgc']);

    let card = randomcard();
    console.log(card);
    showcard(card, you);
    updatescore(card,you)
    showscore(you);
}
      }


function showcard(card, passuser){
    if(passuser['score']<=21){
        let yourjack=  document.createElement('img');
         yourjack.src=`images/${card}.png`;
        document.querySelector(passuser['div']).appendChild(yourjack);
         hitsound.play();
    }

}

function dealbutton(){
    //   winner();
    // console.log(blackjack)
    console.log("deal button", blackjack['deallgc']);

if(blackjack['deallgc']==true){
    console.log("deal button", blackjack['deallgc']);


    if(true){
    let cardimages = document.querySelector('#yourbox').querySelectorAll('img')
     for(let i=0;i<cardimages.length;i++){
         cardimages[i].remove();
     }

     let botimages = document.querySelector('#botbox').querySelectorAll('img')
     for(let i=0;i<botimages.length;i++){
         botimages[i].remove();
     }
     you['score']=0;
     bot['score']=0;

     document.querySelector('#yourscore').textContent='0';
     document.querySelector('#botscore').textContent='0';
     document.getElementById('result').innerHTML = "lets play"

     blackjack['standlgc']=false;
     blackjack['deallgc']=false;



    }
}
}

function randomcard(){
    let number=Math.floor(Math.random()*12); 
    console.log(number);
    return blackjack['deck'][number];
}

function updatescore(card,activeplayer){
        if(card=='A'){
             if((activeplayer['score']+ blackjack['score'][card][1])<=21){
                 activeplayer['score']+= blackjack['score'][card][1];
             }else{
                activeplayer['score']+= blackjack['score'][card][0];
             }
        }else{
            activeplayer['score']+= blackjack['score'][card];
            }
}

function showscore(activeplayer){
    // document.querySelector(activeplayer['scoreSpan']).textcontent= activeplayer['score'];
// console.log(activeplayer['scoreSpan']);

if(activeplayer['score']>21){
    document.getElementById('yourscore').innerHTML= 'Burst';
}else{
    document.getElementById('yourscore').innerHTML=activeplayer['score'];
    console.log(activeplayer['score']);
}
}

function botturn(){
blackjack['standlgc']=true;
console.log(blackjack['standlgc']);

// blackjack['deallgc']=true;
//         console.log("deal button", blackjack['deallgc']);


    let card = randomcard();
    console.log(card);
    showcard(card, bot);
    updatescore(card,bot)
    showbotscore(bot);

    if((bot['score']>you['score']) || (you['score']== bot['score']) || (you['score']>21&& bot['score']>21) || (you['score']>21&& bot['score']<=21) ){
        winner();
        console.log(blackjack);
        blackjack['deallgc']=true;
        console.log("deal button", blackjack['deallgc']);


    }
    
}

function showbotscore(activeplayer){
    // document.querySelector(activeplayer['scoreSpan']).textcontent= activeplayer['score'];
// console.log(activeplayer['scoreSpan']);

if(activeplayer['score']>21){
    document.getElementById('botscore').innerHTML= 'Burst';
}else{
    document.getElementById('botscore').innerHTML=activeplayer['score'];
    console.log(activeplayer['score']);
}
}

function winner()
{
    if(you['score']<= 21)
    {
        if(you['score']> bot['score']|| bot['score']>21)
        {
            document.getElementById('result').innerHTML = "You Win"
            console.log('you win');
            winsound.play();
            blackjack['wins']++;
            document.getElementById('wins').innerHTML = blackjack['wins'];

        }else if(you['score']< bot['score']){
             document.getElementById('result').innerHTML = "You lost"
            console.log('you lost');
            losssound.play();
            blackjack ['losses']++;
            document.getElementById('losses').innerHTML = blackjack['losses'];

        }else if(you['score']== bot['score']){
            document.getElementById('result').innerHTML = "You draw"
           console.log('you draw');
           blackjack['draw']++;
           document.getElementById('drawn').innerHTML = blackjack['draw'];

         }
    
    }else if(you['score']>21){
        
        if(you['score']>21&& bot['score']<=21){
            document.getElementById('result').innerHTML = "You lost"
            console.log('you lost');
            losssound.play();
            blackjack['losses']++;
            document.getElementById('losses').innerHTML = blackjack['losses'];

        }else if(you['score']>21&& bot['score']>21){
            document.getElementById('result').innerHTML = "You draw"
            console.log('you draw');
            blackjack['draw']++;
            document.getElementById('drawn').innerHTML = blackjack['draw'];

             }
    }
function reset(){
    win=0;
    losses = 0;
    draw =0;
}
}