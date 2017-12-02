import { Age } from './../js/age.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let inputtedAge = $('#age-input').val();
    let age = new Age();

    let ageInSeconds = age.ageInSeconds(inputtedAge);
    // let ageOnMercury = age.ageInMerurianYears(earthYears);
    // let ageOnVenus = age.ageInVenusianYears(earthYears);
    // let ageOnMars = age.ageInMartianYears(earthYears);
    // let ageOnJupiter = age.ageInJovianYears(earthYears);


    $("#output").text("You are "+ ageInSeconds +" Earth years old!");

    $("form").hide();
  });
});
