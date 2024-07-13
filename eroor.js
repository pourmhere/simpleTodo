const btn = document.getElementById('btn1');
const xyz = document.getElementById('abc');
function handleClick() {
    let e = document.createElement("li");
    e.innerHTML = "Mustafa";
    xyz.appendChild(e);
}
btn.onclick = handleClick;
console.log(xyz);