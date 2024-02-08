function calculateMoney(ticketSale) {
    const ticketPrice = 120 * ticketSale;
    const expense = (8*50) + 500;
    
    const hisIncome = ticketPrice - expense;

    if(ticketSale < 0){
        return "Sorry Baker Bhai, Thik Input Den";
    }
    return hisIncome;

}


function checkName(name) {
    if(typeof name !== "string"){
        return "invalid";
    }
    let nameLower = name.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u", "y", "w"];
    let lastIndex = nameLower.length-1;

    for(let i = 0; i < vowels.length; i++){
        if(nameLower[lastIndex].includes(vowels[i])){
            return "Good Name"
        }
    }
    return "Bad Name"
}


function deleteInvalids(array) {

    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    let newArr = [];

    for(let i = 0; i < array.length; i ++){
        if(!isNaN(array[i]) && typeof array[i] !== "string" && typeof array[i] !== "object"){
            newArr.push(array[i]);
        }
    }
    return newArr;
}


function password(obj) {
    if(Object.keys(obj).length !== 3 || obj.birthYear.toString().length !== 4){
        return "invalid"
    }
    else{
        return `${obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`
    }
}


function monthlySavings(arr , livingCost) {

    if(!Array.isArray(arr) || typeof livingCost !== "number" ){
        return "invalid input";
    }
    let totalIncome = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=3000){
           arr[i] -= arr[i] / 100 * 20;
        };
        totalIncome += arr[i];
    }
    const savings = totalIncome - livingCost;

    if(savings>=0){
        return savings;
    }else{
        return "Earn More!";
    };
}