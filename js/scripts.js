$(function(){
  var formContents = {};
  $("#appointment-form").submit(function (event) {
    formContents = {
      name:      $("#name").val(),
      date:      $("#date").val(),
      startTime: $("#start").val(),
      endTime:   $("#end").val()
    }

    $("#name-display").attr("value", formContents.name);
    $("#date-display").attr("value", formContents.date);
    $("#start-display").attr("value", formContents.startTime);
    $("#end-display").attr("value", formContents.endTime);

    $("#appointment-form").hide();
    $("#confirm-display").removeClass();
    event.preventDefault();
  });

  // $(window).load(function() {
  //   // $("#name-display").attr("value", formContents.name);
  //   // $("#date-display").attr("value", formContents.date);
  //   // $("#start-display").attr("value", formContents.startTime);
  //   // $("#end-display").attr("value", formContents.endTime);
  //   console.log("confirm-display loaded!");
  // });
});
