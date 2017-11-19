import { Age } from "./../js/age.js";

describe('Age', function(){
  let testAge;

  beforeEach(function() {
    // set up before each test.
  });

it('should calculate the age of someone into seconds', function() {
    let age = new Age();
    expect(calculator.ageInSeconds(36)).toEqual(1135296000);
