console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
    const breedURL = 'https://dog.ceo/api/breeds/list/all'
    fetchImages(imgURL)
    fetchBreeds(breedURL)
}); 

// CHALLENGE 1 //
function fetchImages(imgURL) {
    fetch(imgURL)
        .then(res => res.json())
        .then(data => data['message'].forEach(renderImages))
        // .then(data => console.log(data['message']))
} 

function renderImages(doggo) {
    let container = document.querySelector("#dog-image-container");
    let element = doggoView(doggo)
    container.appendChild(element) 
} 

function doggoView(doggo) {
    let element = document.createElement('div')
    element.className = 'card' 
        let doggoImg = document.createElement('img')
        doggoImg.src = doggo
        element.appendChild(doggoImg)
            return element
} 

// CHALLENGE 2 //
function fetchBreeds(breedURL) {
    fetch(breedURL)
        .then(res => res.json())
        .then(data => (Object.entries(data['message'])).forEach(renderBreeds))
        // .then(data => console.log(Object.entries(data['message'])))
} 

// CHALLENGE 3/4 // 
function renderBreeds(breed) { 
    let list = document.querySelector("#dog-breeds"); 
    // if filter selected
    // if breed[0].includes(event.target.value)   
        // filtered breeds
        let breedName = document.createElement('ul')
        breedName.textContent = breed[0]
        breedName.addEventListener('click', (event) => {
            event.target.style.color = 'purple'
        })
        list.appendChild(breedName) 
    // else
        //render all breeds
}  

// CHALLENGE 4 //
// const dogSelect = document.getElementById('breed-dropdown')
// dogSelect.addEventListener('input', function(event) { 
//   let filteredDoggos = POKEMON.filter(function(pokeObj){
//     return pokeObj.name.includes(event.target.value)
//   })  
//  printPokemon(filteredPokemon);
// })




