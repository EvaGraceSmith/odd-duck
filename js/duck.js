'use strict';
console.log ('Hello from the js file');




let duckContainer;
let allDucksArray;
let clicks = 0;
let maxClicks =25;
let previousimage1=1;
let previousimage2=1;
let previousimage3=1;
// Get initial references to HTML elements
Ducks.allDucksArray = [];
let preludeContainer = document.querySelector('.prelude');
let concludeContainer = document.querySelector('.conclude');
let confettiContainer = document.querySelector('#confetti-canvas');
let ducksContainer = document.querySelector('.voting-photos');
let textContainer = document.querySelector('aside h2');
let resultButton = document.querySelector('button');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

console.log(ducksContainer, resultButton, image1, image2, image3);



function Ducks(name, src, views, click){
  this.name = name;
  this.src = src;
  if(views){
    this.views = views;
  } else {
  //times shown
    this.views = 0;
  }
  if(click){
    this.click = click;
  } else {
  //times clicked on
    this.click = 0;
  }
  //   As we create new instances of our duck objects we can push those into array using the 'this' and the .push()
  // built in array method
  Ducks.allDucksArray.push(this);

}


//we need a way to get stuff back from local storage add to our original objects and then render all rounds to vote again.
let savedDucksString = localStorage.getItem('savedDucks');
console.log('Duck strings',savedDucksString);
//getItem from local storage

// send those through our constructor function
if(savedDucksString){
  let arrayOfNotDucksObject = JSON.parse(savedDucksString);
  console.log('objects that dont know they are Ducks?', arrayOfNotDucksObject);
  //once we have object we are going to run them through our constructor function so that they are Ducks objects.

  for(let i = 0; i < arrayOfNotDucksObject.length; i++){
    new Ducks(
      arrayOfNotDucksObject[i].name,
      arrayOfNotDucksObject[i].src,
      arrayOfNotDucksObject[i].views,
      arrayOfNotDucksObject[i].click
    );
  }
  console.log('sssssss',Ducks.allDuckssArray);
} else {
//calling the constructor function

  new Ducks('The luggage', 'img/bag.jpg');
  new Ducks('The banana', 'img/banana.jpg');
  new Ducks('The bathroom stand', 'img/bathroom.jpg');
  new Ducks('The boots', 'img/boots.jpg');
  new Ducks('The breakfast maker', 'img/breakfast.jpg');
  new Ducks('The bubblegum', 'img/bubblegum.jpg');
  new Ducks('The chair', 'img/chair.jpg');
  new Ducks('The cthulhu monster', 'img/cthulhu.jpg');
  new Ducks('The dog-duck', 'img/dog-duck.jpg');
  new Ducks('The dragon', 'img/dragon.jpg');
  new Ducks('The pen', 'img/pen.jpg');
  new Ducks('The pet-sweep', 'img/pet-sweep.jpg');
  new Ducks('The Ducks scissors', 'img/scissors.jpg');
  new Ducks('The shark', 'img/shark.jpg');
  new Ducks('The sweep', 'img/sweep.png');
  new Ducks('The tauntaun bag', 'img/tauntaun.jpg');
  new Ducks('The unicorn', 'img/unicorn.jpg');
  new Ducks('The watering can', 'img/water-can.jpg');
  new Ducks('The wine glass', 'img/wine-glass.jpg');

}




function getRandomNumber(){
  return Math.floor(Math.random() * Ducks.allDucksArray.length);
}

function renderDucks(){
  let duck1=getRandomNumber();
  while (duck1 === previousimage1 || duck1 === previousimage2 || duck1 === previousimage3) {
    duck1 = getRandomNumber();
  }
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();
  // console.log(duck1,duck2,duck3);
  while(duck1 === duck3|| duck3 === previousimage2 || duck3 === previousimage3){
    duck3 = getRandomNumber();
  }
  while(duck1 === duck2 || duck3 === duck2){
    duck2 = getRandomNumber();
  }

  // confirm that these products are not duplicates from the immediate previous set.
  image1.src = Ducks.allDucksArray[duck1].src;
  image2.src = Ducks.allDucksArray[duck2].src;
  image3.src = Ducks.allDucksArray[duck3].src;
  //update alt attribute
  image1.alt = Ducks.allDucksArray[duck1].name;
  image2.alt = Ducks.allDucksArray[duck2].name;
  image3.alt = Ducks.allDucksArray[duck3].name;
  //times shown
  Ducks.allDucksArray[duck1].views++;
  Ducks.allDucksArray[duck2].views++;
  Ducks.allDucksArray[duck3].views++;

  previousimage1 = duck1;
  previousimage2 = duck2;
  previousimage3 = duck3;
}//closes our renderDucks function

