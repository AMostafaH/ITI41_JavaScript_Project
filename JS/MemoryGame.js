/*================ Start Game ==================*/

// Select Start Game button
document.getElementById("startgame").onclick = function () {
    
    // Ask for Player Name
    var yourName = prompt("What's Your Name ?");

    // Check player Name
    if (yourName === "" || yourName === null) {
        document.getElementById("playername").innerHTML = "Unkown";
    } else {
        document.getElementById("playername").innerHTML = yourName;
    }
    
    // Remove Overlay Screen
    document.getElementById("overlay").remove();
    showAllImages();
    setTimeout(hideAllImages,3000);
}
/*-------------------------------------*/
/*-------------------------------------*/
var timeCounter = document.querySelector(".timer");
var seconds = 0;
var minutes = 0;
var timeStart = false;
var time;
function timer() {
	// Update the count every 1 second
	time = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		// Update the timer in HTML with the time it takes the user to play the game
		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "<span class='timerfont'> Timer : </span>" + minutes + " Mins " + seconds + " Secs" ;
	}, 1000); 
}

/* Stop the timer once the user has matched all cards */
function stopTime() {
	clearInterval(time);
}
/*-------------------------------------*/
// Define Duration 
var duration = 1000;
// Select Blocks Container
var blocksContainer = document.querySelector(".game-block");
//console.log(blocksContainer);
// Create Array from Block Container
var blocks = Array.from(blocksContainer.children);
//console.log(blocks);

// Create Range of Keys
var orderRange = Array.from(Array(blocks.length).keys());
//console.log(ordeRange);

/* Start Custom Edit for swapping between Easy And Difficult Mode */

//Get Swapping Button
var Easy = document.getElementById("easy");
var Difficult = document.getElementById("difficult");

Easy.onclick = function () {
    for(var i=0;i<blocks.length;i++)
    {
        document.querySelectorAll(".img-block")[i].classList.remove("difficult");
    }
    for(var i=0;i<14;i++)
    {
        document.querySelectorAll(".difMode")[i].classList.remove("additional");
    }
    resetAll();
}
Difficult.onclick =function () {
    
    for(var i=0;i<blocks.length;i++)
    {
        document.querySelectorAll(".img-block")[i].classList.add("difficult");
    }
    for(var i=0;i<14;i++)
    {
        document.querySelectorAll(".difMode")[i].classList.add("additional");
    } 
    resetAll();
}
function resetAll(){

    // Stop time, reset the minutes and seconds update the time inner HTML
	stopTime();
	timeStart = false;
	seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "<span class='timerfont'> Timer : </span>" + "00 : 00";

    // Reset moves count and reset its inner HTML
    overallTries.innerHTML = 0;
    wrongTries.innerHTML = 0;

    // Remove Class is-flipped & is-matched from all Cards
    for(var i=0;i<blocks.length;i++)
    {
        document.querySelectorAll(".img-block")[i].classList.remove("is-flipped");
        document.querySelectorAll(".img-block")[i].classList.remove("is-matched");
    }     

    // Rearrange Cards
    randomArrange(orderRange);

    // Add Order Css Property To Game Blocks
    blocks.forEach(function (block, index) {

        // Add CSS Order Property
        block.style.order = orderRange[index];
    });

    setTimeout(showAllImages,1000);
    setTimeout(hideAllImages,4000);
}
// Action for clicking Reset Button
document.getElementById("reset").onclick = function(){
    resetAll();
} 

/* End Custom Edit for swapping between Easy And Difficult Mode */

/* Show Images before Starting The Game for 3 Seconds */
function showAllImages() {
    for(var i=0;i<blocks.length;i++)
        document.querySelectorAll(".img-block")[i].classList.add("is-flipped");
}

/* Hiding Images After Starting The Game */
function hideAllImages() {
    for(var i=0;i<blocks.length;i++)
        document.querySelectorAll(".img-block")[i].classList.remove("is-flipped");
}
// console.log(orderRange);
randomArrange(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach(function (block, index) {

    // Add CSS Order Property
    block.style.order = orderRange[index];

    // Add Click Event
    block.addEventListener('click', function () {

        // Trigger The Flip Block Function
        flipBlock(block);
        if (timeStart === false) {
			timeStart = true; 
            timer();
        }
    });

});

/*-------------------------------------*/
// Stop Clicking Function to prevent player selecting more than two blocks
function stopClicking() {

    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');

    // Wait Duration
    setTimeout(function () {

        // Remove Class No Clicking After The Duration
        blocksContainer.classList.remove('no-clicking');

    }, duration);
}
/*-------------------------------------*/
// Function to Flip Block during Click event
function flipBlock(element) {
    // Add Class is-flipped
    element.classList.add("is-flipped");
    var flippedBlocks = element.parentElement.querySelectorAll(".is-flipped");
    var matchedBlocks = element.parentElement.querySelectorAll(".is-matched");
    //console.log(flippedBlocks);
    // Check if There is two blocks are Selected
    if (flippedBlocks.length === 2) {
        // Stop Clicking
        stopClicking()

        // Check Matched Block Function 
      checkMatchedBlocks(flippedBlocks[0], flippedBlocks[1]);
    }
    // Check if All blocks are Selected to create New Game Popup Screen
    if (matchedBlocks.length === (blocks.length)-2 && flippedBlocks.length === 2) {
        setTimeout(function () {
           document.querySelector(".try-again").style.display = "block";
           document.getElementById("playerGameInfo").innerHTML = "You made "+ overallTries.innerHTML + " Moves and "+ wrongTries.innerHTML +" of them are wrong you have spent "+ minutes + " Mins " + seconds + " Secs trying to solve it.";
        }, duration)
        stopTime();
    }
}
/*-------------------------------------------*/
// Start New Game
var startNewGame = document.querySelector(".try-again .yes");
startNewGame.onclick = function () {
    window.location.reload();
}
// Cancel playing
var cancelButton = document.querySelector(".try-again .no");
cancelButton.onclick = function () {
    document.querySelector(".try-again").style.display = "none";
}

/*-------------------------------------*/
// Check Matched Block
var wrongTries = document.getElementById("wrongMoves");
var overallTries = document.getElementById("allMoves");
function checkMatchedBlocks(firstBlock, secondBlock) {
  
    if (firstBlock.dataset.img === secondBlock.dataset.img) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('is-matched');
      secondBlock.classList.add('is-matched');
  
      document.getElementById('success').play();
      overallTries.innerHTML = parseInt(overallTries.innerHTML) + 1;
  
    } else {
  
        wrongTries.innerHTML = parseInt(wrongTries.innerHTML) + 1;
        overallTries.innerHTML = parseInt(overallTries.innerHTML) + 1;
  
      setTimeout(function () {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
  
      document.getElementById('fail').play();
  
    }
}
/*-------------------------------------*/
// Function to make random number will be used in (element.style.ordr) property
function randomArrange(array) {
    var current = array.length,
     randomNumber,
     temp;

    while (current > 0) {

        randomNumber = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[randomNumber];
        array[randomNumber] = temp;

    }
    return array;
}
/*================ End Game ==================*/