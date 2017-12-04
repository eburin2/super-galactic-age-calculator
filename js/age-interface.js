import { Age } from './../js/age.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    let earthYears = $("#age-input").val();
    let age = new Age(earthYears);


    let ageInSeconds = age.ageInSeconds(earthYears);
    let mercurianAge = age.ageInMercurianYears(earthYears);
    let venusianAge = age.ageInVenusianYears(earthYears);
    let martianAge = age.ageInMartianYears(earthYears);
    let jovianAge = age.ageInJovianYears(earthYears);
    let lifeExpectancy = age.lifeExpectancy(earthYears);



    $("#output").show();
    $("#age-output").text(`you are ${earthYears} Earth years old`);
    $("#seconds-output").text(`you are ${ageInSeconds} seconds old`);
    $("#mercury-output").text(`you are ${mercurianAge} Mercurian years old`);
    $("#venus-output").text(`you are ${venusianAge} Venusian years old`);
    $("#mars-output").text(`you are ${martianAge} Martian years old`);
    $("#jupiter-output").text(`you are ${jovianAge} Jovian years old`);
    $("#expectancy-output").text(`${lifeExpectancy}`);

    $("form").hide();
  });
});
