console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", setupPage)



function renderDogs(dogs){
    let div = document.querySelector('#dog-image-container')
    dogs.message.forEach(function (dog){
        let img = document.createElement('img')
        img.src = dog
        div.appendChild(img)
    });
    return div
}

function getDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        renderDogs(res)
    });
}


function renderBreeds(dogs){
    const values = Object.values(dogs)
    const keys = Object.keys(dogs)
    const entries = Object.entries(dogs)

    let ul = document.querySelector('#dog-breeds')
    let x = 1;
    for(let element in dogs){
        if (dogs[element].length > 0) {
            for(let i = 0; i < dogs[element].length; i++){
                let listItem = document.createElement('li')
                listItem.className = 'breed-list-item'
                listItem.id = `${x}`
                listItem.innerHTML = `${dogs[element][i]} - ${element}`
                ul.appendChild(listItem)
                x++
            }
        } else if (dogs[element].length === 0) {
            let listItem = document.createElement('li')
            listItem.innerHTML = element
            listItem.className = 'breed-list-item'
            listItem.id = `${x}`
            ul.appendChild(listItem)
            x++
        }
    }
    return ul;
};

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function addClickHandle() {
    var ulist = document.querySelector("#dog-breeds");

    for (var i = 0; i < ulist.children.length; i++) {
        let liItem = ulist.children[i];
        liItem.addEventListener('mouseover', randomize);
    }

    function randomize(e) {
        e.target.style.color = randomColors()
    }
}

function checkFirstLetter (el, char) {
    if (el.innerHTML[0] !== char){
        el.setAttribute('hidden', true)
    } else {
        el.removeAttribute('hidden')
    }
}

function findDogs(){
    const dropdownMenu = document.querySelector('#breed-dropdown');

    dropdownMenu.addEventListener('change', event => {
        event.preventDefault();
        const targetLetter = event.target.value
        const breeds = document.querySelectorAll('li')
        breeds.forEach( el => checkFirstLetter(el, targetLetter) )
    })
}


function getBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        renderBreeds(res.message)
    }).then(addClickHandle)
    // .then(res => addaddClickHandleHandlers)
}

function setupPage() {
    getDogs()
    getBreeds()
    findDogs()
    // addClickHandle()
}
