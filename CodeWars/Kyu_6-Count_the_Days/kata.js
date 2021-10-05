function countDays(d){
  let difference = new Date(d).getTime() - new Date().getTime(); // in milliseconds
  let days = Math.round(difference / (1000 * 60 * 60* 24));  // in days 

  let message = (days > 0) ? `${days} days` : "The day is in the past!";
  if(days == 0) message = "Today is the day!"; 
  return message;
}

