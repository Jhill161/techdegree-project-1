/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*
GOING FOR EXCEEDS EXPECTATIONS GRADE
*/

/*** 
  Array of objects containing all the quotes, sources, citations, years.
***/
let quotes = [
  {quote: "Rarely is the question asked: is our children learning?", source: "-- George W. Bush", citation: "", year: "", tag: "Humor"},
  {quote: "Coffee isn't my cup of tea.", source: "-- Samuel Goldwyn", citation: "", year: "", tag: "Humor"},
  {quote: "Do, or do not. There is no “try”.", source: "-- Yoda", citation: "-- Star Wars: Episode V – The Empire Strikes Back", year: "1980", tag: "Inspirational"} ,
  {quote: "Every man dies, but not every man really lives.", source: "-- William Wallace", citation: "-- Braveheart", year: "1995", tag: ""},
  {quote: "The Way Get Started Is To Quit Talking And Begin Doing.", source: "-- Walt Disney", citation: "", year: "", tag: "Inspirational"},
  {quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", source: "-- Winston Churchill", citation: "", year: "", tag: ""},
  {quote: "Don’t Let Yesterday Take Up Too Much Of Today.", source: "-- Will Rodgers", citation: "", year: "", tag: ""},
  {quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", source: "-- Unknown", citation: "", year: "", tag: ""}
];

/*
Random background color generator.
*/
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
  }

/***
 Create function getRandomQuote.  
 Generates variable num.
 Generates a random number between 0 and length of quotes. 
 Assignes quotes the value of num. 
 Returns quote.
***/
function getRandomQuote(quote){
  let num = Math.floor(Math.random() * quotes.length);
  quote = quotes[num]
  return quote;
}



/***
  Print function.  Creates variable and assigns Random Quote via the previous getRandomQuote function.
  Creates variable string, and assigned the formatted string containing the quotes properties.
  If statesments to print year and citation if present in the random quote.
  Target the element id quote-box html and assigned string variable.
***/
function printQuote(){
  let quote = getRandomQuote();
  let string = '';
  string = "<p class = 'quote'>" + quote.quote + "</p>"; 
  string += "<p class = 'source'>" + quote.source;
  if(quote.citation){
    string += "<span class = 'citation'>" + quote.citation  + "</span>";
  }
  if(quote.year){
    string += "<span class = 'year'>" + quote.year + "</span>";
  }
  if(quote.tag){
    string += "<span class = 'tag'>" + quote.tag + "</span>";
  }
  string += "</p>";
  //console.log(string);
  document.getElementById('quote-box').innerHTML = string;
  random_bg_color();
}



/***
 Event listener to print quote when button is clicked.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 5000);

