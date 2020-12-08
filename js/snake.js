import pulse from "./pulse.js"
var timer, snakeX, snakeY, up = true,
    down = true,
    right = true,
    left = true

var delay = 40
let snakeArray = []
export default function snake(snakX, snakY, x, y) {
    snakeX = snakX
    snakeY = snakY
    snakeArray[0] = String(snakeY)
    snakeArray[0] += snakeX < 10 ? "0" + String(snakeX) : snakeX
    let snake = document.getElementById(snakeArray[0])
    snake.classList.add('green')
    document.onkeydown = function(e) {
        document.body.style.overflow = 'hidden';

        switch (e.key) {
            case "ArrowDown":
                if (down && (up || (snakeArray.length == 1))) {
                    down = false
                    up = true, right = true, left = true
                    clearTimeout(timer)
                    snakeY = snakeY == y - 1 ? 0 : snakeY + 1
                    move(x, y)
                    timerF("down", x, y)
                }
                break;
            case "ArrowUp":
                if ((down || (snakeArray.length == 1)) && up) {
                    up = false
                    down = true, right = true, left = true
                    clearTimeout(timer)
                    snakeY = snakeY == 0 ? y - 1 : snakeY - 1
                    move(x, y)
                    timerF("up", x, y)
                }
                break;
            case "ArrowRight":
                if (right && (left || (snakeArray.length == 1))) {
                    right = false
                    up = true, down = true, left = true
                    clearTimeout(timer)
                    snakeX = snakeX == x - 1 ? 0 : snakeX + 1
                    move(x, y)
                    timerF("right", x, y)
                }
                break;
            case "ArrowLeft":
                if ((right || (snakeArray.length == 1)) && left) {
                    left = false
                    up = true, down = true, right = true
                    clearTimeout(timer)
                    snakeX = snakeX == 0 ? x - 1 : snakeX - 1
                    move(x, y)
                    timerF("left", x, y)
                }
                break;
            case " ":
                clearTimeout(timer)
                break;
            default:
                break;
        }
    }
}

function check(x, y, pos) {
    let newSnakeX = snakeX < 10 ? "0" + String(snakeX) : snakeX
    let ch = document.getElementById(String(snakeY) + newSnakeX)
    if (ch.classList.contains("red")) {
        ch.classList.remove("red")
        delay--
        pulse(x, y);
        return false
    } else {
        return true
    }

}

function timerF(func, x, y) {
    timer = setTimeout(function tick() {
        switch (func) {
            case "left":
                snakeX = snakeX == 0 ? x - 1 : snakeX - 1
                move(x, y)
                break;
            case "right":
                snakeX = snakeX == x - 1 ? 0 : snakeX + 1
                move(x, y)
                break;
            case "up":
                snakeY = snakeY == 0 ? y - 1 : snakeY - 1
                move(x, y)
                break;
            case "down":
                snakeY = snakeY == y - 1 ? 0 : snakeY + 1
                move(x, y)
                break;
        };
        timer = setTimeout(tick, delay * 25)
    }, delay * 25);
}




function move(x, y) {
    check2()
    let s
    if (check(x, y)) {
        s = document.getElementById(snakeArray[0])
        s.classList.remove("green")
        snakeArray.shift()
    }
    let newSnakeX = snakeX < 10 ? "0" + String(snakeX) : snakeX
    snakeArray.push(String(snakeY) + newSnakeX)
    s = document.getElementById(snakeArray[snakeArray.length - 1])
    s.classList.add("green")
}

function check2() {
    let newSnakeX = snakeX < 10 ? "0" + String(snakeX) : snakeX
    let ch = document.getElementById(String(snakeY) + newSnakeX)
    if (ch.classList.contains("green")) {
        clearTimeout(timer)
        for (let i = 0; i < snakeArray.length; i++) {
            let s = document.getElementById(snakeArray[i])
            console.log(snakeArray[i]);
            s.classList.remove("green")
        }
        up = true
        down = true
        right = true
        left = true
        delay = 40
        snakeArray = []
        snakeArray[0] = String(snakeY)
        snakeArray[0] += snakeX < 10 ? "0" + String(snakeX) : snakeX
        alert("GameOver")
    }
}