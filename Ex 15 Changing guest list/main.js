var guestlist = ["AISHA BIBI", "ZAINAB", "MAHRUKH", "SAIMA"];
var dontcome = guestlist[1];
console.log(dontcome, "Nhi aa sakti");
guestlist.splice(1, 1, "MUSKAN");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, " will you like to dinner with me?")); });
