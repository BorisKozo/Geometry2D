/// <reference path="./../declaration/jasmine.d.ts" />
/// <reference path="./../src/geometry2d.ts" />

describe("geometry2d object tests", function () {
    it("should calculate orientation correctly", function () {
        var pOrigin = new Point(0, 0);
        var pUp = new Point(0, 1);
        var pUpUp = new Point(0, 2);
        var pLeft = new Point(-1, 1);
        var pRight = new Point(1, 1);

        expect(Geometry.orientation(pOrigin, pUp, pLeft)).toBe(Orientation.CCW);
        expect(Geometry.orientation(pOrigin, pUp, pRight)).toBe(Orientation.CW);
        expect(Geometry.orientation(pOrigin, pUp, pUpUp)).toBe(Orientation.CL);

    });
});