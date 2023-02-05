const Square = require("../square.js")

describe("circle" , () => {
    it("should return the line of code that makes a square", () => {
        const obj = new Square();
        obj.setColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<rect width="100%" height="100%" fill="blue" />`);
    })
});