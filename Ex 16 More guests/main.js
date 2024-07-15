var guestlist = ["AISHA BIBI", "ZAINAB", "MAHRUKH", "SAIMA"];
var dontcome = guestlist[1];
console.log(dontcome, "Nhi aa sakti");
guestlist.splice(1, 1, "MUSKAN");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, " will you like to dinner with me?")); });
console.log("Good News!We have found a bigger table for a dinner");
//adding value at start
guestlist.unshift("Miss Iqra");
//adding value at end
guestlist.push("Miss Fouzia");
//adding value at middle
var middleIndex = Math.floor(guestlist.length / 2);
//adding value at middle
guestlist.splice(middleIndex, 0, "Laiba");
console.log("updated list of all our guests");
guestlist.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", will you like to dinner with me?")); });
