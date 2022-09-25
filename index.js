function scuberGreetingForFeet(lengthOfRideInfeets){
  // Write your code here!
  if (lengthOfRideInfeets <= 400){
     return 'This one is on me!';
    }
  else if (lengthOfRideInfeets > 2000 && lengthOfRideInfeets < 2500){
   return 'I will gladly take your thirty bucks.';
    }
  else if(lengthOfRideInfeets > 2500){
    return 'No can do.';
    }
}

function ternaryCheckCity(location){
  // Write your code here!
  if (location === 'NYC') {
    return 'Ok, sounds good.';
    }
  else{
    return 'No go.';
    }
}

function switchOnCharmFromTip(appreciation){
  // Write your code here!
  switch(appreciation){
    case "generous" :
      return "Thank you so much."
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'

  }
  
}