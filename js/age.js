export class Age {
  constructor(inputtedAge) {
    this.age = inputtedAge;
  }
 ageInSeconds() {
    return this.age * 31536000;
  }

 getDifference(startDate, endDate) {
    return endDate.getTime() - startDate.getTime();
  }

 ageInMerurianYears() {
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
}
