function quiz() {
  let name = prompt("what is your name");

  // let color = prompt("What is your favorite colour?");

  // console.log(color);
  // console.log(color.toLowerCase())

  // switch (color.toLowerCase()) {
  //     case 'x':
  //     case 'red':
  //         console.log('Your favorite color was red!');
  //         break;
  //     case 'blue':
  //         console.log('Your favorite color was blue!');
  //         break;
  //     case 'green':
  //         console.log('Your favorite color was green!');
  //         break;
  //     case 'Yellow':
  //         console.log('Your favorite color was Yellow!');
  //         break;
  //     case 'Purple':
  //         console.log('Your favorite color was Purple!');
  //         break;
  //      case 'Orange':
  //         console.log('Your favorite color was Orange!');
  //         break;
  //     case 'black':
  //         console.log('Your favorite color was black!');
  //         break;
  //     case 'Pink':
  //         console.log('Your favorite color was Pink!');
  //         break;
  //     case 'grey':
  //         console.log('Your favorite color was grey!');
  //         break;
  //     case 'Turquoise':
  //         console.log('Your favorite color was Turquoise!');
  //         break;
  //     case 'White':
  //         console.log('Your favorite color was White!');
  //         break;
  //     case 'brown':
  //         console.log('Your favorite color was Brown!');
  //         break;
  //     default:
  //         console.log(`I don't know what kind of color is that!!!!)

  let film = prompt(
    "Return of the jedi the greatest Star wars film of all time??"
  );
  if (film.toLowerCase() === "yes") {
    alert("YOU ARE ONE WITH THE FORCE!!");
  } else if (film.toLowerCase() === "no") {
    alert("I have failed you Anakin, I have failed you!");
  }

  let food = prompt("Italian is the best food??");
  if (food.toLowerCase() === "yes") {
    alert("Cant beat a good carbonara!!");
  } else if (food.toLowerCase() === "no") {
    alert("What kind of meatball do you think this is!!!");
  }
  let outdoors = prompt(
    "You cant beat getting outside and walking about in the coutryside??"
  );
  if (outdoors.toLowerCase() === "yes") {
    alert("No complaints here!!");
  } else if (outdoors.toLowerCase() === "no") {
    alert("WHAT ARE YOU A COUCH POTATO!");
  }
  let xbox = prompt("Xbox is the best console??");
  if (xbox.toLowerCase() === "yes") {
    alert("Master Chief is awaiting our arrival!!");
  } else if (xbox.toLowerCase() === "no") {
    alert("What do you know peseant!");
  }
  let country = prompt("Can you think of a question??");
  if (country.toLowerCase() === "yes") {
    alert("Someone got some sleep last night!!");
  } else if (country.toLowerCase() === "no") {
    alert("Glad we are in the same boat!!");
  }
}
