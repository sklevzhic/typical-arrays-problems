
exports.min = function min (array) {
    if (!array || array.length == 0) {
        return 0;
    }
    array.sort(function (a,b) {
        return a - b
    });
  return array[0];
};

exports.max = function max (array) {
    if (!array || array.length == 0) {
        return 0;
    }
    array.sort(function (a,b) {
        return b - a;
    });
    return array[0];
};

exports.avg = function avg (array) {
    if (!array || array.length == 0) {
        return 0;
    }
  return array.reduce((a,b) => (a + b ))/ array.length;
};
