"use strict";
const square = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    // do some database operations
    return products[3];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
