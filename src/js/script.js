const botoes = document.querySelectorAll('.botao')
const botaoPolaridade = document.querySelector('.botaoPolaridade')
const botaoResultado = document.querySelector('.botaoResultado')
const botaoFuncoes = document.querySelectorAll('.botaoFuncoes')

const calculo = document.querySelector('.calculo')
const resultado = document.querySelector('.resultado')

function calc(textoCalculo) {
    operacoes = ['/','X','-','+']
    conta = []
    
    for (let index = 0; index < textoCalculo.length; index++) {
    
    }

    operacoes.forEach(elemento => {
        
        switch (elemento) {
            case 'X':
                
                mutiplicar = textoCalculo.split(elemento).

                conta.push(mutiplicar)
                alert(conta)

                break;
            case '/':
            

                break;
            case '-':
            

                break;
            case '+':
            

                break;
            default:
                break;
        }

    })

}

botoes.forEach(botao => {

    botao.addEventListener('mousedown', () => {
        botao.classList.add('clicado')
        resultado.innerHTML += botao.innerHTML
    })

    botao.addEventListener('mouseup', () => {
        botao.classList.remove('clicado')
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

botaoResultado.addEventListener('mousedown', () => {
    
    botaoResultado.classList.add('clicado')
    calculo.innerHTML = resultado.innerHTML
    //resultado.innerHTML = calc(resultado.innerHTML)
    calc(resultado.innerHTML)
})

botaoResultado.addEventListener('mouseup', () => {
    
    botaoResultado.classList.remove('clicado')

})