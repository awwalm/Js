
/**
 * Node defines a global `exports` object that is always defined.
 * If you are writing a Node module that exports multiple values,
 * you can simply assign them to the properties of this object:
 */
const sum = (x, y) => x + y;
const square = x => x * x;

exports.mean = data => data.reduce(sum)/data.length;
exports.stddev = function(d) {
    let m = exports.mean(d);
    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};
