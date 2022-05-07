function onlyLetters(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}

function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

module.exports = {onlyLetters, onlyNumbers}