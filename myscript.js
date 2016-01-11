var books={"Books":[
{"name":"INFERNO","author":"Dan Brown","price":" &#8377 20","isbn":"128431K37"},
{"name":"DA VINCI CODE","author":"Dan Brown","price":" &#8377 20","isbn":"143431K78"},
{"name":"THE HUNGER GAMES","author":"Suzanne Collins","price":" &#8377 50","isbn":"729401K97"},
{"name":"HALF GIRLFRIEND","author":"Chetan Bhagat","price":" &#8377 10","isbn":"894431H08"},
{"name":"THE GOOGLE STORY","author":"David Vise","price":" &#8377 30","isbn":"963431X67"},
{"name":"INTERPRETER OF MALADIES","author":"Jhumpa Lahiri","price":" &#8377 15","isbn":"795431T62"},
{"name":"PARIS TRANCE","author":"Geoff Dyer","price":" &#8377 20","isbn":"169742K64"},
{"name":"THE INVISIBLE MAN","author":"H.G.Wells","price":" &#8377 20","isbn":"749360K82"},
{"name":"THE FAULT IN OUR STARS","author":"John Green","price":" &#8377 25","isbn":"783572J75"},
{"name":"THE RACKETEER","author":"John Grisham","price":" &#8377 20","isbn":"673562H98"},
{"name":"THE ALCHEMIST","author":"Paulo Cohelo","price":" &#8377 20","isbn":"563982K61"}
]};

var out="";
var i;
for(i=0;i<=10;i++){
  out+= '<li onclick="details(' + i +')">' + books.Books[i].name + '</li>' + '<hr>';
}
addEventListener("load", function(){
  document.getElementById("lists").innerHTML = out;
});

function details(a){
  var out1='NAME: ' + books.Books[a].name  + '<br>' + 'AUTHOR: ' + books.Books[a].author + '<br>' + 'PRICE: ' + books.Books[a].price + '<br>' + 'ISBN: ' + books.Books[a].isbn + '<br>' ;
  document.getElementById("Details").innerHTML = out1 ;
}

function viewBook(ISBN){
  for(i=0;i<=10;i++){
    if(books.Books[i].isbn === ISBN)
      return (books.Books[i].name);
  }
}
