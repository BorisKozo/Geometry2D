/// <reference path="./../declaration/jasmine.d.ts" />

/**
* This is a comment
*/
describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", () => {
    var a;
    it("and so is a spec", () => {
        a = true;
        expect(a).toBe(true);
    });
});