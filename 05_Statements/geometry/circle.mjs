export { Circle };

class Circle {
    #r = new Number();
    constructor(radius) {
      this.#r = radius - 0;
    }
    #calculateArea = () => {
      return Math.PI * this.#r ** 2;
    }
    area = () => {
      return this.#calculateArea();
    }
    circumference = () => {
      return 2 * Math.PI * this.#r;
    }
    radius = () => {
      return this.#r;
    }
}
  
  console.log([new Circle(9).radius(), new Circle(9).area(), new Circle(9).circumference()]);
