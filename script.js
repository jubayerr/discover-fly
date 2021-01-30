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

function calculateTotal() {
    const firstclassPrice = getInputValue('firstclass');
    const economyPrice = getInputValue('economy');

    const subTotal = firstclassPrice * 150 + economyPrice * 100;
    document.getElementById('subtotal').innerText = "$" + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;
    const totalTicketPrice = subTotal + tax;
    document.getElementById('total-ticket-price').innerText = "$" + totalTicketPrice;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketPrice = parseInt(ticketInput.value);
    return ticketPrice;
}