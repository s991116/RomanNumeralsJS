/// <reference path="./typings/globals/jasmine/index.d.ts" />

describe("Decimal to roman unittest",
     () => {
         [
             [1, "I"],
             [2, "II"],
             [8, "VIII"],
             [9, "IX"],
             [10, "X"],
             [16, "XVI"],
             [211, "CCXI"],
             [1234, "MCCXXXIV"]
         ].forEach(([decimal, expectedRoman]) => {             
                 it("Convert decimal value. should return '" + expectedRoman + "' for decimal value '" +  decimal  + "'",
                     () => {
                         var d = decimalToRoman(Number(decimal));
                         expect(d).toEqual(String(expectedRoman));
                     }
                 );
         });
    }
);

describe("Decimal to roman accepttest",
    () => {
        it("Convert decimal 2444 to 'MMCDXLIV'",
            () => {
                var v = decimalToRoman(2444);
                expect(v).toEqual("MMCDXLIV");
            });
        it("Convert decimal 1999 to 'MCMXCIX'",
            () => {
                var v = decimalToRoman(1999);
                expect(v).toEqual("MCMXCIX");
            });
        it("Convert decimal 99 to 'XC'",
            () => {
                var v = decimalToRoman(90);
                expect(v).toEqual("XC");
            });
    }
);