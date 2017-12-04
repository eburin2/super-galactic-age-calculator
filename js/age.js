export class Age {
  constructor(inputtedAge) {
    this.age = inputtedAge;
  }


  ageInSeconds() {
    return this.age * 31536000;
  }

  getDifference(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime())/1000;
  }

  ageInMercurianYears() {
   return this.age * 0.24;
  }

  ageInVenusianYears() {
   return this.age * 0.62;
  }

  ageInMartianYears() {
   return this.age * 1.88;
  }

  ageInJovianYears() {
   return this.age * 11.86;
  }


  lifeExpectancy() {
    if (this.age > 79) {
      return "Well... You beat the odds you old battle axe, way to go CHAMP!";
    } else {
      return `There is this unmistakable premonition that you won't be pushing up the daisies for another ${79 - this.age} years.`;
    }
  }
}
