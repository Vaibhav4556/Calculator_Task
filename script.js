// const first = document.getElementById("first").value;
// const second = document.getElementById("second").value;
// const maths = document.getElementsByTagName("button").value


function add() {

    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    console.log(parseInt(first) + parseInt(second))
    document.getElementsByClassName("output")[0].innerText = parseInt(first) + parseInt(second);

}

function sub() {

    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    console.log(parseInt(first) - parseInt(second))
    document.getElementsByClassName("output")[0].innerText = parseInt(first) - parseInt(second);

}

function multiply() {

    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    console.log(first * second)
    document.getElementsByClassName("output")[0].innerText = first * second;

}

function division() {

    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    console.log(first / second)
    document.getElementsByClassName("output")[0].innerText = first / second;

}