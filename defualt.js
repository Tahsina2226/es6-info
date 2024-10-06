function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7);ekane result 12
// const sum = add(5);ekane  5 undefined nan dekabe
const sum = add(5);




// default --> if value is not provided, take this as a default.
function add(num1 = 99, num2 = 0) {
    const result = num1 + num2 + num3;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7);
// const sum = add(5);

const sum = add(5);

function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

function friends(numbs = []) {

}
tahsin

function person(human = {}) {

}