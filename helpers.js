let mean = (nums) => {
    if(nums.length === 0) return 0;
    return nums.reduce((a, b) => a + b) / nums.length;
};


let median = (nums) => {
    let sorted = nums.sort((a,b) => a - b);
    let len = sorted.length;

    return len % 2 !== 0 ? sorted[len / 2 - .5] : (sorted[len / 2] + sorted[len / 2 - 1]) / 2;
};


let mode = (nums) => {
    freqs = {};

    nums.forEach(num => { freqs[num] ? freqs[num] += 1 : freqs[num] = 1 });
    sortFreqs = Object.entries(freqs).sort(([,a],[,b]) => a-b);

    if(sortFreqs[sortFreqs.length-1][1] > sortFreqs[sortFreqs.length-2][1]) {
        return parseInt(sortFreqs[sortFreqs.length-1][0]);
    } else {
        return "NO ONE MODE";
    }
};


let convertToNums = (queryStringNums) => {
    let nums = [];
    queryStringNums = queryStringNums.split(',');
    
    for (let i = 0; i < queryStringNums.length; i++) {
        let num = Number(queryStringNums[i]);

        if (Number.isNaN(num)) {
            return new Error(
                `The value "${queryStringNums[i]}" at index ${i} is not a valid number.`
            );
        }
        nums.push(parseInt(num));
    };
    return nums;
};


module.exports = {
    mean,
    median,
    mode,
    convertToNums
};