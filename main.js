
let confirmOP = false;
let num1 = '';
let operation;
let num2 = '';
let continuosOP = false;

const disp = document.getElementById('display')

document.getElementById('nove').onclick = function () {
    if (!confirmOP) {
        num1 += 9;
        disp.innerHTML += 9;
    } else {
        num2 += 9;
        disp.innerHTML += 9;
    }
}
document.getElementById('oito').onclick = function () {
    if (!confirmOP) {
        num1 += 8;
        disp.innerHTML += 8;
    } else {
        num2 += 8;
        disp.innerHTML += 8;
    }
}
document.getElementById('sete').onclick = function () {
    if (!confirmOP) {
        num1 += 7;
        disp.innerHTML += 7;
    } else {
        num2 += 7;
        disp.innerHTML += 7;
    }
}
document.getElementById('seis').onclick = function () {
    if (!confirmOP) {
        num1 += 6;
        disp.innerHTML += 6;
    } else {
        num2 += 6;
        disp.innerHTML += 6;
    }
}
document.getElementById('cinco').onclick = function () {
    if (!confirmOP) {
        num1 += 5;
        disp.innerHTML += 5;
    } else {
        num2 += 5;
        disp.innerHTML += 5;
    }
}
document.getElementById('quatro').onclick = function () {
    if (!confirmOP) {
        num1 += 4;
        disp.innerHTML += 4;
    } else {
        num2 += 4;
        disp.innerHTML += 4;
    }
}
document.getElementById('tres').onclick = function () {
    if (!confirmOP) {
        num1 += 3;
        disp.innerHTML += 3;
    } else {
        num2 += 3;
        disp.innerHTML += 3;
    }
}
document.getElementById('dois').onclick = function () {
    if (!confirmOP) {
        num1 += 2;
        disp.innerHTML += 2;
    } else {
        num2 += 2;
        disp.innerHTML += 2;
    }
}
document.getElementById('um').onclick = function () {
    if (!confirmOP) {
        num1 += 1;
        disp.innerHTML += 1;
    } else {
        num2 += 1;
        disp.innerHTML += 1;
    }
}
document.getElementById('zero').onclick = function () {
    if (!confirmOP) {
        num1 += '0';
        disp.innerHTML += '0';
    } else {
        num2 += '0';
        disp.innerHTML += '0';
    }
}

document.getElementById('soma').onclick = function () {
    operation = '+';
    disp.innerHTML += '+';
    confirmOP = true;
}
document.getElementById('divis').onclick = function () {
    operation = '/';
    disp.innerHTML += '÷';
    confirmOP = true;
}

document.getElementById('multi').onclick = function () {
    operation = 'x';
    disp.innerHTML += 'x';
    confirmOP = true;
}
document.getElementById('sub').onclick = function () {
    operation = '-';
    disp.innerHTML += '-';
    confirmOP = true;
}

document.getElementById('clear').onclick = function () {
    disp.innerHTML = null;
    num1 = null;
    num2 = null;
    confirmOP = null;
    continuosOP = false;
}

document.getElementById('equals').onclick = function () {
    let resp;
    if (!continuosOP) {
        num1 = Number(num1);
        num2 = Number(num2);
    } else {
        num2 = Number(num2);
    }

    if (operation == '+') {
        resp = num1 + num2;
        disp.innerHTML = resp;
        //alert(resp);
    }
    if (operation == '/') {
        resp = num1 / num2;
        disp.innerHTML = resp;
        //alert(resp);
    }
    if (operation == 'x') {
        resp = num1 * num2;
        disp.innerHTML = resp;
        //alert(resp);
    }
    if (operation == '-') {
        resp = num1 - num2;
        disp.innerHTML = resp;
        //alert(resp);
    }
    num1 = resp;
    num2 = null;
    confirmOP = true;
    continuosOP = true;
}