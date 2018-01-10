$(document).ready(function() {
  $("#nameInput").submit(function(event) {
    var userInput = $("input#userName").val();
    $(".userName").text(userInput);

    $("#letter").show();

    event.preventDefault();
  })
})
