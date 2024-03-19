class Chance {
    constructor(numberOfSuccesses, numberOfTotalOutcomes) {
        this.successes = numberOfSuccesses;
        this.totalOutcomes = numberOfTotalOutcomes;
        
    }

    equals(compareTo) {
        return this.successes / this.totalOutcomes === compareTo.successes / compareTo.totalOutcomes
    }

    invert() {
        let unsuccessfulOutcomes = this.totalOutcomes - this.successes;
        return new Chance(unsuccessfulOutcomes, this.totalOutcomes);
    }
}

module.exports = Chance