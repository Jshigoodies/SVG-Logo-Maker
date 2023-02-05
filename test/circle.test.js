const Circle = require("../circle.js")

describe("circle" , () => {
    it("should return the line of code that makes a circle", () => {
        const obj = new Circle();
        obj.setColor("red");
        const result = obj.render();
        expect(result).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
    })
});