function appendText() {
	var input = document.getElementById ("myMessage").value;
	$(".scrollable").append('<div class="message">' + input + '</div>');
}