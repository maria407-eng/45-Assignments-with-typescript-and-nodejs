let countriestovisit: string[] = ["China","Denmark","Brazil","Argentina"];
console.log("original order:", countriestovisit);

console.log("Alphabetical order:", [...countriestovisit].sort());

console.log("still in original order:", countriestovisit);

console.log("Revese order:", [...countriestovisit].reverse());

console.log("still in original order:", countriestovisit);

console.log("original order Reversed:", countriestovisit.reverse());

console.log("Back to original order:", countriestovisit.reverse());

console.log("Sorted in Alphabetical order:", countriestovisit.sort());

console.log("original order Reversed again:", countriestovisit.reverse());
