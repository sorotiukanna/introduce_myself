window.addEventListener('load', function() {

// let path = document.querySelector('#line14');
// console.log(path.getTotalLength());

let homeBut = document.getElementById('home');
let aboutMeBut = document.getElementById('aboutMe');
let worksBut = document.getElementById('myWorks');
let contactBut = document.getElementById('contactMe');
let fst = document.getElementById('first');
let snd = document.getElementById('second');
let trd = document.getElementById('third');
let fth = document.getElementById('fourth');

let array = [homeBut, aboutMeBut, worksBut, contactBut];
let arrPanel = [fst, snd, trd, fth]

function menuToggleOne(){
    for (let i = 0; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active');
            homeBut.classList.add('active');
        }
    }
    for (let j = 0; j < arrPanel.length; j++){
        if(arrPanel[j].style.display="block"){
            arrPanel[j].style.display="none";
            fst.style.display="block";
        } else{
            fst.style.display="none";
        }
    }
}
function menuToggleTwo(){
    for (let i = 0; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active');
            aboutMeBut.classList.add('active');
        } 
    }
    for (let j = 0; j < arrPanel.length; j++){
        if(arrPanel[j].style.display="block"){
            arrPanel[j].style.display="none";
            snd.style.display="block";
        } else{
            snd.style.display="none";
        }
    }
}
function menuToggleThree(){
    for (let i = 0; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active');
            worksBut.classList.add('active');
        } 
    }
    for (let j = 0; j < arrPanel.length; j++){
        if(arrPanel[j].style.display="block"){
            arrPanel[j].style.display="none";
            trd.style.display="block";
        } else{
            trd.style.display="none";
        }
    }
}
function menuToggleFour(){
    for (let i = 0; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active');
            contactBut.classList.add('active');
        } 
    }
    for (let j = 0; j < arrPanel.length; j++){
        if(arrPanel[j].style.display="block"){
            arrPanel[j].style.display="none";
            fth.style.display="block";
        } else{
            fth.style.display="none";
        }
    }
}



//-----------------------------------------------------------------------------------------------------------------------------------//
homeBut.addEventListener('click', menuToggleOne);
aboutMeBut.addEventListener('click', menuToggleTwo);
worksBut.addEventListener('click', menuToggleThree);
contactBut.addEventListener('click', menuToggleFour);
})