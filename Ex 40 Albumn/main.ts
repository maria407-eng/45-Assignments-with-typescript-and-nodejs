function make_albumn(artist_name: string , albumn_title: string , tracks?:number){
    let albumn:{artist: string, title: string, tracks?:number} = { 
    artist: artist_name,
    title: albumn_title,
  };

  if (tracks !==undefined){
    albumn.tracks = tracks;
  }

  return albumn
}

let albumn1 = make_albumn("maria" , "albumn title 1");

let albumn2 = make_albumn("Aisha" , "albumn title 2");

let albumn3 = make_albumn("Saima" , "albumn title 3",10);

console.log(albumn1);

console.log(albumn2);

console.log(albumn3);