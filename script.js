const container = document.querySelector("#sketchpad")
const resizeButton = document.querySelector("#resize")
const randomizeButton = document.querySelector("#randomize")

const chosenColor = document.querySelector("#chosenColor")
const redButton = document.querySelector("#red")
const orangeButton = document.querySelector("#orange")
const yellowButton = document.querySelector("#yellow")
const greenButton = document.querySelector("#green")
const blueButton = document.querySelector("#blue")
const violetButton = document.querySelector("#violet")
const whiteButton = document.querySelector("#white")
const blackButton = document.querySelector("#black")

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function changeColor(color) {
    redButton.classList.remove("colorSelected")
    orangeButton.classList.remove("colorSelected")
    yellowButton.classList.remove("colorSelected")
    greenButton.classList.remove("colorSelected")
    blueButton.classList.remove("colorSelected")
    violetButton.classList.remove("colorSelected")
    whiteButton.classList.remove("colorSelected")
    blackButton.classList.remove("colorSelected")

    randomizeButton.classList.remove("randomizeSelected")

    switch (color) {
        case "red":
            redButton.classList.add("colorSelected")
            break;
        case "orange":
            orangeButton.classList.add("colorSelected")
            break;
        case "yellow":
            yellowButton.classList.add("colorSelected")
            break;
        case "green":
            greenButton.classList.add("colorSelected")
            break;
        case "blue":
            blueButton.classList.add("colorSelected")
            break;
        case "violet":
            violetButton.classList.add("colorSelected")
            break;
        case "white":
            whiteButton.classList.add("colorSelected")
            break;
        case "black":
            blackButton.classList.add("colorSelected")
            break;
        case "randomize":
            randomizeButton.classList.add("randomizeSelected")
            break;
    }
    currentColor = color;
    console.log("Changed color")
}

redButton.addEventListener("click", () => changeColor("red"))
orangeButton.addEventListener("click", () => changeColor("orange"))
yellowButton.addEventListener("click", () => changeColor("yellow"))
greenButton.addEventListener("click", () => changeColor("green"))
blueButton.addEventListener("click", () => changeColor("blue"))
violetButton.addEventListener("click", () => changeColor("violet"))
whiteButton.addEventListener("click", () => changeColor("white"))
blackButton.addEventListener("click", () => changeColor("black"))
randomizeButton.addEventListener("click", () => changeColor("randomize"))

changeColor("red")


//in pixels
const containerWidth = 960;
let tilesPerRow = 16


drawGrid(tilesPerRow)

resizeButton.addEventListener("click", () => {
    const size = prompt("What size? (16-100)")

    if (size < 16 || size > 100) {
        alert("Invalid size specified.")
        return;
    }

    resize(size)
})

function resize(tilesPerRow) {
    deleteGrid()
    drawGrid(tilesPerRow)
    //resizeButton.textContent = "Resize " + `(${tilesPerRow})`
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

let isDrawing = false;
document.addEventListener("mousedown", (e) => {
    e.preventDefault() // for some reason this makes drawing much smoother
    console.log("mdown ")
    isDrawing = true;
})
document.addEventListener("mouseup", (e) => {
    console.log("m up")
    isDrawing = false;
})


function drawGrid(tilesPerRow) {

    function colorTile(div, color) {
        if (color === "randomize") {
            div.style.backgroundColor = getRandomColor();
        } else {
            div.style.backgroundColor = color;
        }


    }

    let tileWidth = containerWidth / tilesPerRow

    for (let i = 0; i < tilesPerRow * tilesPerRow; i++) {
        const div = document.createElement("div")
        div.setAttribute("class", "tile")
        div.addEventListener("mousemove", (e) => { if (isDrawing) { colorTile(div, currentColor) } })
        div.style.flex = `0 0 ${tileWidth}px`
        div.style.height = `${tileWidth}px`
        container.appendChild(div)
    }
}


