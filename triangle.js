class Triangle {
    constructor() {
        this.text = "";
    }
    setColor(colorShape) {
        this.text = `<polygon points="150,25 250,150 50,150" fill="${colorShape}"/>`;
    }
    render() {
        return this.text;
    }
}

module.exports = Triangle;