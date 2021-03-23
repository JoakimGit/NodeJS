$(document).ready(function() {

    $("button").click(function() {
      let x = $(this).val();
      $(".hideable").hide();
      $("#"+x).show();
    });
  });