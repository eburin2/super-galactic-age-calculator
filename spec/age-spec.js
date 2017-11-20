import { Age } from "./../js/age.js";

describe('Age', function(){
  let inputtedAge;

  // beforeEach(function() {
  //   // set up before each test.
  // });

  it('it will calculate your age into seconds', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInSeconds).toEqual(1135296000);
  })

  // it('should convert the time between two dates into seconds', function() {
  //     startDate = new Start(2017, 11, 17);
  //     endDate = new End(2017, 11, 24);
  //   expect(endDate.getTime() - startDate.getTime()).toEqual(604800);
  // });

  it('it will calculate your age into Mercurian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInMerurianYears).toEqual(8.64);
  })

  it('it will calculate your age into Venusian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInVenusianYears).toEqual(22.32);
  })

  it('it will calculate your age into Martian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInMartianYears).toEqual(67.67999999999999);
  })

  it('it will calculate your age into Jovian years', function(){
    inputtedAge = new Age(36);
    expect(inputtedAge.ageInJovianYears).toEqual(426.96);
  })

})
