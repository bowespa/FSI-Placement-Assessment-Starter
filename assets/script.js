// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Patrick Bowes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let totalQty = document.querySelector('#qty-total')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn = document.getElementById('add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbQty.textContent = gb
    totalQty.textContent = gb + cc + sugar
    console.log('Gingerbread + button was clicked!')
})

gbMinusBtn = document.getElementById('minus-gb')
gbMinusBtn.addEventListener('click', function(e) {
    if (gb > 0){
        gb--
        gbQty.textContent = gb
        totalQty.textContent = gb + cc + sugar
        console.log('Gingerbread - button was clicked!')
    }
})

ccPlusBtn = document.getElementById('add-cc')
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQty.textContent = cc
    totalQty.textContent = gb + cc + sugar
})

ccMinusBtn = document.getElementById('minus-cc')
ccMinusBtn.addEventListener('click', function(e) {
    if (cc > 0){
        cc--
        ccQty.textContent = cc
        totalQty.textContent = gb + cc + sugar
    }
})

sugarPlusBtn = document.getElementById('add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQty.textContent = sugar
    totalQty.textContent = gb + cc + sugar
})

sugarMinusBtn = document.getElementById('minus-sugar')
sugarMinusBtn.addEventListener('click', function(e) {
    if (sugar > 0){
        sugar--
        sugarQty.textContent = sugar
        totalQty.textContent = gb + cc + sugar
    }
})