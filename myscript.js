var books={"Books":[
{"name":"INFERNO","author":"Dan Brown","price":"20","isbn":"128431K37"},
{"name":"DA VINCI CODE","author":"Dan Brown","price":"20","isbn":"143431K78"},
{"name":"THE HUNGER GAMES","author":"Suzanne Collins","price":"50","isbn":"729401K97"},
{"name":"HALF GIRLFRIEND","author":"Chetan Bhagat","price":"10","isbn":"894431H08"},
{"name":"THE GOOGLE STORY","author":"David Vise","price":"30","isbn":"963431X67"},
{"name":"INTERPRETER OF MALADIES","author":"Jhumpa Lahiri","price":"15","isbn":"795431T62"},
{"name":"PARIS TRANCE","author":"Geoff Dyer","price":"20","isbn":"169742K64"},
{"name":"THE INVISIBLE MAN","author":"H.G.Wells","price":"20","isbn":"749360K82"},
{"name":"THE FAULT IN OUR STARS","author":"John Green","price":"25","isbn":"783572J75"},
{"name":"THE RACKETEER","author":"John Grisham","price":"20","isbn":"673562H98"},
{"name":"THE ALCHEMIST","author":"Paulo Cohelo","price":"20","isbn":"563982K61"}
]};

addEventListener("load", function(){
	loadBooks();

});

addEventListener("load", function(){
	document.getElementById("addBook").onclick=function(){
		document.getElementById("bookDetailsContainer").style.display = 'none';
		document.getElementById("addBookContainer").style.display = 'block';
	}
});

function loadBooks() {
	var htmlOut="";
	for(var i=0;i<books.Books.length;i++) {
		htmlOut+= '<li><a onclick="return viewBook(\'' + books.Books[i].isbn +'\')">' + books.Books[i].name + '</a></li>' + '<hr>';
	}
	document.getElementById("lists").innerHTML = htmlOut;
}

function viewBook(ISBN){
	document.getElementById("bookDetailsContainer").style.display = 'block';
	document.getElementById("addBookContainer").style.display = 'none';

	for(var i=0;i<books.Books.length;i++){
		if(books.Books[i].isbn === ISBN) {
			var htmlBookDetails = 'NAME: ' + books.Books[i].name  + '<br>' + 'AUTHOR: ' + books.Books[i].author + '<br>' + 'PRICE: &#8377;' + books.Books[i].price + '<br>' + 'ISBN: ' + books.Books[i].isbn + '<br>' ;
			document.getElementById("bookDetails").innerHTML = htmlBookDetails ;
			break;
		}
	}
	return false;
}
