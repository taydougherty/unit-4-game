var wins = 0;
var losses = 0;
var crystals = ["assets/images/blue_jewel.jpg", "assets/images/green_jewel.jpg", "assets/images/orange_jewel.jpg", "assets/images/yellow_jewel.jpg"];
var yourScore=0;


$(document).ready(function(){

// Computer generates random number
var compNum = Math.floor(Math.random()*(120-19)+1);
$("#random-number").text(compNum);

// Each jewel is assigned a random number
    function crystalRandom(){
        for (var i=0; i < crystals.length; i++) {
            var images = $("<img>");
            var button = $("<button>");

            images.attr("src",  crystals[i]);
            images.attr("data-number", Math.floor(Math.random()*12)+1);
            images.append(button);
            $(".crystals").append(images);
        }
    }

// When you click on the jewel your total score changes
    function totalScore(){
        yourScore = 0;

            $("img").on("click", function(){
                var userClick = parseInt($(this).attr("data-number"));
                yourScore += userClick;

                $("#final-score").html(yourScore);

// // Once your score === or exceeds the computer the wins/loses tallies (if/else)
                    if (yourScore === compNum) {
                        wins++;
                        $("#wins").html("Wins: " + wins);
                        $(".crystals").empty();
                        // // Once you win/lose the computer number and jewels reset
                        crystalRandom();
                        reset();
                    }

                    else if (yourScore > compNum) {
                        losses++;
                        $("#losses").html("Losses: " + losses);
                        $(".crystals").empty();
                        crystalRandom();
                        reset();
                    }
            })
    }

// // // Reset computer number and user score
function reset() {
    compNum = Math.floor(Math.random()*(120-19)+1);
    $("#random-number").text(compNum);
    yourScore = 0;
    $("#final-score").html(yourScore);
    totalScore();
};

crystalRandom();
totalScore();

});