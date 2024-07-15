let guestlist = ["AISHA BIBI","ZAINAB","MAHRUKH","SAIMA"];

let dontcome = guestlist[1];

console.log(dontcome, "Nhi aa sakti");

guestlist.splice(1,  1,"MUSKAN");

guestlist.forEach(guest => console.log(`Salam ${guest} will you like to dinner with me?`));

console.log("Good News!We have found a bigger table for a dinner");

//adding value at start
guestlist.unshift("Miss Iqra");

//adding value at end
guestlist.push("Miss Fouzia");

//adding value at middle
let middleIndex: number = Math.floor(guestlist.length/2);

//adding value at middle
guestlist.splice(middleIndex, 0, "Laiba");

console.log("updated list of all our guests");

guestlist.forEach(oneGuest => console.log(`Salam ${oneGuest}, will you like to dinner with me?`));