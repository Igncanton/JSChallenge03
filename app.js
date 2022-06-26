//Initial empty array
let cart = []

//Welcoming function
const welcomeInit = () => {
    alert("Your cart is currently empty, prese ENTER to start adding items!")
    cart.push(prompt("Please add an item: "))
    askAddItems()
}

//Add item
const addItem = () => {
    cart.push(prompt("Please add an item: "))
}

//View array
const viewArray = () => {
    alert(`Your cart has: ${cart}`)
}

//Empty array
const emptyArray = () => {
    let emptyPay = parseInt(prompt("Choose a number to continue: 1- Pay or 2- Empty cart"))

    if (emptyPay === 1) {
        alert("Thanks for purchase, have a nice day!")

    } else if (emptyPay === 2) {
        cart.splice(0, cart.length)
        alert("Your cart is now empty!")
        let continueAnswer = parseInt(prompt("Would you like to keep shopping or leave? 1- Keep Shopping 2- Leave"))

        if (continueAnswer === 1) {
            welcomeInit()

        } else {
            alert("Hope to see back again soon, have a nice day!")
        }

    } else {
        alert("Please enter a valid answer, only 1 or 2 are valid, press Enter to continue")
        emptyArray()
    }
}

//Ask more items
const askAddItems = () => {
    let answerItems = prompt("Would you like to add more items? Y or N").toLocaleLowerCase()

    if (answerItems === "y") {
        addItem()
        askAddItems()

    } else if (answerItems === "n") {
        viewArray()
        emptyArray()

    } else {
        alert("Please enter a valid answer, only Y or N are valid, press ENTER to continue")
        askAddItems()
    }
}

//App initialization
welcomeInit()