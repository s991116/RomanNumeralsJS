class RomanLetterValue {
    decimalValue: number;
    romanLetter: string;
}

var romanLetters = [
    {
        decimalvalue: 1,
        romanLetter: "I"
    },
    {
        decimalvalue: 5,
        romanLetter: "V"
    },
    {
        decimalvalue: 10,
        romanLetter: "X"
    },
    {
        decimalvalue: 50,
        romanLetter: "L"
    },
    {
        decimalvalue: 100,
        romanLetter: "C"
    },
    {
        decimalvalue: 500,
        romanLetter: "D"
    },
    {
        decimalvalue: 1000,
        romanLetter: "M"
    }
];

function romandToDecimal(romanNumeral: string) {
    return romanLetters.filter(item => item.romanLetter === romanNumeral)[0].decimalvalue;
    //return romanLetters.find((x) => x.romanLetter === romanNumeral);
};
