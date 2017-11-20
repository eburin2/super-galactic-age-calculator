import { Age } from './../js/age.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    console.log("YO!");
    let earthYears = $('#age-input').val();
    let ageInSeconds = $(earthYears * 31536000);
    $('#output').text(earthYears);
    $("form").hide();
  });
});
