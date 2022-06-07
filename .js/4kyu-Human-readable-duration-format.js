// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(formatDuration(1), "1 second");
  Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
  Test.assertEquals(formatDuration(120), "2 minutes");
  Test.assertEquals(formatDuration(3600), "1 hour");
  Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  
    });
  });
  

// my code

function formatDuration (seconds) {
  
    //establish the ternary conditionals around return variables  
    let returnSeconds = (seconds >= 60) ? (seconds%60):seconds;
    let returnMinutes = (seconds >= 60) ? Math.floor(seconds/60)%60:0;
    let returnHours = (seconds >= 3600) ? Math.floor(seconds/3600%24):0;
    let returnDays = (seconds >=86400) ? Math.floor(seconds/86400%365):0;
    let returnYears = (seconds >=31536000) ? Math.floor(seconds/31536000):0;
    
    //create the foundation return phrase
    let returnPhrase = "";
    let ar=[0,0,0,0,0];
    if (returnYears != 0){
      returnPhrase = returnPhrase.concat(`${returnYears} years, `)
      ar[0] = 1
      } 
    if (returnDays !=0){
      returnPhrase = returnPhrase.concat(`${returnDays} days, `)
      ar[1] = 1
    }
    if (returnHours !=0){
      returnPhrase = returnPhrase.concat(`${returnHours} hours, `)
      ar[2] = 1
    }
    if (returnMinutes !=0){
      returnPhrase = returnPhrase.concat(`${returnMinutes} minutes`)
      ar[3] = 1
    }
    if (returnSeconds !=0) {
      returnPhrase = returnPhrase.concat(`${returnSeconds} seconds`)
      ar[4] = 1
    }
    //Determine if more than one statement is made and if so, append with 'and'
    let arCount = ar.reduce( (acc,c) => acc + c,0)
    if (arCount > 1){
      if (ar[4] == 1){
        returnPhrase = returnPhrase.replace('minutes','minutes and ')
      }else if (ar[3] == 1){
        returnPhrase = returnPhrase.replace('hours, ', 'hours and ')
      }else if (ar[2] == 1){
        returnPhrase = returnPhrase.replace('days', 'days and ')
      }else if (ar[1] == 1){
        returnPhrase = returnPhrase.replace('years', 'years and')
      }
    }else{
      returnPhrase = returnPhrase.replace(', ',"")
    }
  
  
  //return cleanup
    switch (returnYears){
        case 1:
          returnPhrase = returnPhrase.replace('years','year')
          break;
        case "":
           returnPhrase = returnPhrase.replace('years, ','')
          break;
    }
    
    switch (returnDays){
      case 1:
        returnPhrase = returnPhrase.replace('days','day')
        break;
      case "":
        returnPhrase = returnPhrase.replace('days, ','')
        break;
      case 0:
        returnPhrase = returnPhrase.replace('days, ','')
    }
    switch (returnHours){
      case 1:
        returnPhrase = returnPhrase.replace('hours','hour')
        break;
      case "":
        returnPhrase = returnPhrase.replace('hours, ','')
        break;
      case 0:
        returnPhrase = returnPhrase.replace('hours, ','')
    }
      switch (returnMinutes){
      case 1:
        returnPhrase = returnPhrase.replace('minutes','minute')
        break;
      case "":
        returnPhrase = returnPhrase.replace('minutes and ','')
        break;
      case 0:
        returnPhrase = returnPhrase.replace('minutes and ','')
    }
    switch (returnSeconds){
      case 1:
        returnPhrase = returnPhrase.replace('seconds','second')
        break;
      case 0:
        returnPhrase = returnPhrase.replace('seconds','')
        break;
    }
    
    //final check to catch an input of 0 seconds
    returnPhrase = (seconds == 0) ? 'now':returnPhrase  
    
    
    return returnPhrase 
  }
