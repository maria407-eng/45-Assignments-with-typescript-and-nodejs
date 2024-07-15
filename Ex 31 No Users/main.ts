let username =  ["Mahad","Ali","Zeeshan","Admin","Usman"];
username = []

if(username.length === 0){
console.log("Your array is empty we need to find some users!")
}else{ 
    username.forEach(oneuser => {
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser},would you like to see a status report?`)
    }else{ 
        console.log(`Hello ${oneuser},thankyou for logging in again`)
    }
})
}