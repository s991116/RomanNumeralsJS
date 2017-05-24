/// <reference path="./typings/globals/jasmine/index.d.ts" />

describe("Roman unittest",
     () => {
         it("Convert single letter",
             () => {
                 var d = romandToDecimal("I");
                 expect(d).toEqual(1);
             });
     });