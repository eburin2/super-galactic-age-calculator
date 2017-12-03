export class Age {
  constructor(inputtedAge) {
    this.age = inputtedAge;
  }


  ageInSeconds(inputtedAge) {
    return this.age * 31536000;
  }

  getDifference(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime())/1000;
  }

  ageInMerurianYears(inputtedAge) {
   return this.age * 0.24;
  }

  ageInVenusianYears(inputtedAge) {
   return this.age * 0.62;
  }

  ageInMartianYears(inputtedAge) {
   return this.age * 1.88;
  }

  ageInJovianYears(inputtedAge) {
   return this.age * 11.86;
  }


  //calculate planetary excess of life expectancy
  lifeExpectancy() {
    if (this.age > 79) {
      return "You're no spring chicken, but you've got grit!";
    } else {
      return `Doesn't look like you'll pushing up the daisies for another ${79 - this.age} years.`;
    }
  }
}
