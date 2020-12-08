export default function pole(x, y) {
    let mainDiv = document.querySelector(".mainDiv")
    mainDiv.style.cssText = `
    height: ${32*y}px;
    width: ${32*x}px;
    `
    for (let i = 0; i < y; i++) {
        for (let some of rad(x, i)) {
            mainDiv.appendChild(some)
        }
    }

}

function* rad(x, idY) {
    let i = 0
    while (i < x) {
        let id = String(idY)
        id += i < 10 ? "0" + String(i) : i
        let block = document.createElement("span")
        block.setAttribute("id", id);
        block.style.cssText = `
        height: 30px;
        width: 30px;
        display: inline-block;
        border: 1px solid black;
        margin: 0;
        padding: 0;
        `
        yield block
        i++
    }

}