"""
Write a program that calculates the population standard deviation given an arr[10] numbers.
(x- mean) ** 2
========================================================================
"""
class Solution:
    def __init__(self, arr):
        self.arr = arr

    def get_mean(self):
        mean = sum(self.arr)/len(self.arr)
        return mean

    def variance(self):
        sum_of_deviations = sum([(x-self.get_mean()) for x in self.arr])
        return sum_of_deviations/len(self.arr)

    def result(self):
        return (self.variance()) ** (0.5)

    def __str__(self):
        return f"The population standard deviation of the arr {self.arr} is {self.result()}"

m = Solution([1, 2, 4, 8, 9, 6, 7, 2, 6, 10])
print(m)
