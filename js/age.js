
export class Age {
  constructor(inputtedAge) {
    this.age = inputtedAge;
    this.ageInSeconds = inputtedAge * 31536000;
    this.ageInMerurianYears = inputtedAge * 0.24;
    this.ageInVenusianYears = inputtedAge * 0.62;
    this.ageInMartianYears = inputtedAge * 1.88;
    this.ageInJovianYears = inputtedAge * 11.86;
  }

  var ageInSeconds = (60 * (60 * (24 * (365 * (parseToInt(userAge))))))
  return ageInSeconds;

}
