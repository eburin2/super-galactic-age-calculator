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

})
