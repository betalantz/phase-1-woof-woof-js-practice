const baseURL = "http://localhost:3000/pups"

// DOM Selectors
const bar = document.querySelector("#dog-bar")
const details = document.querySelector("#dog-info")
const filterBtn = document.querySelector("good-dog-filter")

// Fetches
function getAllDogs(){
  fetch(baseURL)
  .then(res => res.json())
  .then(renderAllInBar)
}

function getOneDog(id){
  return fetch(baseURL + `/${id}`)
  .then(res => res.json())
}

// Rendering
function renderAllInBar(dogsArr){
  bar.innerHTML = ''
  dogsArr.forEach(addOneDogToBar)
}

function addOneDogToBar(dogObj){
  const dogSpan = document.createElement('span')
  dogSpan.innerText = dogObj.name
  dogSpan.dataset.id = dogObj.id
  dogSpan.addEventListener('click', handleSpanClick)
  bar.append(dogSpan)
}

function showOneDog(dogObj){
  // console.log(dogObj)
  details.innerHTML = ''
  const dogDiv = document.createElement('div')
  dogDiv.innerHTML = `
    <img src=${dogObj.image}>
    <h2>${dogObj.name}</h2>`
  const pupBtn = document.createElement('button')
  // let str; 
  // if(dogObj.isGoodDog){
  //   str = "Good Dog"
  // } else {
  //   str = "Bad Dog"
  // }
  pupBtn.textContent = ((dogObj.isGoodDog) ? "Good Dog" : "Bad Dog")
  pupBtn.addEventListener('click', () => togglePupButton(pupBtn))
  details.append(dogDiv, pupBtn)
}

// Event handlers
function handleSpanClick(event){
  const id = event.target.dataset.id
  getOneDog(id).then(showOneDog)
}

function togglePupButton(pupButton){
 pupButton.textContent = pupButton.textContent.includes("Good") ? "Bad Dog" : "Good Dog"
}

// Intialize
getAllDogs()