function makesandwich(...items: string[]){
     console.log("\n making a sandwich with the following items:");

     items.forEach(singleitem => console.log("-" + singleitem));

     console.log("Now enjoy sandwich");

}

makesandwich("chicken" ,"cheese" ,"mayo" ,"egg");

makesandwich("bread" ,"butter" );

makesandwich("bread" ,"butter" ,"mayo" ,"egg" ,"cheese" ,"chicken" ,"lettuce" , "tomato");