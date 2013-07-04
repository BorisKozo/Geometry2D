/**
* Point
*
* @class Point
* @constructor
**/
class Point {
    /**
    * The x coordinate of this point
    * @property x
    * @type Number
    **/

    public x: number;

    /**
    * The y coordinate of this point
    * @property y
    * @type Number
    **/

    public y: number;

    /**
    * Creates a new point at (x,y)
    * @method Point
    * @param {Number} [x] The x coordinate of the point default 0
    * @param {Number} [y] The y coordinate of the point default 0
    * @return {Point} A point at (x,y)
    **/

    constructor(x: number = 0, y: number = 0 ) {
        this.x = x;
        this.y = y;
    }

    /**
    * Creates a new Point at the coordinates of this point
    * @method clone
    * @return {Point} A new Point at the coordinates of this point
    **/

    clone() {
        return new Point(this.x, this.y);
    }

    
}
