'use strict';
console.log ('Hello from the js file');

let duckContainer;
let allDucksArray;
let clicks = 0;
let maxClicks =25;


// @param {string}
// @param {string}

function Ducks(name, src){
    this.name = name;
    this.src = src;
    //times shown
    this.views = 0;
    //times clicked on
    this.click = 0;

      //   As we create new instances of our duck objects we can push those into array using the 'this' and the .push()
  // built in array method
  Ducks.allDucksArray.push(this);

}

function getRandomNumber(){
  return Math.floor(Math.random() * Ducks.allDucksArray.length);
}

function renderDucks(){
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();
  // console.log(duck1,duck2,duck3);
  while(duck1 === duck3){
    duck3 = getRandomNumber();
  }

  while(duck1 === duck2 || duck3 === duck2){
    duck2 = getRandomNumber();
  }
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

}//closes our renderDucks function


//function for our render of results to a list
function renderResults(){
  console.log('In renderResults()');
  let ul = document.querySelector('ul');
  for(let i = 0; i < Ducks.allDucksArray.length; i++){
    let duck = allDucksArray[i];
    let li = document.createElement('li');
    li.textContent = `${Ducks.allDucksArray[i].name} had ${Ducks.allDucksArray[i].views} views and was clicked on ${Ducks.allDucksArray[i].click} times`;
    ul.appendChild(li);
  }
}

// Draw a chart with the goat data.

function renderChart(){
  console.log('In renderChart()');
  // Divide duck values into separate arrays to be used in the chart
  let duckNames=[];
  let duckLikes=[];
  let duckViews=[];
  for (let i =0; i < Ducks.allDucksArray.length; i++){
    duckNames.push(Ducks.allDucksArray[i].name);
    duckLikes.push(Ducks.allDucksArray[i].click);
    duckViews.push(Ducks.allDucksArray[i].views);
  }
  const data = {
    labels: duckNames,
    datasets: [
      {
        label: 'Likes',
        data: duckLikes,
        backgroundColor: ['rgba(255,99,132,0.2)'],
        borderColor: ['rgb(255,99,132)'],
        borderWidth: 1,
      },
      {
        label: 'Views',
        data: duckViews,
        backgroundColor: ['rgba(255,159,64,0.2)'],
        borderColor: ['rgb(255,159,64)'],
        borderWidth: 1,
      },
    ],
  };


//configure the graph
const config = {
    type: "bar",
    data:data,
    options: {
        scales: {
            y:{
                beginAtZero:true,
            },
        },
    },
};

// Get a reference to the Canvas element
let canvasChart =document.getElementById("myChart");
//Draw the chart
const myChart = new Chart (canvasChart, config);
}


//  * Initialize the global variables, set up needed event handlers, and
//  * perform the initial render.


    // Get initial references to HTML elements
    Ducks.allDucksArray = [];
    let ducksContainer = document.querySelector('section');
    let resultButton = document.querySelector('button');
    let image1 = document.querySelector('section img:first-child');
    let image2 = document.querySelector('section img:nth-child(2)');
    let image3 = document.querySelector('section img:nth-child(3)');
    console.log(ducksContainer, resultButton, image1, image2, image3,);

    // instantiate Ducks 

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
new Ducks('The pizza scissors', 'img/scissors.jpg');
new Ducks('The shark', 'img/shark.jpg');
new Ducks('The sweep', 'img/sweep.png');
new Ducks('The tauntaun bag', 'img/tauntaun.jpg');
new Ducks('The unicorn', 'img/unicorn.jpg');


    // Set any event handlers
    //add our event listener to run our handleClick()
ducksContainer.addEventListener('click', handleDucksClick);
//call all functions
renderDucks();


function handleDucksClick(event){
    console.log('we made it to the click: ', event);
    // Test to see if we have clicked an image
    if(event.target === ducksContainer){
      alert('please click on a product.');
    }
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
        break;
      }
    }

      //do we have max attempts completed 25 votes
  if(clicks === maxClicks){
ducksContainer.removeEventListener('click', handleDucksClick);
    //enable the button to see the results
    resultButton.addEventListener('click', renderResults);
    // ducksContainer.className = 'no-voting';
    renderChart();
  } else {
    renderDucks();
  }
}

