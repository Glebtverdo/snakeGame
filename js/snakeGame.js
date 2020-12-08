import pole from "./pole.js"
import snake from "./snake.js"
import pulse from "./pulse.js"
export default class snakeGame {
    constructor(x, y) {
        let snakeX = Math.floor(Math.random() * (x));
        let snakeY = Math.floor(Math.random() * (y));
        pole(x, y)
        snake(snakeX, snakeY, x, y)
        pulse(x, y)
    };
}