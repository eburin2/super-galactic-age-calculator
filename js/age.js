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
  }
