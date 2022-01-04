

function createDeck() {
    var suitS = ["S", "H", "D", "C"];
    var cardS = ["K", "Q", "J", "A", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

    var deck = [];

    for (var scount = 0; scount < suitS.length; scount++) {
        for (var ccount = 0; ccount < cardS.length; ccount++) {
            var card = suitS[scount] + cardS[ccount];
            deck.push(card);
        }
    }
    return deck;
}

// console.log(deck)

function deckShuffle(inputDeck) {
    for (let index = 0; index < inputDeck.length; index++) {
        var tempCard = inputDeck[index];
        var randomIndex = Math.floor(Math.random() * inputDeck.length);
        inputDeck[index] = inputDeck[randomIndex];
        inputDeck[randomIndex] = tempCard;
    }
}

    function drawCard(inputDeck) {
        return inputDeck.splice(0, 51)
    }

function start(){
    var testDeck = createDeck();
    // console.log(testDeck)
    // deckShuffle(testDeck);
    // console.log(testDeck)
    var drawing = drawCard(testDeck);
    // console.log(testDeck)
    console.log(drawing)

    x1 = Math.floor(Math.random() * 51)
    x2 = Math.floor(Math.random() * 51)
    x3 = Math.floor(Math.random() * 51)
    x4 = Math.floor(Math.random() * 51)
    x5 = Math.floor(Math.random() * 51)
    
    
    var path1 = "./Cards/Cards/" + drawing[x1] + ".png"
    var path2 = "./Cards/Cards/" + drawing[x2] + ".png"
    var path3 = "./Cards/Cards/" + drawing[x4] + ".png"
    var path4 = "./Cards/Cards/" + drawing[x5] + ".png"
    var path5 = "./Cards/Cards/" + drawing[x3] + ".png"
    
    
    $("#turn1").attr("src", path1);
    $("#turn2").attr("src", path2);
    $("#turn3").attr("src", path3);
    $("#flop").attr("src", path4);
    $("#river").attr("src", path5);

    

    
    console.log(path)
}
    
    x6 = Math.floor(Math.random())
    x7 = Math.floor(44)
    x8 = Math.floor(31)
    x9 = Math.floor(25)

    var path6 = "./Cards/Cards/" + drawing[x6] + ".png"
    var path7 = "./Cards/Cards/" + drawing[x7] + ".png"
    var path8 = "./Cards/Cards/" + drawing[x8] + ".png"
    var path9  = "./Cards/Cards/" + drawing[x9] + ".png"

    $("#p1Card1").attr("src", path6);
    $("#p1Card2").attr("src", path7);
    $("#p2Card1").attr("src", path8);
    $("#p2Card2").attr("src", path9);


// var newElement = document.getElementsById('#butt');

// newElement.onclick = start();

