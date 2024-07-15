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

console.log("Unfortunately,the new table wont arrive on time,so I can only invite two guest to dinner with me");

while(guestlist.length > 2) {
let removedguest =  guestlist.pop();
console.log(`sorry, ${removedguest} I cant invite you to dinner`);
}

console.log("Invition to the last 2 guests");
guestlist.forEach(twolast => console.log(`luckly ${twolast} you are still invited to dinner`));

guestlist.pop();
guestlist.pop();

console.log("Empty List:",guestlist);