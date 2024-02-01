/* vamos criar um array com quatro tipos de cores*/
//                 0      1           2               3
const colors = ["green","red","rgba(133,122,200)","#f15025"]

/*pegar o valor botao */

const btn = document.getElementById('btn')

const color = document.querySelector('.color')

/*configurar um ouvinte de eventos click*/
btn.addEventListener('click', ()=> {
    // get random number between 0 - 3 colors [o]
    // invocando a função
const randomNumber = getRandomNumber()
console.log(randomNumber)

// dentro do meu body estou estilizando o background = com o array de cores 
document.body.style.backgroundColor = colors[randomNumber]
// pegando a informação do array
color.textContent = colors[randomNumber]
})

// vamos criar numeros aleatórios de 0 até 4
function getRandomNumber(){

    return Math.floor(Math.random() * colors.length);
}

