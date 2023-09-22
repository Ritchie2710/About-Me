function quiz() {
  let points = 0;
  let name = prompt("what is your name");
  let Game = alert("let the games begin");

  let film = prompt("Is Star wars one of my favourite movies??");
  if (film.toLowerCase() === "yes") {
    alert("YOU ARE ONE WITH THE FORCE!!");
    points++;
  } else if (film.toLowerCase() === "no") {
    alert("I have failed you Anakin, I have failed you!");
  }

  let food = prompt("Mexican is one of my favourite foods??");
  if (food.toLowerCase() === "yes") {
    alert(" Its not going in this stomach!!");
    points++;
  } else if (food.toLowerCase() === "no") {
    alert("What kind of meatball do you think this is!!!");
  }
  let outdoors = prompt(
    "I prefer to sit on my sofa than to get out and go for a walk??"
  );
  if (outdoors.toLowerCase() === "yes") {
    alert("WHAT DO YOU THINK I AM SOME KIND OF COUCH POTATO!!");
    points++;
  } else if (outdoors.toLowerCase() === "no") {
    alert("No complaints here lets get out! !");
  }
  let xbox = prompt("Do I prefer xbox over playstation??");
  if (xbox.toLowerCase() === "yes") {
    alert("Master Chief is awaiting our arrival!!");
    points++;
  } else if (xbox.toLowerCase() === "no") {
    alert("What do you know peseant!");
  }
  let colour = prompt("Is my favourite colour aqua blue??").toLowerCase();
  if (colour === "yes") {
    alert("I mean who doesnt like aqua blue!!");
    points++;
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
      points++;
      break;
    }
  }

  alert("Thats the end did you do well " + points + "out of 7 points");

  // let movie = prompt("what are some of my favourite films?");
  // if (question.toLowerCase() === "Jurassic park") {
  //   alert("Correct this is one of my favouriet films ");
  // } else if (question.toLowerCase() === "Gladiator") {
  //   alert(" Correct this is one of my favouriet films ");
  // } else if (question.toLowerCase() === "John Wick") {
  //   alert(" Correct this is one of my favouriet films ");
}
