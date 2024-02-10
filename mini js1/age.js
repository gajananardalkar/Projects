function Age(){
  let birthyear=  prompt('Enter your birth year');
//   birthyear= parseInt(birthyear)
//   console.log(typeof birthyear);
  let days = (2020 - birthyear)*365 ;
//   console.log(typeof days);
//   console.log(days);
let h1 = document.createElement('h1');
let text = document.createTextNode('You are ' + days + ' days old');
h1.setAttribute('id','Age');
h1.appendChild(text);
document.getElementById('flex-box-result').appendChild(h1);
}

function remove(){
    document.getElementById('Age').remove();
}