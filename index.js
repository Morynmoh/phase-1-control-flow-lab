//function scuberGreetingForFeet(ride){
  // Write your code here!
 //   let message;
   // if (ride <= 400) {
     // message = "This one is on me!";
    //} else if (ride > 400 && ride <= 2000) {
      //message = "The amount is 30 dollars";
    //} else if (ride > 2500) {
      //message = "This ride is not allowed";
    //} else {
      //message = "No riding";
    //}
    //return message;
  //}
  
  //console.log(scuberGreetingForFeet(199));
  //console.log(scuberGreetingForFeet(5000));

function scuberGreetingForFeet(distance) {
      // Write your code here!
    if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 400 && distance <= 2000) {
      return 'I will gladly take your thirty bucks.';
    } else if (distance > 2500) {
      return 'No can do.';
    } else {
      return 'I will gladly take your thirty bucks.';
    }
  }

//function ternaryCheckCity(city){
  // Write your code here!
 // let message;
  //if (city = NYC){
  //message = "Ok, sounds good.";
  //} else {
    //message = "No go."
  //}
//}

function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
    // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}