var mainDish = [
    "Pancakes",
    "French Toast",
    "Meatloaf",
    "BBQ Ribs",
    "Banana",
    "Lentil Curry",
    "Vegetable Stir Fry",
    "Pizza",
    "Tacos",
    "Chalupa"
]

var side = [
    "Collard Greens",
    "Baked Beans",
    "Asparagus",
    "Roasted Corn",
    "Broccoli Salad",
    "Coleslaw",
    "Mashed Potatoes",
    "Bacon",
    "Cornbread",
    "Roasted Brussel Sprouts"
]

var dessert = [
    "Vanilla Ice Cream",
    "Chocolate Cake",
    "Key Lime Pie",
    "Popsicle",
    "Pumpkin Cheesecake Roll",
    "Fudge",
    "Chocolate Chip Cookies",
    "Cinnamon Rolls",
    "Monkey Bread",
    "Caramel Apple Tart"
]

var entireMeal =[]

var recipeBtn = document.querySelector('.header__btn')
var sideBtn = document.querySelector('#side')
var mainBtn = document.querySelector('#main-dish')
var dessertBtn = document.querySelector('#dessert')
var entireBtn = document.querySelector('#entire-meal')
var cookBtn = document.querySelector('.cook__btn')
var potImage = document.querySelector('.pot__pic')
var newText = document.querySelector('.new__txt')
var clearBtn = document.querySelector('.clear__btn')


cookBtn.addEventListener('click', makeRandomDish, showSentence)
clearBtn.addEventListener('click', clearMeal)

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}

function getSentence(event, arr) {
    event.preventDefault()
    var randomDish = ""
    if (arr === side) {
        randomDish = side[getRandomIndex(side)]
    } else if (arr === mainDish) {
        randomDish = mainDish[getRandomIndex(mainDish)]
    } else if (arr === dessert) {
        randomDish = dessert[getRandomIndex(dessert)]
    } else if (arr === meals) {
        var randomMainDish = mainDish[getRandomIndex(mainDish)]
        var randomSide = side[getRandomIndex(side)]
        var randomDessert = dessert[getRandomIndex(dessert)]
        randomDish = `${randomMainDish} with a side of ${randomSide} and ${randomDessert} for dessert!`
    } 
    newText.innerHTML = `<section class="prompt">
    <h3>You should make</h3>
    <h1>${randomDish}!</h1>
    </section>`; 
}
    
function makeRandomDish(event) {
    event.preventDefault(); 
    if (sideBtn === true) {
        getSentence(event, side)
        clearPot(event)
        clearBtn.classList.remove('hidden')
    } else if (mainBtn.checked) {
        getSentence(event, mainDish)
        clearPot(event)
        clearBtn.classList.remove('hidden')
    } else if (dessertBtn.checked) {
        getSentence(event, dessert)
        clearPot(event)
        clearBtn.classList.remove('hidden')
    } else if (entireBtn.checked) {
        getSentence(event, entireMeal)
        entireMeal.push(newText.innerHTML)
        clearPot(event)
        clearBtn.classList.remove('hidden')
    } else {
        potImage.classList.remove('hidden')
    }
 }

 function showSentence(event) {
    event.preventDefault()
    potImage.classList.toggle('hidden')
    newText.classList.toggle("hidden")
 }

function clearMeal() {
    potImage.classList.remove('hidden')
    newText.classList.add("hidden")
    clearBtn.classList.add('hidden')
}