
function calcularRank(qtdVitorias, qtdDerrotas) {
    const saldoVitorias = qtdVitorias - qtdDerrotas;

    let nivel = "";

    // Definindo o nível baseado no número de vitórias
    if (qtdVitorias < 10) {
        nivel = "Ferro";
    } else if (qtdVitorias >= 10 && qtdVitorias < 20) {
        nivel = "Bronze";
    } else if (qtdVitorias >= 20 && qtdVitorias < 50) {
        nivel = "Prata";
    } else if (qtdVitorias >= 50 && qtdVitorias < 80) {
        nivel = "Ouro";
    } else if (qtdVitorias >= 80 && qtdVitorias < 90) {
        nivel = "Diamante";
    } else if (qtdVitorias >= 90 && qtdVitorias < 100) {
        nivel = "Lendário";
    } else if (qtdVitorias >= 100) {
        nivel = "Imortal";
    }

    
    console.log("O Héroi tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);
}


calcularRank(90, 30); // Chamando a função com 90 vitórias e 30 derrotas
