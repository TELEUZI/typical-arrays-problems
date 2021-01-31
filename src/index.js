exports.min = function min(array) {
    return isProperArray(array) ? array.reduce((minValue, currentValue) =>
        minValue > currentValue ? currentValue : minValue) : 0;
};

exports.max = function max(array) {
    return isProperArray(array) ? array.reduce((maxValue, currentValue) =>
        maxValue < currentValue ? currentValue : maxValue) : 0;
};

exports.avg = function avg(array) {
    return isProperArray(array) ? array.reduce((acc, num) =>
        acc + num, 0) / array.length : 0;
};

const isNotEmptyArray = object => object.length > 0;
const isArray = object => Array.isArray(object);
const isProperArray = object => isArray(object) && isNotEmptyArray(object);