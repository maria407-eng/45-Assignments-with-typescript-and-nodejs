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
console.log("Unfortunately,the new table wont arrive on time,so I can only invite two guest to dinner with me");
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry, ".concat(removedguest, " I cant invite you to dinner"));
}
console.log("Invition to the last 2 guests");
guestlist.forEach(function (twolast) { return console.log("luckly ".concat(twolast, " you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
