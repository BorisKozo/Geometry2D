/// <reference path="enums.ts"/>
/// <reference path="Primitives/point.ts"/>

/**
* The Geometry class provides a set of static functions for various
* geometric queries and manipulations
* @class Geometry
**/
class Geometry {
    
    /**
    * Calculates the orientation of ```p3``` with respect to the line between ```p1``` and ```p2```
    * @method orientation
    * @param {Point} p1 The first point
    * @param {Point} p2 The second point
    * @param {Point} p3 The third point
    * @return {Orientation} The orientation of ```p3``` with respect to ```p1``` to ```p2```
    **/

    public static orientation(p1: Point, p2: Point, p3: Point): Orientation {
        var ccw = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
        if (ccw == 0) {
            return Orientation.CL;
        }

        if (ccw > 0) {
            return Orientation.CCW;
        }

        return Orientation.CW;

    }
}