/// <reference path="./../../declaration/jasmine.d.ts" />
/// <reference path="./../../src/Primitives/point.ts" />

describe("Point functionality ", function () {
    it(" should create a point with no parameters", function () {
        var point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    it(" should create a point at (1,2)", function () {
        var point = new Point(1,2);
        expect(point.x).toBe(1);
        expect(point.y).toBe(2);
    });

})