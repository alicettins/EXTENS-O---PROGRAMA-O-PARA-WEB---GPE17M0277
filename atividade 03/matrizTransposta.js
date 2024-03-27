function transporMatriz(A) {
    console.log("Matriz Original:");
    printMatriz(A);

    console.log("\nMatriz Transposta:");
    const transposta = gerarTransposta(A);
    printMatriz(transposta);
}

function gerarTransposta(A) {
    const linhas = A.length;
    const colunas = A[0].length;

    const transposta = [];
    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    return transposta;
}

function printMatriz(matriz) {
    matriz.forEach(row => {
        console.log(row.join(' '));
    });
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);
