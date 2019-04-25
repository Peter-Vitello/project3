/*Game Variables*/
let money = 0;
let tree = document.querySelector("#treetoclick");
let moneyText = document.getElementById("moneyamount");
let fertilizerCount = 0;
let cryptoCount = 0;
let hedgeCount = 0;
let slideCount = 0;
let gardenCount = 0;
let fertilizerValue = 1 * fertilizerCount;
let cryptoValue = 2 * cryptoCount;
let hedgeValue = 3 * hedgeCount;
let slideValue = 4 * slideCount;
let gardenValue = 5 * gardenCount;
let clickedAgain = false;
let treeClickSound = new Sound("media/ka-ching.mp3");

//Used for resetting game
function resetGame(){
    let money = 0;
let tree = document.querySelector("#treetoclick");
let moneyText = document.getElementById("moneyamount");
let fertilizerCount = 0;
let cryptoCount = 0;
let hedgeCount = 0;
let slideCount = 0;
let gardenCount = 0;
let fertilizerValue = 1 * fertilizerCount;
let cryptoValue = 2 * cryptoCount;
let hedgeValue = 3 * hedgeCount;
let slideValue = 4 * slideCount;
let gardenValue = 5 * gardenCount;
}

//functions 
function treeClick(number) {
    money = money + number;
    document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
    treeClickSound.play();
    clickedAgain = true;    
    //tried to make it so that the audio pauses once it is clicked, didnt work
    /*
    if(clickedAgain === true){
        treeClickSound.stop();
        treeClickSound.reset();
        clickedAgain = false;
    }*/

};

function upgradesClick(number){
    money = money + number;
    document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
}

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
    fertilizerValue = 1 * fertilizerCount;

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
    cryptoValue = 2 * cryptoCount;

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
    hedgeValue = 3 * hedgeCount;

}

function buyMoneySlide() {
    let slideCost = Math.floor(40 * Math.pow(1.4, slideCount));
    if (money >= slideCost) {
        slideCount += 1;
        money -= slideCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#slides").innerHTML = "Count: " + slideCount;
    }
    let nextCost = Math.floor(40 * Math.pow(1.4, slideCount));
    document.querySelector("#slideCost").innerHTML = "Cost: $" + nextCost;
    slideValue = 4 * slideCount;

}

function buyGardener() {
    let gardenCost = Math.floor(50 * Math.pow(1.5, gardenCount));
    if (money >= gardenCost) {
        gardenCount += 1;
        money -= gardenCost;
        document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
        document.querySelector("#gardens").innerHTML = "Count: " + gardenCount;
    }
    let nextCost = Math.floor(50 * Math.pow(1.5, gardenCount));
    document.querySelector("#gardenerCost").innerHTML = "Cost: $" + nextCost;
    gardenValue = 5 * gardenCount;

}

// how we update our game every second 
function update(){
    upgradesClick(fertilizerValue);
    upgradesClick(cryptoValue);
    upgradesClick(hedgeValue);
    upgradesClick(slideValue);
    upgradesClick(gardenValue);
    document.getElementById("floatdiv").style.display = "none";
}
function gameLoop(){
    update();
}
//requestAnimationFrame(gameLoop);
window.setInterval(gameLoop,
    1000);

/*Save Function*/
let txw4522save = {};
function save(){
    txw4522save= {
        Money: money,
        FertilizerCount: fertilizerCount,
        CryptoCount: cryptoCount,
        HedgeCount: hedgeCount,
        SlideCount: slideCount,
        GardenCount: gardenCount
    }
    try {
        localStorage.setItem("txw4522-save",JSON.stringify(txw4522save));
    } catch (error) {
        console.log(error);
    }
}



//Load Function
function load(){
    resetGame();
    let savedGame = JSON.parse(localStorage.getItem("txw4522-save"));
    if(typeof savedGame.Money !== null) money = savedGame.Money;
    document.querySelector("#moneyamount").innerHTML = "Money: $" + money;
    if(typeof savedGame.FertilizerCount !==null) fertilizerCount = savedGame.FertilizerCount;
    let nextCost = Math.floor(10 * Math.pow(1.1, fertilizerCount));
    document.querySelector("#fertilizerCost").innerHTML = "Cost: $" + nextCost;
    document.querySelector("#fertilizers").innerHTML = "Count: " + fertilizerCount;
    if(typeof savedGame.CryptoCount !==null) cryptoCount = savedGame.CryptoCount;
    nextCost = Math.floor(20 * Math.pow(1.2, cryptoCount));
    document.querySelector("#cryptoCost").innerHTML = "Cost: $" + nextCost;
    document.querySelector("#cryptos").innerHTML = "Count: " + cryptoCount;
    if(typeof savedGame.HedgeCount !== null) hedgeCount = savedGame.HedgeCount;
    document.querySelector("#hedges").innerHTML = "Count: " + hedgeCount;
    nextCost = Math.floor(30 * Math.pow(1.3, hedgeCount));
    document.querySelector("#hedgeCost").innerHTML = "Cost: $" + nextCost;
    if(typeof savedGame.SlideCount !== null) slideCount = savedGame.SlideCount;
    document.querySelector("#slides").innerHTML = "Count: " + slideCount;
    nextCost = Math.floor(40 * Math.pow(1.4, slideCount));
    document.querySelector("#slideCost").innerHTML = "Cost: $" + nextCost;
    if(typeof savedGame.GardenCount !==null) gardenCount = savedGame.GardenCount;
    document.querySelector("#gardens").innerHTML = "Count: " + gardenCount;
    nextCost = Math.floor(50 * Math.pow(1.5, gardenCount));
    document.querySelector("#gardenerCost").innerHTML = "Cost: $" + nextCost;
}

// event handler function
//src: https://plainjs.com/javascript/events/getting-the-current-mouse-position-16/
function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    document.getElementById("floatdiv").style.left = pageX+ "px";
    document.getElementById("floatdiv").style.top = pageY+"px"
    document.getElementById("floatdiv").style.display = "block";
}

// attach handler to the click event of the document
if (tree.attachEvent) tree.attachEvent('onclick', handler);
else tree.addEventListener('click', handler);

//Sound Handling
//src: https://www.w3schools.com/graphics/game_sound.asp
//Class expressions is used here
const MySound = class Sound{ 
    sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
          this.sound.pause();
        }
        this.sound.loop = true;
      }
}
let bgMusic = new MySound();
function startGame(){
    bgMusic.sound("media/CoupleNStarryNight.mp3")
    bgMusic.play();
    bgMusic.sound.volume = .5;
}
let volumeSilder = document.querySelector("#volumeslider");
volumeSilder.addEventListener("change",setVolume, false);
function setVolume(){
    bgMusic.sound.volume = volumeSilder.value / 100;
}

