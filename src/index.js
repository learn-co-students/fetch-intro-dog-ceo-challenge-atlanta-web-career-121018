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

function renderBreeds(breed) {
    let list = document.querySelector("#dog-breeds");
    let breedName = document.createElement('ul')
    breedName.textContent = breed[0]
    list.appendChild(breedName) 
}  

// CHALLENGE 3 // 


