function make_albumn(artist_name, albumn_title, tracks) {
    var albumn = {
        artist: artist_name,
        title: albumn_title,
    };
    if (tracks !== undefined) {
        albumn.tracks = tracks;
    }
    return albumn;
}
var albumn1 = make_albumn("maria", "albumn title 1");
var albumn2 = make_albumn("Aisha", "albumn title 2");
var albumn3 = make_albumn("Saima", "albumn title 3", 10);
console.log(albumn1);
console.log(albumn2);
console.log(albumn3);
