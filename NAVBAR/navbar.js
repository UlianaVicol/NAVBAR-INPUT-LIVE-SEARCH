const items   = [
    "BRAND",
    "Item1", 
    "Item2", 
    "Item3",
    "Item4",
    "Item5", 
    "Item6", 
    "Item7",
    "Item8"
]
const ITEM_TOTAL   = items.length
const BTN     = 90
let eWidth    = 0
let dropOpen  = false
let remaining = 0


function adapt(){
    for ( let n = ITEM_TOTAL ; n >= 1; n --){
         estimateWidth(n)
         if( eWidth <= innerWidth){
             showItems(n)
             break }
    } 
}

function estimateWidth(n){
    let text = ``
    let pad = 0
    for( let i = 0 ; i < n ; i++ ){
        text += items[i] 
        pad += 2 * 10
    }
    eWidth = 11 * text.length + pad + BTN
}

function showItems( n){
    navbar.innerHTML = ``
    toggler.innerHTML =``
    // HW1: limit array - ok
    for (let i = 0; i < n && n <=items.length; i++) {
        navbar.innerHTML += `<li><a href="">${items[i]}</a></li>`
    }

    remaining = ITEM_TOTAL - n
    if (remaining > 0) {
        toggler.innerHTML += `<button class="toggler" onresize="showRemainingItems(${remaining})" onclick="showRemainingItems(${remaining})">
        <span>${remaining}</span><i class="fas fa-bars"></i></button>`
    }
}

function showRemainingItems(n) {
    if (dropOpen) {
        navDropDown.innerHTML = ``
        dropOpen = false
    } else {
        for (let i = ITEM_TOTAL - n; i < ITEM_TOTAL; i++) {
            navDropDown.innerHTML += `<a href="">${items[i]}</a>`
        }
        dropOpen = true
    }
}
function showRemainingItemsResize(n) {
    navDropDown.innerHTML = ``
    if (dropOpen) {
        for (let i = ITEM_TOTAL - n; i < ITEM_TOTAL; i++) {
            navDropDown.innerHTML += `<a href="">${items[i]}</a>`
        }
    }
    if (n<1) {
        dropOpen = false
    }
}