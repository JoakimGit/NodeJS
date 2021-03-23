$(document).ready(function() {
    $("#toggleDesign").click(function() {
      let value = $(this);
      if (value.text() === 'Show') { 
        value.text('Hide');
      } else {
        value.text('Show')
      }
      $("#design").toggle();
    });

    $("#toggleStart").click(function() {
      let value = $(this);
      if (value.text() === 'Show') { 
        value.text('Hide');
      } else {
        value.text('Show')
      }
      $("#startingPoint").toggle();
    });

    $("button").click(function() {
      let x = $(this).val();
      $(".hideable").hide();
      $("#"+x).show();
    });
  
  });