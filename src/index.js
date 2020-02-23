
exports.min = function min (array) {
    array.sort(function (a,b) {
        return a - b
    });
  return array[0];
};

exports.max = function max (array) {
    array.sort(function (a,b) {
        return b - a;
    });
    return array[0];
};

exports.avg = function avg (array) {
  return array.reduce((a,b) => (a + b ))/ array.length;
};
