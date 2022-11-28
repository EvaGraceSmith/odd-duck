'use strict';
console.log ('Hello from the js file');


// global variable
Ducks.allDucksArray = [];
let ducksContainer = document.querySelector('section');
let resultButton = document.querySelector('button');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
console.log(ducksContainer, resultButton, image1, image2, image3,);

let clicks = 0;
let maxClicks = 25;
console.log('click tracking', {clicks, maxClicks});

//constructor functions    src refers to the <img src="../img/bag.jpg" />
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

console.log('do we have Ducks? ' , Ducks.allDucksArray);

// function helper for randomization
function getRandomNumber(){
    return Math.floor(Math.random() * Ducks.allDucksArray.length);
}

//function to render our ducks
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


     console.log(duck1,duck2);

      //capture some data about images so that we can track the data in our objects
  //update the src for the new image to be seen after each click  ../img/bag.jpg                   
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

//function to handle our clicks
function handleDucksClick(event){
    console.log('we made it to the click: ', event);
    if(event.target === ducksContainer){
      alert('please click on a duck');
    }
    //how many time they vote total clicks
    clicks++;
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

      //do we have max attempts completed 10 votes
  if(clicks === maxClicks){
ducksContainer.removeEventListener('click', handleDucksClick);
    //enable the button to see the results
    resultButton.addEventListener('click', renderResults);
    // ducksContainer.className = 'no-voting';
  } else {
    renderDucks();
  }
}

//function for our render of results to a list
function renderResults(){
    let ul = document.querySelector('ul');
    for(let i = 0; i < Ducks.allDucksArray.length; i++){
      let li = document.createElement('li');
      li.textContent = `${Ducks.allDucksArray[i].name} had ${Ducks.allDucksArray[i].views} views and was clicked on ${Ducks.allDucksArray[i].click} times`;
      ul.appendChild(li);
    }
  
  }

  //duck objects and call the constructor with the new operator

new Ducks('The bag', '../img/bag.jpg');
new Ducks('The banana', '../img/banana.jpg');
new Ducks('The bathroom', '../img/bathroom.jpg');
new Ducks('The boots', '../img/boots.jpg');
new Ducks('The breakfast', '../img/breakfast.jpg');
new Ducks('The bubblegum', '../img/bubblegum.jpg');
new Ducks('The chair', '../img/chair.jpg');
new Ducks('The cthulhu', '../img/cthulhu.jpg');

new Ducks('The dog-duck', '../img/dog-duck.jpg');
new Ducks('The dragon', '../img/dragon.jpg');
new Ducks('The pen', '../img/pen.jpg');
new Ducks('The pet-sweep', '../img/pet-sweep.jpg');
new Ducks('The scissors', '../img/scissors.jpg');
new Ducks('The shark', '../img/shark.jpg');
new Ducks('The sweep', '../img/sweep.png');
new Ducks('The tauntaun', '../img/tauntaun.jpg');
new Ducks('The unicorn', '../img/unicorn.jpg');

//call all functions
renderDucks();

//add our event listener to run our handleClick()
ducksContainer.addEventListener('click', handleDucksClick);