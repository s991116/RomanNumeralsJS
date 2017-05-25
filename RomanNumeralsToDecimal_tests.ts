/// <reference path="./typings/globals/jasmine/index.d.ts" />

describe("Roman to decimal unittest",
     () => {
         it("Convert single letter",
             () => {
                 var d = romanToDecimal("I");
                 expect(d).toEqual(1);
             });
         it("Same letter then add values",
             () => {
                 var d = romanToDecimal("II");
                 expect(d).toEqual(2);
             });
         it("Small value before larger value then add values",
             () => {
                 var d = romanToDecimal("XI");
                 expect(d).toEqual(11);
             });
         it("Large value before smaller value then subtract values",
             () => {
                 var d = romanToDecimal("IX");
                 expect(d).toEqual(9);
             });
         it("Repeat same letter value more than 3 times gives an error",
             () => {
                 expect(() => { romanToDecimal("IIII"); }).toThrowError();
             });
         it("More than one smaller value infront of greater gives an error",
             () => {
                 expect(() => { romanToDecimal("IIV"); }).toThrowError();
             });
         it("Letter 'I' can only be infront of 'X' or 'V' otherwice its gives an error",
             () => {
                 expect(() => { romanToDecimal("IM"); }).toThrowError();
             });
         it("Letter 'X' can only be infront of 'L' or 'C' otherwice its gives an error",
             () => {
                 expect(() => { romanToDecimal("XM"); }).toThrowError();
             });
         it("Letter 'V' cannot be infront of larger values",
             () => {
                 expect(() => { romanToDecimal("VM"); }).toThrowError();
             });
         it("Non valid roman letters gives an error",
             () => {
                 expect(() => { romanToDecimal("IA"); }).toThrowError();
             });
     }
);
describe("Roman to decimal accepttest",
    () => {
        it("Convert roman 'MMCDXLIV' should be 2444",
            () => {
                var v = romanToDecimal("MMCDXLIV");
                expect(v).toEqual(2444);
            });
        it("Convert roman 'MCMXCIX' should be 1999",
            () => {
                var v = romanToDecimal("MCMXCIX");
                expect(v).toEqual(1999);
            });
        it("Convert roman 'XC' should be 90",
            () => {
                var v = romanToDecimal("XC");
                expect(v).toEqual(90);
            });
    }
);