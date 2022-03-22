const prompt = require('prompt-sync')();
console.log('JOKENPÔ');
const jokenpo = ['pedra', 'papel', 'tesoura'];
let iniciar = prompt(
    'Olá usuário, gostaria de jogar Jokenpô comigo? ',
).toLowerCase();
console.log();
let rodadas = 0;
let computador = 0;
let usuario = 0;
let tentativa = 0;
let empate = 0;
while (iniciar == 'sim') {
    if (iniciar == 'sim') {
        rodadas = +prompt('Você gostaria e jogar quantas rodadas? ');
        console.log();
        externo: while (tentativa < rodadas) {
            console.log();
            const escolhaUsuario = prompt(
                'Por gentileza, faça sua escolha no jokenpô. ',
            ).toLowerCase();
            console.log();
            const escolhaComputador =
                jokenpo[Math.floor(Math.random() * jokenpo.length)];
            console.log(`Escolha do computador = ${escolhaComputador}`);
            console.log();
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
                        console.log('COMPUTADOR VENCEU');
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
                        empate++;
                        console.log('empatou');
                    } else if (
                        escolhaUsuario == 'papel' &&
                        escolhaComputador == 'papel'
                    ) {
                        tentativa++;
                        empate++;
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
                        empate++;
                        console.log('empatou');
                    }
                    break interno;
                }
            }
            if (
                escolhaUsuario != 'pedra' &&
                escolhaUsuario != 'papel' &&
                escolhaUsuario != 'tesoura'
            ) {
                console.log(
                    'Escolha errada, por favor escolha algo entre "PEDRA", "PAPEL" ou "TESOURA".',
                );
            }
            console.log();
            console.log(`USUÁRIO = ${usuario}`);
            console.log(`COMPUTATADOR = ${computador}`);
            console.log(`EMPATE = ${empate}`);
            console.log();
            console.log('-----------------------------------');
        }
    }
    console.log('FIM DE JOGO');
    console.log();
    console.log(`TENTATIVAS = ${tentativa}`);
    console.log();
    console.log(`USUÁRIO = ${usuario}`);
    console.log();
    console.log(`COMPUTATADOR = ${computador}`);
    console.log();
    console.log(`EMPATE = ${empate}`);
    console.log();
    console.log('*********************************************************');
    console.log();
    if (rodadas == 0) {
        console.log('PARA CONTINUAR NO JOGO, ESCOLHA UMA OU MAIS RODADAS.');
    } else if (usuario > computador) {
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
    empate = 0;
    iniciar = prompt('deseja continuar jogando? ');
    console.log();
}
console.log('Muito obigado pela escolha, quando preferir jogar, disponha.');
