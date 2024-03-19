namespace Chance.Tests;
using CleanCode.Chance;

public class ChanceTests
{
    [Fact]
    public void EqualsReturnsTrueIfTwoChancesAreTheSame()
    {
        var rollsOne = new Chance(1, 6);
        var rollsTwo = new Chance(1, 6);

        Assert.True(rollsOne.Equals(rollsTwo));
    }

    [Fact]
    public void EqualsReturnsTrueIfTwoDifferentChancesAreTheSame()
    {
        var oneThird = new Chance(1, 3);
        var twoSixths = new Chance(2, 6);

        Assert.True(oneThird.Equals(twoSixths));
    }

    [Fact]
    public void EqualsReturnsFalseIfTwoChancesAreNotTheSame()
    {
        var oneThird = new Chance(1, 3);
        var twoThirds = new Chance(2, 3);

        Assert.False(oneThird.Equals(twoThirds));
    }
}