function Circle(radius) {
    this.radius = radius;

    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    }

    this.getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(3);
console.log(`Area: ${circle.getArea()}`);
console.log(`Perimeter: ${circle.getPerimeter()}`);
