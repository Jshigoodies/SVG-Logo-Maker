class Circle {
    constructor() {
        this.text = "";
    }
    setColor(colorShape) {
        this.text = `<circle cx="150" cy="100" r="80" fill="${colorShape}" />`;
    }
    render() {
        return this.text;
    }
}

module.exports = Circle;