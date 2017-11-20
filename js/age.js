export class Age {
  constructor(inputtedAge) {
    this.age = inputtedAge;
    this.ageInSeconds = inputtedAge * 365 * 24 * 60 * 60;
  }

}
