import { Age } from './../js/age.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let earthYears = $("#age-input").val();
    let age = new Age(earthYears);

    let ageInSeconds = age.ageInSeconds(earthYears);
    let ageOnMercury = age.ageInMerurianYears(earthYears);
    let ageOnVenus = age.ageInVenusianYears(earthYears);
    let ageOnMars = age.ageInMartianYears(earthYears);
    let ageOnJupiter = age.ageInJovianYears(earthYears);

    console.log(typeof(earthYears));

    $("#output").show();
    $("#age-output").text(`you are ${earthYears} Earth years old`);
    $("#seconds-output").text(`you are ${ageInSeconds} seconds old`);
    $("#mercury-output").text(`you are ${ageOnMercury} Mercurian years old`);
    $("#venus-output").text(`you are ${ageOnVenus} Venusian years old`);
    $("#mars-output").text(`you are ${ageOnMars} Martian years old`);
    $("#jupiter-output").text(`you are ${ageOnJupiter} Jovian years old`);

    $("form").hide();
  });
});
