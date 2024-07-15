function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items:");
    items.forEach(function (singleitem) { return console.log("-" + singleitem); });
    console.log("Now enjoy sandwich");
}
makesandwich("chicken", "cheese", "mayo", "egg");
makesandwich("bread", "butter");
makesandwich("bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
