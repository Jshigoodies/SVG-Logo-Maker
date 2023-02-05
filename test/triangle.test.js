const Triangle = require("../triangle.js")

describe("circle" , () => {
    it("should return the line of code that makes a square", () => {
        const obj = new Triangle();
        obj.setColor("green");
        const result = obj.render();
        expect(result).toEqual(`<polygon points="150,25 250,150 50,150" fill="green"/>`);
    })
});
