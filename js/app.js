'use strict';

let theBuss = [];

let myContainer = document.querySelector('section');
let myButton = document.getElementById('mybutton');
let resultlist = document.querySelector('ul');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let views = 0;
let clicks = 0;
let maxclicks = 25;


function Buss(name,fileExt = 'jpg'){
    this.name = name;
    this.src = `images/${name}.${fileExt}`;
    this.views = 0;
    this.clicks = 0;
    theBuss.push(this);
}

new Buss('bag',);
new Buss('banana',);
new Buss('bathroom',);
new Buss('boots',);
new Buss('breakfast',);
new Buss('bubblegum',);
new Buss('chair',);
new Buss('cthulhu',);
new Buss('dog-duck',);
new Buss('dragon',);
new Buss('pen',);
new Buss('pet-sweep',);
new Buss('scissors',);
new Buss('shark',);
new Buss('sweep','png');
new Buss('tauntaun',);
new Buss('unicorn',);
new Buss('water-can',);
new Buss('wine-glass',);

function random(){
    return Math.floor(Math.random() * (theBuss.length));
}

function renderBuss(){
    let buss1 = theBuss[random()];
    let buss2 = theBuss[random()];
    let buss3 = theBuss[random()];
    let bussnumbers = [];
    bussnumbers.push(buss1,buss2)
    while (buss1 === buss2){
        buss2=theBuss[random()];
    }
    while (bussnumbers.includes(buss3) === true){
        buss3 = theBuss[random()];
    }
    image1.src= buss1.src;
    image1.alt = buss1.name;
    image2.src= buss2.src;
    image2.alt = buss2.name;
    image3.src= buss3.src;
    image3.alt = buss3.name;
    buss1.views++;
    buss2.views++;
    buss3.views++;
    document.getElementById("mybutton").disabled = true;
}

function bussclicker(event){
    event.preventDefault();
    if (event.target === myContainer){
        alert('please select am item');
    }
    clicks++;
    let clickedBuss = event.target.alt;
    for (let i = 0; i < theBuss.length; i++){
        if (clickedBuss === theBuss[i].name){
            theBuss[i].clicks++;
        }
    }
    renderBuss();
    if (clicks === maxclicks){
        document.getElementById("mybutton").disabled = false;
        myContainer.removeEventListener('click', bussclicker);
    } 
}
console.log(theBuss);



function results(event){
    event.preventDefault();
    for(let i = 0; i < theBuss.length; i++){
        let textcontent = `${theBuss[i].name} had ${theBuss[i].clicks} votes and was seen ${theBuss[i].views} times`;
        let newel = document.createElement('li')
        newel.textContent = textcontent;
        resultlist.appendChild(newel);
        }
        
    }


myContainer.addEventListener('click', bussclicker);
myButton.addEventListener('click', results);




renderBuss();