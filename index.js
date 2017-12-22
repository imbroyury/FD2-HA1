function printDuplicatedNumbers(...args) {
    let countObj = {};

    args.forEach(item => {
        !countObj.hasOwnProperty(item) ? countObj[item] = 1 : countObj[item]++;
    });

    Object.keys(countObj).forEach(item => {
        if (countObj[item] > 1) {
            console.log(item + ' - ' + countObj[item]);
        }
    });
}

printDuplicatedNumbers(1, 34, 67, 1, 5, 34, 1);