function afterconfetti()
{
  confettiContainer.style.display = 'none';
}
//function for our render of results to a list
function renderResults(){
  console.log('In renderResults()');
  let ul = document.querySelector('ul');
  renderChart();
  window.setTimeout(afterconfetti, 10000);
  resultButton.textContent='Results';
  ducksContainer.style.display = 'none';
  concludeContainer.style.display = 'flex';
  confettiContainer.style.display = '';
}

// Draw a chart with the duck data.

function renderChart(){
  console.log('In renderChart()');
  // Divide duck values into separate arrays to be used in the chart
  let duckNames=[];
  let duckLikes=[];
  let duckViews=[];
  let votePercentage = [];
  for (let i =0; i < Ducks.allDucksArray.length; i++){
    duckNames.push(Ducks.allDucksArray[i].name);
    duckLikes.push(Ducks.allDucksArray[i].click);
    duckViews.push(Ducks.allDucksArray[i].views);
    votePercentage[i] = Math.floor(100 * (duckLikes[i] / duckViews[i]));
  }
  const data = {
    labels: duckNames,
    datasets: [
      {
        label: 'Likes',
        data: duckLikes,
        backgroundColor: ['rgb(14, 80, 167)'],
        borderColor: ['rgb(14, 80, 167)'],
        borderWidth: 1,
      },
      {
        label: 'Views',
        data: duckViews,
        backgroundColor: ['rgb(255, 211, 81)'],
        borderColor: ['rgb(255, 211, 81)'],
        borderWidth: 1,
      },
    ],
  };


  //configure the graph
  const config = {
    type: 'bar',
    data:data,
    options: {
      scales: {
        y:{
          beginAtZero:true,
        },
      },
    },
  };

  //   let gradient = ctx.createLinearGradient(0, 0, 0, 450);
  //   gradient.addColorStop(0, 'rgba(14, 80, 167, 0.5)');
  //   g\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ient.addColorStop(0.5, 'rgba(14, 80, 167, 0.25)');
  //   gradient.addColorStop(1, 'rgba(14, 80, 167, 0)');



  const dataDoughnut = {
    labels: duckNames,
    datasets: [

      {
        label: 'Popularity',
        data: votePercentage,
        // backgroundColor: gradient,
        // background: [radial-gradient(rgb(80, 142, 223), rgb(195, 216, 244), rgb(80, 142, 223))],
        backgroundColor: ['rgb(14, 80, 167)'],
        borderColor: ['rgb(255, 211, 81)'],
        borderWidth: 2,
      },
    ],
  };




  //configure the graph
  const configDoughnut = {
    type: 'doughnut',
    data:dataDoughnut,
    options: {
      scales: {
        y:{
          beginAtZero:true,
        },
      },
    },
  };

  // Get a reference to the Canvas element
  let canvasChart =document.getElementById('myChart');
  //Draw the chart
  const myChart = new Chart (canvasChart, config);

  let canvasChart2 =document.getElementById('myChart2');
  //Draw the chart
  const myChart2 = new Chart (canvasChart2, configDoughnut);
}
//  * Initialize the global variables, set up needed event handlers, and
//  * perform the initial render.




// An instance of an object can be declared by giving it a unique name that can be used in a program.
// This process is known as instantiation.

//add our event listener to run our handleClick()
preludeContainer.addEventListener('click', handlePreludeClick);
ducksContainer.addEventListener('click', handleDucksClick);
confettiContainer.style.display = 'none';

function handleDucksIconClick(event)
{
  let ding = new Audio('duck.mp3');
  ding.play();
}
function handlePreludeClick(event) {
  preludeContainer.style.display = 'none';
  ducksContainer.style.display = 'flex';
  renderDucks();
}

let ducksIcon = document.querySelector('.odd-duck-logo');

ducksIcon.addEventListener('click', handleDucksIconClick);


function handleDucksClick(event){
  console.log('we made it to the click: ', event);
  // Test to see if we have clicked an image
  if(event.target === image1 || event.target === image2 || event.target === image3){

    //how many time they vote total clicks
    clicks++;
    // We don't know which random duck was clicked, so loop through them
    // to see if any match the event target
    let clickDucks = event.target.alt;
    console.log(clickDucks);
    for(let i = 0; i < Ducks.allDucksArray.length; i++){
      if(clickDucks === Ducks.allDucksArray[i].name){
        //this.click from duck object
        // update the ducks individual clicks
        Ducks.allDucksArray[i].click++;
        let countdown = 25 - clicks;
        textContainer.textContent =`${countdown}`;

        break;
      }
    }
  }
  else {
    alert('please click on a product.');
  }


  //do we have max attempts completed 25 votes
  if(clicks === maxClicks){
    ducksContainer.removeEventListener('click', handleDucksClick);
    //enable the button to see the results
    resultButton.addEventListener('click', renderResults);
    // ducksContainer.className = 'no-voting';
    resultButton.textContent='View Results';
    localStorage.setItem('savedDucks', JSON.stringify(Ducks.allDucksArray));

  } else {
    renderDucks();
  }
}

// window.localStorage.setItem(key,JSON.stringify(car));
