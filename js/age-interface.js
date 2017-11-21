import { Age } from './../js/age.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let earthYears = $('#age-input').val();
    $("#output").text("You are "+ earthYears +" Earth years old!");
    $("form").hide();
  });
});
