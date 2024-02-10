let allButtons = document.getElementsByTagName("button");
console.log(allButtons)

let newbutton = [];
for(let i=0;i< allButtons.length;i++)
{
    newbutton.push(allButtons[i].classList[1])
}
console.log(allButtons);

function buttoncolor(color){
    if(color.value=== 'red'){
        redfunction(); 
    }else if(color.value=== 'dark'){
       darkfunction();
    }else if(color.value=== 'reset'){
        restfunction();
    }else if(color.value=== 'random'){
        randomfunction();
    }
}

function redfunction()
{
    for(let i=0;i<allButtons.length; i++)
     {
          allButtons[i].classList.remove(allButtons[i].classList[1]);
          allButtons[i].classList.add('btn-danger');
     }
 }

 function darkfunction(){
     for(let i=0;i <allButtons.length;i++)
     {
         allButtons[i].classList.remove(allButtons[i].classList[1]);
         allButtons[i].classList.add('btn-dark');
     }
 }

 function restfunction(){
    for(let i=0;i <allButtons.length;i++)
    {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(newbutton[i]);
    }
}

function randomfunction(){
    let color=['btn-danger', 'btn-dark', 'btn-primary', 'btn-secondary' ]
    
    for(let i=0;i <allButtons.length;i++)
    {
        let number= Math.floor(Math.random()*4);
        console.log(number);
        let newcolor= color[number];
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(newcolor);
    }



    // if(number==1){
    //     redfunction();
    // }
    // else if(number==2){
    //     darkfunction();
    //     }
    //     else if(number==3){
    //         restfunction();
    //     }
}