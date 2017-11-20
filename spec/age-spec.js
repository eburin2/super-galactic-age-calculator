import { Age } from "./../js/age.js";

describe('Age', function(){
  let trialAge;

  // beforeEach(function() {
  //   // set up before each test.
  // });

  it('it will calculate your age into seconds', function(){
    trialAge = new Age(36);
    expect(trialAge.ageInSeconds).toEqual(1135296000);
  })

  it('it will calculate your age into Mercurian years', function(){
    trialAge = new Age(36);
    expect(trialAge.ageInMerurianYears).toEqual(8.64);
  })

  it('it will calculate your age into Venusian years', function(){
    trialAge = new Age(36);
    expect(trialAge.ageInVenusianYears).toEqual(22.32);
  })

  it('it will calculate your age into Martian years', function(){
    trialAge = new Age(36);
    expect(trialAge.ageInMartianYears).toEqual(67.67999999999999);
  })

  it('it will calculate your age into Jovian years', function(){
    trialAge = new Age(36);
    expect(trialAge.ageInJovianYears).toEqual(426.96);
  })


})
