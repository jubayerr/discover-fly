function getTicketValue(product, isIncrease) {
    const firstclassInput = document.getElementById(product + '-input');
    const firstclassNumber = parseInt(firstclassInput.value);
    let firstclassNewCount = 0;
    if (isIncrease == true) {
        firstclassNewCount = firstclassNumber + 1
    }
    if (isIncrease == false && firstclassNumber > 0) {
        firstclassNewCount = firstclassNumber - 1
    }

    firstclassInput.value = firstclassNewCount;
    let firstclassPriceTotal = 0;
    if (product == 'firstclass') {
        firstclassPriceTotal = firstclassNewCount * 150;
    }
    if (product == 'economy') {
        firstclassPriceTotal = firstclassNewCount * 100;
    }


    document.getElementById(product + '-price').innerText = "$" + firstclassPriceTotal;
}


