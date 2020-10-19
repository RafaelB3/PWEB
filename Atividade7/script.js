var A, B, C;

function maior(n1, n2, n3) {
    var Max = n1;

    if (n2 > Max) {
        Max = n2;
    }

    if (n3 > Max) {
        Max = n3;
    }
    return Max;
}

A = prompt("Digite um numero");
B = prompt("Digite um numero");
C = prompt("Digite um numero");

alert("o maior é: " + maior(A, B, C));
