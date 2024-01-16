function twoSum(numbers, target) {
    var index1 = 0;
    var index2 = numbers.length - 1;
    if (numbers[index1] > target)
        return [];
    while (index1 < index2) {
        if (numbers[index1] + numbers[index2] === target)
            return [index1 + 1, index2 + 1];
        index2--;
    }
    return [];
}
// 2 7 11 15, target = 9
// 2 7 11 15, target = 18
console.log(twoSum([2, 7, 11, 15], 18));
