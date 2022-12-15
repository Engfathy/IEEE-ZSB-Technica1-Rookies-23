let lastStoneWeight = function (stones) {
    stones.sort((a, b) => a - b);
    for (let i = stones.length - 1; i > 0; i--) {
        stones[i - 1] = stones[i] - stones[i - 1];
        stones.splice(i);
        stones.sort((a, b) => a - b);
    }
    return stones[0]
};