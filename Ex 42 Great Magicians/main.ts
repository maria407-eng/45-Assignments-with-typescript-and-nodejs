function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`)
}

let magician_name = ["Harrypotter","Hamza","Usman"];

let great_magicians = make_great(magician_name);

show_magicians(great_magicians);
