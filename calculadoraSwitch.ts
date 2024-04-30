const teclado = require(`prompt-sync`) ();
let numero1 : number = 0;
let numero2 : number = 0;
function sairCal(){
    console.clear();
    console.log(`Fim de programa...`);
    process.exit();
}

function soma(numero1:number, numero2:number) :void{
    numero1 = parseInt(teclado(`Digite o 1º número: `));
    numero2 = parseInt(teclado(`Digite o 2º número: `));
    let resultado = numero1 + numero2;
    console.log(`O valor da soma de ${numero1} com ${numero2}`);
    console.log(`é ${resultado}`);
        console.log(`Digite ENTER para continuar...`);
    teclado();
    menuCal();
}

function subtracao(numero1:number, numero2:number) :void{
    numero1 = parseInt(teclado(`Digite o 1º número: `));
    numero2 = parseInt(teclado(`Digite o 2º número: `));
    let resultado = numero1 - numero2;
    console.log(`O valor da subtração de ${numero1} com ${numero2}`);
    console.log(`é ${resultado}`);
    console.log(`Digite ENTER para continuar...`);
    teclado();
    menuCal();
}

function multiplicacao(numero1:number, numero2:number) :void{
    numero1 = parseInt(teclado(`Digite o 1º número: `));
    numero2 = parseInt(teclado(`Digite o 2º número: `));
    let resultado = numero1 * numero2;
    console.log(`O valor da multiplicação de ${numero1} com ${numero2}`);
    console.log(`é ${resultado}`);
    console.log(`Digite ENTER para continuar...`);
    teclado();
    menuCal();
}

function divisao(numero1:number, numero2:number) :void{
    numero1 = parseInt(teclado(`Digite o 1º número: `));
    numero2 = parseInt(teclado(`Digite o 2º número: `));
    let resultado = numero1 / numero2;
    console.log(`O valor da divisão de ${numero1} com ${numero2}`);
    console.log(`é ${resultado}`);
    console.log(`Digite ENTER para continuar...`);
    teclado();
    menuCal();
}

function selecaoCal(opcao: string) :void{
    opcao = (teclado(`Digite a opção --> `));

    switch(opcao){
        case `0` : sairCal (); break;
        case `+` : soma (numero1, numero2); break;
        case `-` : subtracao (numero1, numero2); break;
        case `*` : multiplicacao (numero1, numero2); break;
        case `/` : divisao (numero1, numero2); break;
        default : console.log(`Digite algo válido`); break;
    }
}

function menuCal():void{
    console.clear();
    console.log(`Qual operação deseja? Digite:`);
    console.log(`+ ----> Adição`);
    console.log(`- ----> Subtração`);
    console.log(`* ----> Multiplicação`);
    console.log(`/ ----> Divisão`);
    console.log(`0 ----> Sair`);
    let opcao : string = ``;
    selecaoCal(opcao);
}

menuCal();
