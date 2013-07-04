var Point = (function () {
    function Point(x, y) {
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    return Point;
})();
var Orientation;
(function (Orientation) {
    Orientation[Orientation["CW"] = -1] = "CW";

    Orientation[Orientation["CCW"] = 1] = "CCW";

    Orientation[Orientation["CL"] = 0] = "CL";
})(Orientation || (Orientation = {}));
var Geometry = (function () {
    function Geometry() {
    }
    Geometry.orientation = function (p1, p2, p3) {
        var ccw = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
        if (ccw == 0) {
            return Orientation.CL;
        }

        if (ccw > 0) {
            return Orientation.CCW;
        }

        return Orientation.CW;
    };
    return Geometry;
})();
