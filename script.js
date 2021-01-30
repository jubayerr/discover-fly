// Ticket Price Count
function getTicketValue(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketNumber = parseInt(ticketInput.value);

    let ticketNewCount = 0;
    if (isIncrease == true) {
        ticketNewCount = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketNewCount = ticketNumber - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketPriceTotal = 0;
    if (ticket == 'firstclass') {
        ticketPriceTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketPriceTotal = ticketNewCount * 100;
    }

    document.getElementById(ticket + '-price').innerText = "$" + ticketPriceTotal;

    calculateTotal();
}
// Calulate Total Ticket Price
function calculateTotal() {
    const firstclassPrice = getInputValue('firstclass');
    const economyPrice = getInputValue('economy');

    const subTotal = firstclassPrice * 150 + economyPrice * 100;
    document.getElementById('subtotal').innerText = "$" + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const totalTicketPrice = subTotal + tax;
    document.getElementById('total-ticket-price').innerText = "$" + totalTicketPrice;
    document.getElementById('popup-total').innerText = "$" + totalTicketPrice;
}
// Get Input Value of Ticket
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketPrice = parseInt(ticketInput.value);
    return ticketPrice;
}
// Extra Section Pop Up Element
document.getElementById('submit-btn').addEventListener('click', function () {
    const mainSection = document.getElementById('booking-form');
    mainSection.style.display = "none";
    const bookingContent = document.getElementById('booking-content')
    bookingContent.style.display = "none";
    const popupArea = document.getElementById('popup-area');
    popupArea.style.display = "block";
    document.getElementById('order-number').innerText = "#" + parseInt(Math.random() * 1000000000);
})

