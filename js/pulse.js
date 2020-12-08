export default function pulse(x, y) {
    let X = Math.floor(Math.random() * (x));
    let Y = Math.floor(Math.random() * (y));
    X = X < 10 ? "0" + String(X) : X
    let pulseBlock = document.getElementById(String(Y) + X)
    pulseBlock.classList.add('red')
}