"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency[Currency["Euro"] = 0] = "Euro";
    Currency[Currency["Dollar"] = 1] = "Dollar";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
var countries = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];
console.log(countries);
// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["primary"] = "primary";
    LanguageStatus["secondary"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
var countryLanguages = [
    { language: "Spanish", status: LanguageStatus.primary },
    { language: "English", status: LanguageStatus.secondary },
];
console.log(countryLanguages);
