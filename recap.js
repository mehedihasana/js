// problem1
function anaToVori(anas) {
    if (anas > 0 && typeof anas === "number") {
        const vori = anas / 16;
        return vori;
    }
    else {
        return "Sorry your number not valid!!"
    }
}
const vorisResult = anaToVori(5);
console.log(vorisResult);
//  end....
// problem 2
function pandaCost(singara, somesa, gilapi){
    if(
        typeof singara === "number" && 
        typeof somesa === "number" && 
        typeof gilapi === "number" && 
        singara > 0 && 
        somesa > 0 && 
        gilapi > 0 
    ){
        const singaraPrice = 7;
        const somesaPrice = 10;
        const gilapiPrice = 15;
        const totalSingaraCost = singara * singaraPrice;
        const totalSomesaCost = somesa * somesaPrice;
        const totalGilapiCost = gilapi * gilapiPrice;
        const totalPrice = totalSingaraCost + totalSomesaCost + totalGilapiCost;
        return totalPrice;
    }
    else{
        return "Sorry your number not valid!!"
    }
}

const totalPandaCost = pandaCost(10, 12, 3)
console.log(totalPandaCost)


// end..

// problem 3
function picnicBudget(mans){
    if(mans> 200 && typeof mans === "number"){
        const first100Mans = 100 * 5000;
        const second100Mans = 100 * 4000; 
        const remainingMans = (mans - 200) * 3000;
        const total = first100Mans +  second100Mans + remainingMans;
        return total;
    } 
    else if(mans> 100 && typeof mans === "number") {
        const first100Mans = 100 * 5000;
        const remainingMans = (mans - 100) * 4000;
        const total = first100Mans + remainingMans;
        return total;
    }
    else if(mans > 0 && typeof mans === "number"){
        const total = mans * 5000;
        return total;
    }
    else{
        return "Sorry your number not valid.";
    }

}
const totalPicnicCost = picnicBudget(205)
console.log(totalPicnicCost);
//  end..

// problem 4
function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if(friend.length % 2 !== 0) {
            return friend;
        }
    }
}
const friends = ["Mehedy", "Eyasin", "Rohiz", "Salauddin", "Jahid"]
const oddFriendResult = oddFriend(friends)
console.log(oddFriendResult);
MD Mehedy
MD Mehedy Hassan
// end...




























