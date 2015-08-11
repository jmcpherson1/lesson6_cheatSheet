//jQuery Libraries
	//Inside of the <head> section of the HTML file, include a copy of the jQuery <script>


//Events: When something has been loaded
	//Load Driven Events
		.ready()

	//User Driven Events
		.click()
		.mouseOver()
		.mouseOut()
		.keyUp()
		.keyDown()
		.keyPress()


//Debugging - Use the console to test by calling its functions
	console.log();
	alert();


//Select elements - select elements using a similar syntax to CSS
	$("body") //should return an Array with selected elements: [><body>...</body>]
	
	//The format for selecting elements is:
		$("<element name, class, id, or XPath>")
		$("<element identifier")

		//Example: 
		$("p")
		$(".main-nav")
		$("ul li")


//Writing jQuery
$(document).ready(function() { //ensures that your code doesn't run until your document fires a ready event
	$("sample").hide();
});


//Annonymous Function - another way to write functions, can be given an argument
function(){
alert("I am anonymous!");
}

	//Anonymous functions can be stored in variables:
	var my_anon_func = function(){ alert("Har!"); }

//Document ready
	$(document).ready(function(){
		alert("The document is ready!");
		}
	);