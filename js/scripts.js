$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#person").append("blah blah");
    $("#description").append("blah blah");
    $("#date").append("blah blah");
    $("#timeStart").append("blah blah");
    $("#timeEnd").append("blah blah");

    $("#confirm").show();

    event.preventDefault();
  });
})
