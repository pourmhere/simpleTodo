const xyz = document.getElementById('abc');
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel');
const inputtxt = document.getElementById('inputtxt');

function handleClickAdd() {
    let e = document.createElement("li");
    if (inputtxt.value == "") {
        alert("Please enter value")
    }
    else {
        e.innerHTML = inputtxt.value;
        xyz.appendChild(e);


    }
    inputtxt.value = '';


    // let liBtn = document.createElement("button");
    // liBtn.innerText = "delete"
    // liBtn.style.display = "inline";
    // xyz.appendChild(liBtn);
}




btnAdd.onclick = handleClickAdd;



function handleClickDelete() {
    // let e = document.createElement("li");

    // remove completely from
    // const element = document.getElementById("abc");
    // element.remove();

    var select = document.getElementById('abc');
    select.removeChild(select.lastChild);

}
btnDel.onclick = handleClickDelete;
