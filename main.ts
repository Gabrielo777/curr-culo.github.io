function calcularIdade(anoNascimento: number): number {
    const anoAtual: number = new Date().getFullYear();
    const idade: number = anoAtual - anoNascimento;
    return idade;
}


const anoDeNascimento: number = 2002;
const idadeAtual: number = calcularIdade(anoDeNascimento);

console.log(`A idade é ${idadeAtual} anos.`);
