'use strict';

let theBuss = [];

let myContainer = document.querySelector('section');
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

let bussnumbers2 = [];
function renderBuss2(){
    while(bussnumbers2.length < 6){
        let busnum = theBuss[random()];
        if (!bussnumbers2.includes(busnum)){
            bussnumbers2.push(busnum);
        }
    }
    bussnumbers2.shift();
    bussnumbers2.shift();
    bussnumbers2.shift();
    image1.src= bussnumbers2[0].src;
    image1.alt = bussnumbers2[0].name;
    image2.src= bussnumbers2[1].src;
    image2.alt = bussnumbers2[1].name;
    image3.src= bussnumbers2[2].src;
    image3.alt = bussnumbers2[2].name;
    bussnumbers2[0].views++;
    bussnumbers2[1].views++;
    bussnumbers2[2].views++;
}
renderBuss2();



// function renderBuss(){
//     let buss1 = theBuss[random()];
//     let buss2 = theBuss[random()];
//     let buss3 = theBuss[random()];
//     let bussnumbers = [];
 
//     while (buss1 === buss2){
//         buss2=theBuss[random()];
//     }
//     bussnumbers.push(buss1,buss2)
//     while (bussnumbers.includes(buss3) === true){
//         buss3 = theBuss[random()];
//     }
    // bussnumbers.push(buss3);
    // console.log(bussnumbers)




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
    renderBuss2();
    if (clicks === maxclicks){
        myContainer.removeEventListener('click', bussclicker);
        rendtable();
    } 
}
console.log(theBuss);




// function results(event){
//     event.preventDefault();
//     for(let i = 0; i < theBuss.length; i++){
//         let textcontent = `${theBuss[i].name} had ${theBuss[i].clicks} votes and was seen ${theBuss[i].views} times`;
//         let newel = document.createElement('li')
//         newel.textContent = textcontent;
//         resultlist.appendChild(newel);
//         }
        
//     }



function rendtable(){
    let busnames = [];
    let busclicks = [];
    let busviews = [];
    for(let i = 0; i < theBuss.length; i++){
        busviews.push(theBuss[i].views);
        busclicks.push(theBuss[i].clicks);
        busnames.push(theBuss[i].name); 
    };
let chardata = {
    type: 'bar',
    data: {
      labels: busnames,
      datasets: [{
        label: 'Views',
        data: busviews,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Clicks',
        data: busclicks,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, chardata);
};

myContainer.addEventListener('click', bussclicker);
// myButton.addEventListener('click', results);




renderBuss2();