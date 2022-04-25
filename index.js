console.clear();
const prompt = require(`prompt-sync`)();
const alternativas = ["tesoura", "papel", "pedra"];
// Variaveis
let rodadas = 0;
let cont = 1;
let vitoria = 0;
let derrota = 0;
let empate = 0;''
let jogador = "";
// Validação de quantas jogadas iremos jogar
primeiro: while (true) {
  rodadas = +prompt(`Quantas partidas iremos jogar? `);
  if (rodadas > 0) {
  } else {
    console.log("ERRO! Entrada invalida - Digite um NUMERO maior que 0");
    continue primeiro;
  }
  // Game Start
  for (cont; cont <= rodadas ; cont++) {
    // Validação da escolha do jogador
    segundo: while (true) {
      jogador = prompt(
        `Qual sua jogada [pedra, papel ou tesoura]? `
      ).toLowerCase();
      if (jogador === "pedra" || jogador === "papel" || jogador == "tesoura") {
        break segundo;
      } else {
        console.log("ERRO! Digite uma entrada valida [pedra, papel, tesoura]");
        continue segundo;
      }
    }
    // Jogada do computador + verificando quem ganhou a rodada
    let computador = Math.floor(Math.random() * 3);
    let pc = alternativas[computador];
    console.log(`JOGADOR: ${jogador}`);
    console.log(`COMPUTADOR: ${pc}`);
    if (jogador === pc) {
      empate++;
      console.log("EMPATE");
    } else if (
      (jogador === `pedra` && pc === `papel`) ||
      (jogador === `papel` && pc === `tesoura`) ||
      (jogador === `tesoura` && pc === `pedra`)
    ) {
      derrota++;
      console.log("DERROTA");
    } else {
      vitoria++;
      console.log("VITORIA");
    }
    // Dados estatisticos de todas as partidas
    if (cont === rodadas) {
      console.log(`                   → DADOS ESTATISTICOS ←
      [PARTIDAS = ${rodadas} ]  [JOGADOR = ${vitoria}]  [COMPUTADOR = ${derrota}]  [EMPATE = ${empate}]`);
      if (vitoria > derrota) {
        console.log(`\n  [ O GRANDE CAMPEÃO É O →→ JOGADOR ←← ]`);
      } else if (derrota > vitoria) {
        console.log(`\n  [ O GRANDE CAMPEÃO É O →→ COMPUTADOR ←←]`);
      } else {
        console.log(`\n  [→→ O JOGO EMPATOU ←←]`);
      }
      // Validação da escolha se o jogador quer continuar ou não jogando.
      quarto: while (true) {
        let jogadorDenovo = prompt(
          `Deseja jogar denovo [s] para SIM [n] para NÃO: `
        ).toLowerCase();
        if (jogadorDenovo === "s") {
          cont = 1;
          vitoria = 0;
          derrota = 0;
          empate = 0;
          continue primeiro;
        } else if (jogadorDenovo == "n") {
          break primeiro;
        } else {
          console.log("Entrada invalida - repita por favor");
          continue quarto;
        }
      }
    }
  }
}
