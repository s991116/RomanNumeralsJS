class RomanLetterValue {
    decimalValue: number;
    romanLetter: string;
    inFrontOf: string;
}

var romanLetters = [
    {
        decimalvalue: 1,
        romanLetter: "I",
        infrontOf: "VX"
    },
    {
        decimalvalue: 5,
        romanLetter: "V",
        infrontOf: ""
    },
    {
        decimalvalue: 10,
        romanLetter: "X",
        infrontOf: "LC"
    },
    {
        decimalvalue: 50,
        romanLetter: "L",
        infrontOf: ""
    },
    {
        decimalvalue: 100,
        romanLetter: "C",
        infrontOf: "DM"
    },
    {
        decimalvalue: 500,
        romanLetter: "D",
        infrontOf: ""
    },
    {
        decimalvalue: 1000,
        romanLetter: "M",
        infrontOf: ""
    }
];

function romanToDecimal(romanNumeral: string) {
    var value = 0;
    var previousValue = 0;
    if (toManyRepeatedLetter(romanNumeral))
        throw new Error("Not a valid roman value '" + romanNumeral + "'");
    for (var index = 0, len = romanNumeral.length; index < len; index++) {
        var currentValue = getRomanValue(romanNumeral[index]);
        if (previousValue < currentValue)
            value += (currentValue-2*previousValue);
        else
            value += currentValue;
        previousValue = currentValue;
    }
    return value;


    function getRomanValue(romanLetter: string) {
        return romanLetters.filter(item => item.romanLetter === romanLetter)[0].decimalvalue;
    }

    function smallerValueRepeated(previeus: string, current: string, index: number) {
        if(index === 0)
            return current;
        if (getRomanValue(previeus[0]) < getRomanValue(current[0])) {
            if (previeus.length > 1)
                throw new Error("To many repeats");
            if (!letterCanBeInfrontOf(previeus[0], current[0])) {
                throw new Error("Letter '" + previeus[0] + "' cannot be infront of '" + current[0] + "'.");
            }

        }
        return current;
    }

    function letterCanBeInfrontOf(letterInfront: string, letterBehind: string) {
        return romanLetters.filter((x) => x.romanLetter === letterInfront)[0].infrontOf.indexOf(letterBehind) !== -1;
    }

    function toManyRepeatedLetter(romanNumeral: string) {
        var repeatedLetters = (romanNumeral.toUpperCase().match(/([A-Z])\1*/g));

        if (repeatedLetters && (repeatedLetters.filter((x) => x.length > 3)).length > 0)
            return true;
        repeatedLetters.reduce(smallerValueRepeated);

        return false;
    };
};


