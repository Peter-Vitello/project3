/*Game Variables*/
let money = 0;
let tree = document.querySelector("#treetoclick");
let moneyText = document.getElementById("moneyamount");
let fertilizerCount = 0;
let cryptoCount = 0;
let hedgeCount = 0;
let slideCount = 0;
let gardenCount = 0;
tree.onclick = treeClick;

document.querySelector("#treetoclick").onclick = treeClick;



//functions 
function treeClick(number) {
    money = money + number;
    document.getElementById("moneyamount").innerHTML = "Money: $" + money;
};

function buyFertilizer() {
    let fertilizerCost = Math.floor(10 * Math.pow(1.1, fertilizerCount));
    if (money >= fertilizerCost) {
        fertilizerCount += 1;
        money -= fertilizerCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#fertilizers").innerHTML = "Count: " + fertilizerCount;
    }
    let nextCost = Math.floor(10 * Math.pow(1.1, fertilizerCount));
    document.querySelector("#fertilizerCost").innerHTML = "Cost: $" + nextCost;

}

function buyCryptoCurrency() {
    let cryptoCost = Math.floor(20 * Math.pow(1.2, cryptoCount));
    if (money >= cryptoCost) {
        cryptoCount += 1;
        money -= cryptoCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#cryptos").innerHTML = "Count: " + cryptoCount;
    }
    let nextCost = Math.floor(20 * Math.pow(1.2, cryptoCount));
    document.querySelector("#cryptoCost").innerHTML = "Cost: $" + nextCost;

}

function buyHedgeTrimmer() {
    let hedgeCost = Math.floor(30 * Math.pow(1.3, hedgeCount));
    if (money >= hedgeCost) {
        hedgeCount += 1;
        money -= hedgeCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#hedges").innerHTML = "Count: " + hedgeCount;
    }
    let nextCost = Math.floor(30 * Math.pow(1.3, hedgeCount));
    document.querySelector("#hedgeCost").innerHTML = "Cost: $" + nextCost;

}

function buyMoneySlide() {
    let slideCost = Math.floor(40 * Math.pow(1.4, slideCount));
    if (money >= slideCost) {
        slideCount += 1;
        money -= slideCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#slidess").innerHTML = "Count: " + hedgeCount;
    }
    let nextCost = Math.floor(40 * Math.pow(1.4, slideCount));
    document.querySelector("#slideCost").innerHTML = "Cost: $" + nextCost;

}

function buyGardener() {
    let gardenCost = Math.floor(50 * Math.pow(1.5, gardenCount));
    if (money >= gardenCost) {
        gardenCount += 1;
        money -= gardenCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#gardens").innerHTML = "Count: " + hedgeCount;
    }
    let nextCost = Math.floor(50 * Math.pow(1.5, gardenCount));
    document.querySelector("#gardenerCost").innerHTML = "Cost: $" + nextCost;

}

// how we update our game every second 

let moneypersec = setInterval(treeClick(fertilizerCount), 1000);
let moneypersec2 = setInterval(treeClick(cryptoCount), 1000);
let moneypersec3 = setInterval(treeClick(hedgeCount), 1000);
let moneypersec4 = setInterval(treeClick(slideCount), 1000);
let moneypersec5 = setInterval(treeClick(gardenCount), 1000);
function update() {
    /*moneypersec;
    moneypersec2;
    moneypersec3;
    moneypersec4;
    moneypersec5;*/
}
window.setInterval(function () {
    treeClick(fertilizerCount);
    treeClick(crytoCount);
    treeClick(hedgeCount);
    treeClick(slideCount);
    treeClick(gardenCount);
}, 1000);


