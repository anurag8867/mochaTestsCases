let func = {};

func.add = function (a, b) {
    return this.getAdd(a, b);
};

func.getAdd = function (a, b) {
    return a + b;
};

func.subtract = function (a, b) {
    return a - b;
};

func.multiply = function (a, b) {
    return a * b;
};

func.divide = function (a, b) {
    return a / b;
};

module.exports = func;