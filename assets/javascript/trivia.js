var question1 = {
    text: "What is Prince's real name?",
    answer: "Prince Rogers Nelson",
    wrong: ["Roger Nelson", "Nelson Rogers", "Nelson King"],
    correct: false
}

var question2 = {
    text: "What was the name for Prince's symbol? (when he went by 'The Artist formerly known as Prince')",
    answer: "Love Symbol #2",
    wrong: ["Love Potion Number 9", "The Artist", "Prince Symbol", "It didn't have a name."],
    correct: false
}

var question3 = {
    text: "Which of the following songs wasn't written by Prince?",
    answer: "I Wanna Dance With Somebody",
    wrong: ["Jungle Love", "Nothing Compares 2 U", "Manic Monday"],
    correct: false
}

var question4 = {
    text: "In 2017, Pantone named a shade of purple for Prince.  What did they name it?",
    answer: "Love Symbol #2",
    wrong: ["Purple Rain", "Love Potion #9", "Purple Reign"],
    correct: false
}

var questionsArray = [question1, question2, question3, question4];
var questionsLength = questionsArray.length;
var questionsAsked = 0;
var intervalID;
var timer=10;

$("#startButton").click(function(){
    populateQuestions(questionsArray);
    $("#trivia-container").css('display', 'none');
    $("#questions").css('display', 'inherit');

});

function populateQuestions(array) {
    intervalID = setInterval(timer, 10000);

    for (var i =0; i < array.length; i++) {
        var questionDisplay = $("<h3>");

        questionDisplay.text(array[i].text)
        console.log(questionDisplay.text(array[i].text))
        $("#questions").append(questionDisplay);
    }

    var questionDisplay = $("<h3>");





	$("#questions").html("<div><h4>" + array.text);
	$("#answers").html("<div class='text-center btn btn-info btn-block' data-correct='true'>" + array.answer);

	// for (var i = 0; i < array.wrong.length; i++) {
	// // 	$("#answers").append("<div class='text-center btn btn-info btn-block' data-correct='false'>" + array.wrong[i]);
	// // };

}

