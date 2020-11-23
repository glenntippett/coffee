const changeOpacityOne = () => {
  cardOne.style.opacity = "0.7"; 
}

const resetOpacityOne = () => {
  cardOne.style.opacity = "0.8"; 
}

const changeOpacityTwo = () => {
  cardTwo.style.opacity = "0.7"; 
}

const resetOpacityTwo = () => {
  cardTwo.style.opacity = "0.8"; 
}

const changeOpacityThree = () => {
  cardThree.style.opacity = "0.7"; 
}

const resetOpacityThree = () => {
  cardThree.style.opacity = "0.8"; 
}

const changeOpacityFour = () => {
  cardFour.style.opacity = "0.7"; 
}

const resetOpacityFour = () => {
  cardFour.style.opacity = "0.8"; 
}

let cardOne = document.querySelector('#card-one')
cardOne.addEventListener("mouseover", changeOpacityOne);
cardOne.addEventListener("mouseout", resetOpacityOne);

let cardTwo = document.querySelector('#card-two')
cardTwo.addEventListener("mouseover", changeOpacityTwo);
cardTwo.addEventListener("mouseout", resetOpacityTwo);

let cardThree = document.querySelector('#card-three')
cardThree.addEventListener("mouseover", changeOpacityThree);
cardThree.addEventListener("mouseout", resetOpacityThree);

let cardFour = document.querySelector('#card-four')
cardFour.addEventListener("mouseover", changeOpacityFour);
cardFour.addEventListener("mouseout", resetOpacityFour);
