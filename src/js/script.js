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
    console.log(conta)
}

function calc(arrayConta) {
    
    arrayConta.forEach((valor, index) => {

        if (arrayConta.length == 1){
            console.log('primeiro if')
            return arrayConta[0]
        }else if (valor == 'X') {
            let mutiplicar = arrayConta[index - 1] * arrayConta[index + 1]
            arrayConta.splice((index-1), 3, mutiplicar)

            console.log('mutiplicando...')
        }
        else if(valor == '/'){
            let dividir = arrayConta[index - 1] / arrayConta[index + 1]
            arrayConta.splice((index-1), 3, dividir)
            console.log('dividindo...')
        }
        else if(valor == '-'){
            let subtrair = parseFloat(arrayConta[index - 1]) - parseFloat(arrayConta[index + 1])
            arrayConta.splice((index-1), 3, subtrair)
            console.log('subtraindo...')
        }
        else if(valor == '+'){
            // index = arrayConta.indexOf(valor)
            let somar = parseFloat(arrayConta[index - 1]) + parseFloat(arrayConta[index + 1])
            arrayConta.splice((index-1), 3, somar)
            console.log('somando...')
        }

    })
    return arrayConta[0]
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
                botao.classList.add('clicado')
            })
        
            botao.addEventListener('mouseup', () => {
                botao.classList.remove('clicado')
            })
            
            break;
        
        case 1:

            botao.addEventListener('mousedown', () => {
                botao.classList.add('clicado')
                resultado.innerHTML = ''
                calculo.innerHTML = ''
                valorAtual = ''
                conta = []
            })
        
            botao.addEventListener('mouseup', () => {
                botao.classList.remove('clicado')
            })

            break;
        
        case 2:

            botao.addEventListener('mousedown', () => {
                botao.classList.add('clicado')
            })
        
            botao.addEventListener('mouseup', () => {
                botao.classList.remove('clicado')
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