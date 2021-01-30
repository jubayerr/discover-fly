function getFirstclassValue(isIncrease) {
    const firstclassInput = document.getElementById('firstclass-input');
    const firstclassNumber = parseInt(firstclassInput.value);
    let firstclassNewCount = 0;
    if (isIncrease == true) {
        firstclassNewCount = firstclassNumber + 1
    }
    if (isIncrease == false && firstclassNumber > 0) {
        firstclassNewCount = firstclassNumber - 1
    }

    firstclassInput.value = firstclassNewCount;

    document.getElementById('firstclass-price').innerText = firstclassNewCount * 150;
}

function getEconomyValue(isIncrease) {
    const firstclassInput = document.getElementById('economy-input');
    const firstclassNumber = parseInt(firstclassInput.value);
    let firstclassNewCount = 0;
    if (isIncrease == true) {
        firstclassNewCount = firstclassNumber + 1
    }
    if (isIncrease == false && firstclassNumber > 0) {
        firstclassNewCount = firstclassNumber - 1
    }

    firstclassInput.value = firstclassNewCount;

    document.getElementById('economy-price').innerText = firstclassNewCount * 100;
}

