/*
Write a program that calculates the population standard deviation given an arr[10] numbers.

========================================================================*/
var Solution = /** @class */ (function () {
    function Solution(arr) {
        this.arr = arr;
    }
    Solution.prototype.getMean = function () {
        var mean;
        var total = 0;
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var x = _a[_i];
            total += x;
        }
        mean = total / this.arr.length;
        return mean;
    };
    Solution.prototype.getDeviations = function () {
        var sumOfDeviations = 0;
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            sumOfDeviations += Math.pow((i - (this.getMean())), 2);
        }
        return sumOfDeviations;
    };
    return Solution;
}());
function main() {
    var arr = [1, 2, 4, 8, 9, 6, 7, 2, 6, 10];
    var sol = new Solution(arr);
    var result = Math.pow((sol.getDeviations() / arr.length), (0.5));
    console.log(result);
}
main();
