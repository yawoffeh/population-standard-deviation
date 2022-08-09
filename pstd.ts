/*
Write a program that calculates the population standard deviation given an arr[10] numbers.

========================================================================*/

class Solution {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }

  getMean(): number{
    let mean: number;
    let total: number = 0;
    for (let x of this.arr){
      total += x;
    }
    mean = total/this.arr.length;
    return mean;
  }

  getDeviations(): number{
    let sumOfDeviations: number = 0;
    for (let i of this.arr){
      sumOfDeviations += (i - (this.getMean())) ** 2;
    }
    return sumOfDeviations;
  }
}


function main(){
  let arr: number[] = [1, 2, 4, 8, 9, 6, 7, 2, 6, 10];
  let sol = new Solution(arr);
  let result: number = (sol.getDeviations()/arr.length) ** (0.5);
  console.log(result);
}

main();
