var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("original order:", countriestovisit);
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort());
console.log("still in original order:", countriestovisit);
console.log("Revese order:", __spreadArray([], countriestovisit, true).reverse());
console.log("still in original order:", countriestovisit);
console.log("original order Reversed:", countriestovisit.reverse());
console.log("Back to original order:", countriestovisit.reverse());
console.log("Sorted in Alphabetical order:", countriestovisit.sort());
console.log("original order Reversed again:", countriestovisit.reverse());
