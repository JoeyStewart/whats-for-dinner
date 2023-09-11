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

function getRandomItem(array) {
    return array[getRandomIndex(array)]
}

function getSentence(event, arr) {
    event.preventDefault()
    var randomDish = ""

    if (arr === side) {
        randomDish = getRandomItem(side)
    } else if (arr === mainDish) {
        randomDish = getRandomItem(mainDish)
    } else if (arr === dessert) {
        randomDish = getRandomItem(dessert)
    } else if (arr === meals) {
        var randomMainDish = getRandomItem(mainDish)
        var randomSide = getRandomItem(side)
        var randomDessert = getRandomItem(dessert)
        randomDish = `${randomMainDish} with a side of ${randomSide} and ${randomDessert} for dessert!`
    }

    newText.innerHTML = `<section class="prompt">
        <h3>You should make</h3>
        <h1>${randomDish}!</h1>
    </section>`
}

function makeRandomDish(event) {
    event.preventDefault()

    let array = null

    if (sideBtn.checked) {
        array = side
    } else if (mainBtn.checked) {
        array = mainDish
    } else if (dessertBtn.checked) {
        array = dessert
    } else if (entireBtn.checked) {
        array = entireMeal
        entireMeal.push(newText.innerHTML)
    } else {
        potImage.classList.remove('hidden')
        return
    }

    getSentence(event, selectedArray);
    clearPot(event);
    clearBtn.classList.remove('hidden');
}

 function showSentence(event) {
    event.preventDefault()
    potImage.classList.add('hidden')
    newText.classList.remove("hidden")
 }

function clearMeal() {
    potImage.classList.remove('hidden')
    newText.classList.add("hidden")
    clearBtn.classList.add('hidden')
}