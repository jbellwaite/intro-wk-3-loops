$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var originalsentence = $("#original").val();
    var secondsentence = "";
    for (var index = 0; index < originalsentence.length; index ++) {
      var currentcharacter = originalsentence[index];
      if  ((currentcharacter === "a") ||
          (currentcharacter === "e") ||
          (currentcharacter === "i") ||
          (currentcharacter ==="o") ||
          (currentcharacter === "u") ) {
            secondsentence += ("-");
          }
      else {
        secondsentence += (currentcharacter);
      }
    }
    $("#output").append(secondsentence).show();
    $("#original").hide();

  });
});
