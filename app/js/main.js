window.addEventListener('load', function() {

// let path = document.querySelector('#line14');
// console.log(path.getTotalLength());

let homeBut = document.getElementById('home');
let aboutMeBut = document.getElementById('aboutMe');
let worksBut = document.getElementById('myWorks');
let contactBut = document.getElementById('contactMe');
// let fst = document.getElementById('first');
// let snd = document.getElementById('second');
// let trd = document.getElementById('third');
// let fth = document.getElementById('fourth');

let actIcon = document.getElementById('home');
let actPanel = document.getElementById('first');

function menuToggle(n, m){   

    actIcon.classList.toggle('active');
    actPanel.classList.toggle('active-panel');

    let x = document.getElementById(m);
    let y = document.getElementById(n);

    x.classList.toggle('active');
    actIcon = document.getElementById(m);
    
    y.classList.toggle('active-panel');
    actPanel = document.getElementById(n);

}


//-----------------------------------------------------------------------------------------------------------------------------------//
homeBut.addEventListener('click', function(){menuToggle("first", "home")});
aboutMeBut.addEventListener('click', function(){menuToggle("second", "aboutMe")});
worksBut.addEventListener('click', function(){menuToggle("third", "myWorks")});
contactBut.addEventListener('click', function(){menuToggle("fourth", "contactMe")});




})