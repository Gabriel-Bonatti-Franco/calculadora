const botoes = document.querySelectorAll('.botao')
const botaoPolaridade = document.querySelector('.botaoPolaridade')
const botaoResultado = document.querySelector('.botaoResultado')
const botaoFuncoes = document.querySelectorAll('.botaoFuncoes')
const botaoOperadores  = document.querySelectorAll('.botaoOperadores')

const calculo = document.querySelector('.calculo')
const resultado = document.querySelector('.resultado')

operacoes = ['/','X','-','+']
var valorAtual = ''
var conta = []

function ColocarNaConta(elemento) {
    
    if ((elemento != '')) {
        
        conta.push((valorAtual))

    }
    
}

function clicado(elemento) {
    elemento.classList.add('clicado')
}

function desclicado(elemento) {
    elemento.classList.remove('clicado')

    if(resultado.innerHTML.length >= 12){resultado.classList.add('grande')}else{resultado.classList.remove('grande')}

    console.log(`[${conta}] length: (${conta.length})`)
}

function calc(arrayConta) {
    
    let index = 0

    while (arrayConta.length > 1) {
        
        let valor = arrayConta[index]
        
        if (valor == 'X') {

            let mutiplicar = arrayConta[index - 1] * arrayConta[index + 1]
            arrayConta.splice((index-1), 3, mutiplicar)

            index = 0
        }
        else if(valor == '/'){

            let dividir = arrayConta[index - 1] / arrayConta[index + 1]
            arrayConta.splice((index-1), 3, dividir)

            index = 0
        }
        else if(valor == '-'){

            let subtrair = parseFloat(arrayConta[index - 1]) - parseFloat(arrayConta[index + 1])
            arrayConta.splice((index-1), 3, subtrair)

            index = 0
        }
        else if(valor == '+'){

            let somar = parseFloat(arrayConta[index - 1]) + parseFloat(arrayConta[index + 1])
            arrayConta.splice((index-1), 3, somar)

            index = 0
        }

        console.log(`[${arrayConta}] length: (${arrayConta.length})`)

        index += 1

        if (index > 1000) {
            break
        }

    }

    if (arrayConta.length == 1){
        return arrayConta[0]
    }
}

botoes.forEach(botao => {

    botao.addEventListener('mousedown', () => {
        
        clicado(botao)

        valorAtual += botao.innerHTML
        console.log(valorAtual)
        resultado.innerHTML += botao.innerHTML

    })

    botao.addEventListener('mouseup', () => {
    
        desclicado(botao)

    })

})

botaoFuncoes.forEach((botao, index) => {
    
    switch (index) {
        case 0:

            botao.addEventListener('mousedown', () => {
                clicado(botao)
            })
        
            botao.addEventListener('mouseup', () => {
                desclicado(botao)
            })
            
            break;
        
        case 1:

            botao.addEventListener('mousedown', () => {
                clicado(botao)
                resultado.innerHTML = ''
                calculo.innerHTML = ''
                valorAtual = ''
                conta = []
            })
        
            botao.addEventListener('mouseup', () => {
                desclicado(botao)
            })

            break;
        
        case 2:

            botao.addEventListener('mousedown', () => {
                clicado(botao)
            })
        
            botao.addEventListener('mouseup', () => {
                desclicado(botao)
            })

            break;
        
        default:
            break;
    }

})

botaoOperadores.forEach(botao => {
    
    botao.addEventListener('mousedown', () => {

        clicado(botao)

        if (valorAtual!='' && !(valorAtual in operacoes)){
            ColocarNaConta(valorAtual)
        }
        
        valorAtual = botao.innerHTML
        ColocarNaConta(valorAtual)

        valorAtual = ''

        resultado.innerHTML += botao.innerHTML
    })

    botao.addEventListener('mouseup', () => {

        desclicado(botao)

    })

})

botaoResultado.addEventListener('mousedown', () => {
    
    clicado(botaoResultado)
    
    calculo.innerHTML = resultado.innerHTML
    
    ColocarNaConta(valorAtual)

    let total = calc(conta)

    if (total != undefined && total != '') {
        
        total = total.length >= 8 ? total : parseFloat(total.toFixed(8))

        //total = total >= 99999999999 ? 

    }else{
        total = ''
    }
    
    resultado.innerHTML = total
    valorAtual = total

    conta = []
})

botaoResultado.addEventListener('mouseup', () => {

    desclicado(botaoResultado)

})