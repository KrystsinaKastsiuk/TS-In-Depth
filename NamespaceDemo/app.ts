/// <reference path="utility-functions.ts" />

const result = Utility.maxBooksAllowed(20);
console.log(result);

import util = Utility.Fees;
const fee = util.calculateLateFee(3);
console.log(fee);
