// Run this method when the page first loads
function pageLoad() {
	
	// Show a random quote
    showQuote();
	
    // Get the product dom elements
    var items = document.getElementsByClassName("item");
    
    // Add click events to each item's button
    for (var i = 0; i < items.length; i++) {
        var button = items[i].getElementsByTagName('button');
        
        button[0].onclick = function () {
            addToTotal(parseFloat(document.getElementById(this.parentNode.id).getElementsByClassName("price-of-toy")[0].innerText));
            addToCart(this.parentNode.id);
        }
    }
}

// An array holding all of the possible header quotes.
var possibleQuotes = [
    'What a great day to buy toys!'
    , 'We sell toys - it\'s what we do!'
    , 'If you came here to by cookies, you came to the wrong place...'
    , 'Oh happy day!'
    , 'Mary says Legos are the best!'
    , 'Toys, Toys and more Toys!'
    , 'We have free shipping for orders over $75!'
    , '5-day shipping guaranteed!'
    , 'Now selling birthday party themed decorations!'
    , 'Spend $100 and get $5 towards your next purchase!'
];

// An array holding all of the possible thank you header quotes.
var thankYouQuotes = [
    'Thank you for shopping at Mary\'s Toys!'
    , 'Thanks!'
    , 'Come again!'
    , 'Thanks for your purchase! We hope you shop again!'
    , 'Is that all you have bought? Don\'t be shy!'
];

// Adds to items price to the cart total
var counter = 0;
function addToTotal(total) {
    var totalValue = Number(total);
    counter += totalValue;
    document.getElementById("cart-total").innerHTML = '';
    var totalRounded = counter.toFixed(2);
    document.getElementById("cart-total").innerHTML = '$' + totalRounded;
}

// Adds an item to the cart
function addToCart(itemId) {
    var currentItem = document.getElementById(itemId);
    currentItem.parentNode.removeChild(currentItem);
    var value = Number(document.getElementById("items-in-cart").innerHTML);
    document.getElementById("items-in-cart").innerHTML = value + 1;
    showThankYouQuote();
}

// Shows a random quote on the page
function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];
    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}

// Shows a random thank you message on the page
function showThankYouQuote() {
    // Get a random quote from the quote array.
    var randomQuote = thankYouQuotes[Math.floor(Math.random() * 5)];
    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = "<strong>" + randomQuote + "</strong>";
}