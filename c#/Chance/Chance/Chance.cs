namespace CleanCode.Chance;

public class Chance
{
    private readonly int successes = 0;
    private readonly int totalOutcomes = 0;

    public Chance(int numberOfSuccesses, int numberOfTotalOutcomes)
    {
        successes = numberOfSuccesses;
        totalOutcomes = numberOfTotalOutcomes;
    }

    public bool Equals(Chance compareTo) {
        var thisLikelihood = (decimal)successes / totalOutcomes;
        var compareLikelihood = (decimal)compareTo.successes / compareTo.totalOutcomes;

        return thisLikelihood == compareLikelihood;
    }
}
