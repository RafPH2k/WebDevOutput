
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "china") {
		correct++;
}
	if (question2 == "Bear") {
		correct++;
}	
	if (question3 == "Cub") {
		correct++;
}
    if (question4 == "Bamboo") {
		correct++;
}
	if (question5 == "Because they don't have enough food") {
		correct++;
}
    
	var pictures =["Pix/prize1.png","Pix/prize3.png","Pix/prize4.png"]
	var messages = ["Great you're a Lovely Panda!", "It's okay you're still a Panda.", "You really need to do better or else Panda's will die.","Well Done! King of Pandas!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 3;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
