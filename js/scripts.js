$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeStartInput = $("input#timeStart").val();
    var timeEndInput = $("input#timeEnd").val();

    $(".person").text(personInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".timeStart").text(timeStartInput);
    $(".timeEnd").text(timeEndInput);

    $("#confirm").show();

    event.preventDefault();
    });

  $(".btnModal").click(function(){
    $("#myModal").modal();
  });

});
