var teclado = require("prompt-sync")();
var numero1 = 0;
var numero2 = 0;
function sairCal() {
    console.clear();
    console.log("Fim de programa...");
    process.exit();
}
function soma(numero1, numero2) {
    numero1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numero2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var resultado = numero1 + numero2;
    console.log("O valor da soma de ".concat(numero1, " com ").concat(numero2));
    console.log("\u00E9 ".concat(resultado));
    console.log("Digite ENTER para continuar...");
    teclado();
    menuCal();
}
function subtracao(numero1, numero2) {
    numero1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numero2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var resultado = numero1 - numero2;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(numero1, " com ").concat(numero2));
    console.log("\u00E9 ".concat(resultado));
    console.log("Digite ENTER para continuar...");
    teclado();
    menuCal();
}
function multiplicacao(numero1, numero2) {
    numero1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numero2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var resultado = numero1 * numero2;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numero1, " com ").concat(numero2));
    console.log("\u00E9 ".concat(resultado));
    console.log("Digite ENTER para continuar...");
    teclado();
    menuCal();
}
function divisao(numero1, numero2) {
    numero1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numero2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var resultado = numero1 / numero2;
    console.log("O valor da divis\u00E3o de ".concat(numero1, " com ").concat(numero2));
    console.log("\u00E9 ".concat(resultado));
    console.log("Digite ENTER para continuar...");
    teclado();
    menuCal();
}
function selecaoCal(opcao) {
    opcao = (teclado("Digite a op\u00E7\u00E3o --> "));
    switch (opcao) {
        case "0":
            sairCal();
            break;
        case "+":
            soma(numero1, numero2);
            break;
        case "-":
            subtracao(numero1, numero2);
            break;
        case "*":
            multiplicacao(numero1, numero2);
            break;
        case "/":
            divisao(numero1, numero2);
            break;
        default:
            console.log("Digite algo v\u00E1lido");
            break;
    }
}
function menuCal() {
    console.clear();
    console.log("Qual opera\u00E7\u00E3o deseja? Digite:");
    console.log("+ ----> Adi\u00E7\u00E3o");
    console.log("- ----> Subtra\u00E7\u00E3o");
    console.log("* ----> Multiplica\u00E7\u00E3o");
    console.log("/ ----> Divis\u00E3o");
    console.log("0 ----> Sair");
    var opcao = "";
    selecaoCal(opcao);
}
menuCal();
