import { Age } from "./../js/age.js";

describe('Age', function(){
  let inputtedAge;
  let startDate;
  let endDate;

  // beforeEach(function() {
  //   // set up before each test.
  // });

  it('should calculate your age into seconds', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInSeconds()).toEqual(1135296000);
  })

  it('should convert the time between two dates into seconds', function() {
      inputtedAge = new Age(36);
      startDate = new Date("2017-11-24");
      endDate = new Date("2017-11-25");
    expect(inputtedAge.getDifference(startDate, endDate)).toEqual(86400);
  })

  it('should calculate your age into Mercurian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInMerurianYears()).toEqual(8.64);
  })

  it('should calculate your age into Venusian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInVenusianYears()).toEqual(22.32);
  })

  it('should calculate your age into Martian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInMartianYears()).toEqual(67.67999999999999);
  })

  it('should calculate your age into Jovian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInJovianYears()).toEqual(426.96);
  })

  it('should calculate how many years a user has left to live on Earth', function() {
    expect(inputtedAge.lifeExpectancy()).toEqual(`There is this unmistakable premonition that you won't be pushing up the daisies for another ${79 - inputtedAge.age} years.`);
  })
})
