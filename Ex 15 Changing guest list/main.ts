let guestlist = ["AISHA BIBI","ZAINAB","MAHRUKH","SAIMA"];

let dontcome = guestlist[1];

console.log(dontcome, "Nhi aa sakti");

guestlist.splice(1,  1,"MUSKAN");

guestlist.forEach(guest => console.log(`Salam ${guest} will you like to dinner with me?`))