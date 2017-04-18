$(document).ready(function() {
	console.log("working!")
});

$("form").submit(function(e) {
        e.preventDefault();
        window.location = "thanks.html";
});
