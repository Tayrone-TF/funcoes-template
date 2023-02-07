// Resolva o Exercício de Fixação!

const verificandoDados = (nome, anoNascimento, anoAtual) => {
    const name = nome
    const verificaIdade = anoAtual - anoNascimento

    if (verificaIdade >= 18) {
        const verificaBool = verificaIdade >= 18
        const frase = `${verificaBool} - Olá ${name}, você já é maior de idade em ${verificaIdade} anos`
        return frase
    } else {
        const verificaBool = verificaIdade >= 18
        const frase = `${verificaBool} - Olá ${name}, você ainda é menor de idade em ${verificaIdade} anos`
        return frase
    }
}

const pessoa1 = verificandoDados('Renatinha', 1997, 2023)
console.log(pessoa1)
const pessoa2 = verificandoDados('Tayrone', 1994, 2023)
console.log(pessoa2)
const pessoa3 = verificandoDados('Anna atereza', 2013, 2023)
console.log(pessoa3)
const pessoa4 = verificandoDados('Isadora', 2014, 2023)
console.log(pessoa4)
