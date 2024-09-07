var counter = 0;
var num = document.getElementById("num");
var rec = document.getElementById("list");
var arr = new Array();

function display() {
    num.innerHTML = `${counter}`;
}

document.getElementById("dec").addEventListener("click", () => {
    if (counter > 0) {
        counter--;
    }
    display();
});
document.getElementById("inc").addEventListener("click", () => {
    counter++;
    display();
});

document.getElementById("rec").addEventListener("click", () => {
    if (arr.length == 10) {
        arr.shift();
    }
    arr.push(counter)
    rec.innerHTML = "";
    let li;
    for (var i of arr) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(`${i}`));
        rec.appendChild(li);
    }
});
document.getElementById("res").addEventListener("click", () => {
    counter = 0;
    rec.innerHTML = "";
    arr = []
    display();
});
