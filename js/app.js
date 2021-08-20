'use strict';

let theBus = [];

let myContainer = document.querySelector('section');
let resultlist = document.querySelector('ul');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let canvas = document.getElementById('myChart');
let views = 0;
let clicks = 0;
let maxclicks = 25;


function Bus(name,fileExt = 'jpg'){
    this.name = name;
    this.src = `images/${name}.${fileExt}`;
    this.views = 0;
    this.clicks = 0;
    theBus.push(this);
}

new Bus('bag',);
new Bus('banana',);
new Bus('bathroom',);
new Bus('boots',);
new Bus('breakfast',);
new Bus('bubblegum',);
new Bus('chair',);
new Bus('cthulhu',);
new Bus('dog-duck',);
new Bus('dragon',);
new Bus('pen',);
new Bus('pet-sweep',);
new Bus('scissors',);
new Bus('shark',);
new Bus('sweep','png');
new Bus('tauntaun',);
new Bus('unicorn',);
new Bus('water-can',);
new Bus('wine-glass',);
canvas.style.backgroundColor = "transparent";

function random(){
    return Math.floor(Math.random() * (theBus.length));
}

let busnumbers2 = [];
function renderBus2(){
    while(busnumbers2.length < 6){
        let busnum = theBus[random()];
        if (!busnumbers2.includes(busnum)){
            busnumbers2.push(busnum);
        }
    }
    busnumbers2.shift();
    busnumbers2.shift();
    busnumbers2.shift();
    image1.src= busnumbers2[0].src;
    image1.alt = busnumbers2[0].name;
    image2.src= busnumbers2[1].src;
    image2.alt = busnumbers2[1].name;
    image3.src= busnumbers2[2].src;
    image3.alt = busnumbers2[2].name;
    busnumbers2[0].views++;
    busnumbers2[1].views++;
    busnumbers2[2].views++;
}
renderBus2();



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




function busclicker(event){
    event.preventDefault();
    if (event.target === myContainer){
        alert('please select am item');
    }
    clicks++;
    let clickedBus = event.target.alt;
    for (let i = 0; i < theBus.length; i++){
        if (clickedBus === theBus[i].name){
            theBus[i].clicks++;
        }
    }
    renderBus2();
    if (clicks === maxclicks){
        myContainer.removeEventListener('click', busclicker);
        canvas.style.backgroundColor = "white";
        rendtable();
    } 
}
console.log(theBus);




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
    for(let i = 0; i < theBus.length; i++){
        busviews.push(theBus[i].views);
        busclicks.push(theBus[i].clicks);
        busnames.push(theBus[i].name); 
    };
let chardata = {
    type: 'bar',
    data: {
      labels: busnames,
      datasets: [{
        label: 'Views',
        data: busviews,
        backgroundColor: 'green',
        borderColor: 'green',
        hoverBorderColor: 'black',
        hoverBorderRadius: 20, 
        borderWidth: 2,
      },
      {
        label: 'Clicks',
        data: busclicks,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        hoverBorderColor: 'black',
        hoverBorderRadius: 20, 
        borderWidth: 2
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

myContainer.addEventListener('click', busclicker);
// myButton.addEventListener('click', results);




renderBus2();