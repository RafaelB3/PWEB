var n, ra;
var Aluno1 = {
    RA : 123,
    Nome : "Rafael"
};

var Aluno2 = {};
Aluno2.RA = 121;
Aluno2.Nome = "Renata";

var Aluno3 = new Object();
Aluno2.RA = 120;
Aluno2.Nome = "Regina";

n = prompt("Digite um nome");
ra = prompt("Digite um RA");

Aluno1.RA = ra;
Aluno1.Nome = n;

alert(Aluno1.RA + " " + Aluno1.Nome);
