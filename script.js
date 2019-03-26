$("#clue").hide();
$(".disappearing-message").dblclick(function() {
    $(".disappearing-message").hide();
});
$(".instructions").click(function() {
    $("#second-message").text("Now press title to see next clue");
});
$("h1").click(function() {
    $("#clue").show();
});