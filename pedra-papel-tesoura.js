const prompt = require('prompt-sync')();
const jokenpo = ['pedra', 'papel', 'tesoura'];
let iniciar = prompt(
    'Olá usuário, gostaria de jogar Jokenpô comigo? ',
).toLowerCase();
console.log();
let rodadas = 0;
let computador = 0;
let usuario = 0;
let tentativa = 0;
while (iniciar == 'sim') {
    if (iniciar == 'sim') {
        if (true) {
            rodadas = +prompt('Você gostaria e jogar quantas rodadas? ');
            console.log();
            externo: while (tentativa < rodadas) {
                console.log();
                const escolhaUsuario = prompt(
                    'Por gentileza, faça sua escolha no jokenpô. ',
                );
                console.log();
                const escolhaComputador =
                    jokenpo[Math.floor(Math.random() * jokenpo.length)];
                if (
                    escolhaUsuario == 'pedra' ||
                    escolhaUsuario == 'papel' ||
                    escolhaUsuario == 'tesoura'
                ) {
                    interno: while (true) {
                        if (
                            escolhaUsuario == 'pedra' &&
                            escolhaComputador == 'papel'
                        ) {
                            computador++;
                            tentativa++;
                            console.log('Computador venceu');
                        } else if (
                            escolhaUsuario == 'pedra' &&
                            escolhaComputador == 'tesoura'
                        ) {
                            usuario++;
                            tentativa++;
                            console.log('usuario venceu');
                        } else if (
                            escolhaUsuario == 'pedra' &&
                            escolhaComputador == 'pedra'
                        ) {
                            tentativa++;
                            console.log('empatou');
                        } else if (
                            escolhaUsuario == 'papel' &&
                            escolhaComputador == 'papel'
                        ) {
                            tentativa++;
                            console.log('empatou');
                        } else if (
                            escolhaUsuario == 'papel' &&
                            escolhaComputador == 'pedra'
                        ) {
                            usuario++;
                            tentativa++;
                            console.log('usuario venceu');
                        } else if (
                            escolhaUsuario == 'papel' &&
                            escolhaComputador == 'tesoura'
                        ) {
                            computador++;
                            tentativa++;
                            console.log('computador venceu');
                        } else if (
                            escolhaUsuario == 'tesoura' &&
                            escolhaComputador == 'papel'
                        ) {
                            usuario++;
                            tentativa++;
                            console.log('usuario venceu');
                        } else if (
                            escolhaUsuario == 'tesoura' &&
                            escolhaComputador == 'pedra'
                        ) {
                            computador++;
                            tentativa++;
                            console.log('computador venceu');
                        } else if (
                            escolhaUsuario == 'tesoura' &&
                            escolhaComputador == 'tesoura'
                        ) {
                            tentativa++;
                            console.log('empatou');
                        }
                        break interno;
                    }
                }
                console.log();
                console.log(`USUÁRIO = ${usuario}`);
                console.log();
                console.log(`COMPUTATADOR = ${computador}`);
                console.log();
                console.log('-----------------------------------');
            }
        }
    }
    console.log();
    console.log(`TENTATIVAS = ${tentativa}`);
    console.log();
    console.log(`USUÁRIO = ${usuario}`);
    console.log();
    console.log(`COMPUTATADOR = ${computador}`);
    console.log();
    console.log('*********************************************************');
    console.log('FIM DE JOGO');
    console.log();
    if (usuario > computador) {
        console.log(
            `O USUÁRIO FOI O GRANDE VENCEDOR POR ${usuario} X ${computador}.`,
        );
    } else if (computador > usuario) {
        console.log(
            `O COMPUTADOR FOI O GRANDE VENCEDOR POR ${computador} X ${usuario}.`,
        );
    } else if (computador == usuario) {
        console.log('O JOGO EMPATOU.');
    }
    console.log();
    tentativa = 0;
    usuario = 0;
    computador = 0;
    iniciar = prompt('deseja continuar jogando? ');
    console.log();
}
console.log('Muito obigado pela escolha, quando preferir jogar, disponha.');
