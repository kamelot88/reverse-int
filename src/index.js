module.exports = function reverse(n) {
    return n ? parseInt(n.toString().split("").reverse().join("")) : 0;
};
