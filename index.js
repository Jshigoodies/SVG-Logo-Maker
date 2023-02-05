const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require("./circle.js");
const Triangle = require("./triangle.js");
const Square = require("./square.js");

function svgFileContent({text, colorText, shape, colorShape} , shapeContent) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeContent}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorText}">${text}</text>

    </svg>`;

}


inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Text for the Logo (up to three characters)",
        validate: function(input) {
            if(input.length <= 3) {
                return true;
            }
            else {
                return "Code must be 3 characters or less"
            }
        }
    },
    {
        type: "list",
        name: "colorText",
        message: "Choose a color for text",
        choices: ["red", "green", "blue", "yellow", "brown"]
    },
    {
        type: "list",
        name: "shape",
        message: "Type of shape",
        choices: ["square", "circle", "triangle"]
    },
    {
        type: "input",
        name: "colorShape",
        message: "Type a color for shape",
    },
    
    
])
.then((answers) => {
    var shapeContent = "";
    if(answers.shape == "circle") {
        const circleObj = new Circle();
        circleObj.setColor(answers.colorShape);
        shapeContent = circleObj.render();
    }
    else if(answers.shape == "triangle") {
        const triangelObj = new Triangle();
        triangelObj.setColor(answers.colorShape);
        shapeContent = triangelObj.render();
    }
    else if(answers.shape == "square") {
        const squareObj = new Square();
        squareObj.setColor(answers.colorShape);
        shapeContent = squareObj.render();
    }
    else {
        console.log("Error: no shape");
    }
    const content = svgFileContent(answers, shapeContent);
    fs.writeFile("logo.svg", content, (err) => 
        err ? console.log(err) : console.log("Created SVG file!")
    );
})
.catch((error) => {
    console.log("could not create file", error);
})