console.log('%c HI', 'color: firebrick') 
document.addEventListener("DOMContentLoaded", function() {
    fetchImages(imgURL)
    addSelectHandle()
    fetchBreeds(breedURL) 
});  

const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
const breedURL = 'https://dog.ceo/api/breeds/list/all'
var input = "a"; 
let list = document.querySelector("#dog-breeds"); 


// CHALLENGE 1 //
function fetchImages(imgURL) {
    fetch(imgURL)
        .then(res => res.json())
            .then(data => data['message'].forEach(renderImages))
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
    list.innerHTML = ""
    fetch(breedURL)
        .then(res => res.json())
        .then(data => (Object.entries(data['message'])).forEach(filterBreed))
} 

function addSelectHandle() { 
    let dogSelect = document.getElementById('select-breed')
    dogSelect.addEventListener('change', function(event) { 
        input = event.target.value 
        fetchBreeds(breedURL)
    }) 
}

// CHALLENGE 4 //
function filterBreed(breed) {
    if (breed[0].charAt(0) == input) {
        renderBreeds(breed)
    }
} 

// CHALLENGE 3/4 // 
function renderBreeds(breed) { 
    let breedName = document.createElement('ul')
    breedName.textContent = breed[0]
    breedName.addEventListener('click', (event) => {
        event.target.style.color = 'purple'
    })
    list.appendChild(breedName) 
}  





// filtering the data and using fetch
// 1. get data once, keep in global variable, empty container, filter global, re-render (var global = {}; at top of code; set global = data in fetch fn;)
// 2. fetch data with each click, filter it, re-render into container (preferred, cleaner)


//consider having 2 functions -- renderAllBreeds, then one for when a filter is performs (clears container prior)

