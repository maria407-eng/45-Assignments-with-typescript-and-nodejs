function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Harrypotter", "Hamza", "Usman"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians_name = make_great(copy_magicians_names);
show_magicians(magicians_names);
show_magicians(copy_great_magicians_name);
