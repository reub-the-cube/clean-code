const Chance = require('./chance')

// Divide by zero test
// Equals = types of certainty (1,1) vs (3,3) etc
// Equals = types of impossible (0,1) vs (0,3) etc

describe('Test chances are equal', () => {
    it('Equal returns true when chances are the same', () => {
        let chanceOfAOne = new Chance(1, 6);
        expect(chanceOfAOne.equals(new Chance(1, 6))).toBe(true);
    });

    it('Equal returns false when chances are not the same', () => {
        let chanceOfAOne = new Chance(1, 6);
        let chanceOfAnEven = new Chance(3, 6);
        expect(chanceOfAOne.equals(chanceOfAnEven)).toBe(false);
    });

    it('Equals true when two different chances that are the same are compared', () => {
        let flipsHeads = new Chance(1, 2);
        let rollsEven = new Chance(3, 6);
        expect(flipsHeads.equals(rollsEven)).toBe(true)
    })
});

describe('Test chance has an inverse', () => {
    it('Inverting chance of fifty-fifty returns chance of not happening', () => {
        let flipsHeads = new Chance(1, 2);
        let notFlipsHeads = new Chance(1, 2);
        expect(flipsHeads.invert()).toEqual(notFlipsHeads);
    });

    it('Inverting chance of fifty-fifty returns chance of not happening x', () => {
        let flipsHeads = new Chance(2, 6);
        let notFlipsHeads = new Chance(2, 3);
        expect(flipsHeads.invert()).toEqual(notFlipsHeads);
    });

    it('Inverting chance returns chance of not happening', () => {
        let rollsOne = new Chance(1, 6);
        let notRollOne = new Chance(10, 12);

        let invert = rollsOne.invert();
        expect(notRollOne.equals(invert)).toBe(true);
    });

    it('Inverting certainty returns no chance', () => {
        let certainty = new Chance(1, 1);
        let noChance = new Chance(0, 3);

        let invert = certainty.invert()
        expect(noChance.equals(invert)).toBe(true);
    });
});