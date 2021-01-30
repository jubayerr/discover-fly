document.getElementById('firstclass-increase').addEventListener('click', function () {
    getInputValue(true)
})

document.getElementById('firstclass-decrease').addEventListener('click', function () {
    getInputValue(false)
})

function getInputValue(isIncrease) {
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

