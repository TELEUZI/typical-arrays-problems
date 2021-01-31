exports.min = function min(array) {}

exports.max = function max(array) {};

exports.avg = function avg(array) {};

const isNotEmptyArray = (object) => object.length > 0;
const isArray = (object) => Array.isArray(object);
const isProperArray = (object) => isArray(object) && isNotEmptyArray(object);