"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var indianCurrency = "Indian rupee";
var narniaCurrency = false;
// Change the type for the `data` function parameter so it can accept
// the different types of data that are passed when it's being called.
//
// This should fix the type error on Lines 28 and 30.
function outputCountryData(country, data) {
    console.log("The data for ".concat(country, " is: ").concat(data));
}
outputCountryData("Italy", 60317116);
outputCountryData("Nigeria", "Naira");
outputCountryData("United States of America", "English");
outputCountryData("India", 1352642280);
