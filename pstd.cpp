/*
Population standard deviation calculator
By kingsley Baidu @https://github.com/kkbaidu
=====================================================*/
#include <iostream>
#include <cmath>
using namespace std;

int main(){
  float arr[10] = {1, 2, 4, 8, 9, 6, 7, 2, 6, 10};
  float sum, mean;
  for(int i = 0; i <= 9; i++){
    sum+=arr[i];
  }
  mean = sum / 10;
  float sumsqrDeviaion = 0;
  for (int r = 0; r <= 9; r++){
    float deviation = arr[r] - mean;
    float sqrDeviaion = deviation * deviation;
    sumsqrDeviaion+=deviation;
  }


  float variance = sumsqrDeviaion/ 10;
  float standardDeviation = sqrt(variance);

  cout << standardDeviation;

  return 0;
}
