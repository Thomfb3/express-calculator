const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode, convertToNums } = require('./helpers.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Homepage");
});


app.get("/mean", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertToNums(req.query.nums);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    };

    let result = { operation: "mean", result: mean(nums) }
    return res.send(result);

});



app.get("/median", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }


    let nums = convertToNums(req.query.nums);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    };

    let result = { operation: "median", result: median(nums) }
    return res.send(result);

});



app.get("/mode", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertToNums(req.query.nums);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    };

    let result = { operation: "mode", result: mode(nums) }

    return res.send(result);

});



app.get("/all", (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = convertToNums(req.query.nums);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    };

    let result = { operation: "All", mean: mean(nums), median: median(nums), mode: mode(nums)  }

    return res.send(result);

});

  


app.use(( req, res, next) => {
    const e = new ExpressError("PAGE NOT FOUND", 404);
    return next(e);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.json({
        error: error,
    });
});



app.listen(3000, () => {
    console.log('App on port 3000');
});


