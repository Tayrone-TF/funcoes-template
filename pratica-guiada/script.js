// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//Pratica 1

//Função nomeada

function darOlaPessoa(nome) {
    const ola = `Olá, ${nome}!`
    console.log(ola)
}

// darOlaPessoa('Tayrone')
// darOlaPessoa('Renatinha')
// darOlaPessoa('Brutus')

//Função não nomeada

const darOlaExtra = function (nome) {
    const ola = `Olá, ${nome}!`
    console.log(ola)
}

// darOlaExtra('Tayrone')
// darOlaExtra('Renatinha')
// darOlaExtra('Brutus')


// Pratica 2

function operarNumero(numero) {
    //1° verificar se o número é par
    const verificaPar = (numero % 2) === 0

    //2° somar 10 un
    const soma = numero + 10

    //° multiplicar o número por ele mesmo (quadrado)
    const multiplica = numero * numero // numero ** 2

    const frase = `O número ${numero} é par? ${verificaPar}. Somado com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${multiplica}`

    return frase
}

// console.log(operarNumero(4))
// console.log(operarNumero(5))
// console.log(operarNumero(27))

const numberOperation = function (number) {
    const pairCheck = (number % 2) === 0
    const add = number + 10
    const multiply = number ** 2

    const phrase = `The number ${number} is pair? ${pairCheck}. Added to 10 the result is ${add} and multiplied by itself is ${multiply}.`

    return phrase
}

// console.log(numberOperation(7))
// console.log(numberOperation(21))
// console.log(numberOperation(56))

// Pratica 3

function verificarCredenciais(login, senha) {
    const loginArmazenado = 'Tayrone.Teixeira'
    const senhaArmazenado = 'Tayrone!@#123'

    const comparaLogin = loginArmazenado === login
    const comparaSenha = senhaArmazenado === senha

    if (comparaLogin && comparaSenha) {
        const credenciaisVerificada = comparaLogin && comparaSenha
        const frase = `${credenciaisVerificada} - Seja bem Vindo! ${loginArmazenado}`
        return frase
    } else {
        const credenciaisVerificada = comparaLogin && comparaSenha
        const frase = `${credenciaisVerificada} - Login ou senha incorretos. Tente novamente.`
        return frase
    }
}

// console.log(verificarCredenciais('Tayrone.Teixeira', 'Tayrone!@#123'))
// console.log(verificarCredenciais('Tayrone!@#123', 'Tayrone.Teixeira'))
// console.log(verificarCredenciais('Tayrone.Teixeira', 'Tayrone!@#'))
// console.log(verificarCredenciais('Tayrone', 'Tayrone!@#123'))

const verificandoLoginESenha = (login, senha) => {
    const loginArmazenado = 'Tayrone.Teixeira'
    const senhaArmazenado = 'Tayrone!@#123'

    const comparaLogin = loginArmazenado === login
    const comparaSenha = senhaArmazenado === senha

    if (comparaLogin && comparaSenha) {
        const credenciaisVerificada = comparaLogin && comparaSenha
        const frase = `${credenciaisVerificada} - Seja bem Vindo! ${loginArmazenado}`
        return frase
    } else {
        const credenciaisVerificada = comparaLogin && comparaSenha
        const frase = `${credenciaisVerificada} - Login ou senha incorretos. Tente novamente.`
        return frase
    }
}

console.log(verificarCredenciais('Tayrone.Teixeira', 'Tayrone!@#123'))
console.log(verificarCredenciais('Tayrone!@#123', 'Tayrone.Teixeira'))
console.log(verificarCredenciais('Tayrone.Teixeira', 'Tayrone!@#'))
console.log(verificarCredenciais('Tayrone', 'Tayrone!@#123'))



