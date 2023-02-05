class Square {
    constructor() {
        this.text = "";
    }
    setColor(shapeColor) {
        this.text = `<rect width="100%" height="100%" fill="${shapeColor}" />`;
    }
    render() {
        return this.text;
    }
}

module.exports = Square;