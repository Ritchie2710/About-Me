function quiz() {
	let name = prompt("what is your name");
	let Game = alert("let the games begin");

	let film = prompt("Is Star wars one of my favourite movies??");
	if (film.toLowerCase() === "yes") {
		alert("YOU ARE ONE WITH THE FORCE!!");
	} else if (film.toLowerCase() === "no") {
		alert("I have failed you Anakin, I have failed you!");
	}

	let food = prompt("Mexican is one of my favourite foods??");
	if (food.toLowerCase() === "yes") {
		alert(" Its not going in this stomach!!");
	} else if (food.toLowerCase() === "no") {
		alert("What kind of meatball do you think this is!!!");
	}
	let outdoors = prompt(
		"I prefer to sit on my sofa than to get out and go for a walk??"
	);
	if (outdoors.toLowerCase() === "yes") {
		alert("WHAT DO YOU THINK I AM SOME KIND OF COUCH POTATO!!");
	} else if (outdoors.toLowerCase() === "no") {
		alert("No complaints here lets get out! !");
	}
	let xbox = prompt("Do I prefer xbox over playstation??");
	if (xbox.toLowerCase() === "yes") {
		alert("Master Chief is awaiting our arrival!!");
	} else if (xbox.toLowerCase() === "no") {
		alert("What do you know peseant!");
	}
	let colour = prompt("Is my favourite colour aqua blue??").toLowerCase();
	if (colour === "yes") {
		alert("I mean who doesnt like aqua blue!!");
	} else if (colour === "no") {
		alert("Whats wrong with you try again!!");
	}

	let question = prompt(
		"Which number in my top ten is a water falls at Platres pick between 1 and 10 "
	);
	// if (question.toLowerCase() = "9") {
	let answer = 9;
	let number = prompt("guess a number between 1-10");
	for (let i = 1; i <= 8; i++) {
		if (number > answer) {
			alert("too high");
			number = prompt("guess again");
		} else if (number < answer) {
			alert("too low!");
			number = prompt("guess again!");
		} else if (parseInt(number) === answer) {
			alert("Your right its a beautiful waterfall in cyrpus ");
		}
	}

<<<<<<< HEAD
	// }  else if (question.toLowerCase() === "1") {
	//   alert(" too low try again!!");
	// } else if (question.toLowerCase() === "2") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "3") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "5") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "6") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "7") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "8") {
	//   alert("too low try again!!");
	// } else if (question.toLowerCase() === "10") {
	//   alert("too high try again!!");

	let movie = prompt("what are some of my favourite films?");
	if (question.toLowerCase() === "Jurassic park") {
		alert("Correct this is one of my favouriet films ");
	} else if (question.toLowerCase() === "Gladiator") {
		alert(" Correct this is one of my favouriet films ");
	} else if (question.toLowerCase() === "John Wick") {
		alert(" Correct this is one of my favouriet films ");
	}
}
=======
 
// }
>>>>>>> 35a5db9 (udpate)
