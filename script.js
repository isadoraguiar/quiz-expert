const perguntas = [
  {
    pergunta: 'Qual é a finalidade do comando console.log() em Javascript?',
    respostas: [
      'Exibir uma mensagem de erro',
      'Imprimir dados no console',
      'Criar uma variável'
    ],
    correta: 1 // Resposta B
  },
  {
    pergunta: 'O que é o DOM em JavaScript?',
    respostas: [
      'Um modelo de documento para HTML e XML.',
      'Uma linguagem de programação.',
      'Uma biblioteca JavaScript popular.'
    ],
    correta: 0 // Resposta A
  },
  {
    pergunta:
      'Como você escreve um comentário de uma única linha em JavaScript?',
    respostas: ['// Comentário', '/* Comentário */', '# Comentário'],
    correta: 0 // Resposta A
  },
  {
    pergunta: 'Qual é a função do operador "===" em JavaScript?',
    respostas: ['Atribuição', 'Igualdade estrita', 'Operador lógico AND'],
    correta: 1 // Resposta B
  },
  {
    pergunta: 'O que é o JSON em JavaScript?',
    respostas: [
      'Uma biblioteca de gráficos',
      'Uma linguagem de script',
      'Um formato de dados'
    ],
    correta: 2 // Resposta C
  },
  {
    pergunta:
      'Qual método é usado para adicionar um elemento ao final de um array em JavaScript?',
    respostas: ['push()', 'pop()', 'concat()'],
    correta: 0 // Resposta A
  },
  {
    pergunta: 'O que é o conceito de "hoisting" em JavaScript?',
    respostas: [
      'Elevação de objetos',
      'Içamento de variáveis',
      'Aninhamento de funções'
    ],
    correta: 1 // Resposta B
  },
  {
    pergunta: 'Qual é a função do operador ternário em JavaScript?',
    respostas: [
      'Comparação de três valores',
      'Atribuição de três valores',
      'Operação de três operandos'
    ],
    correta: 2 // Resposta C
  },
  {
    pergunta:
      'Qual é o método usado para converter uma string para um número em JavaScript?',
    respostas: ['toInt()', 'parseFloat()', 'parseInt()'],
    correta: 2 // Resposta C
  },
  {
    pergunta: 'O que significa a sigla AJAX em JavaScript?',
    respostas: [
      'Asynchronous JavaScript and XML',
      'All JavaScript Application XML',
      'Advanced JavaScript and XML'
    ],
    correta: 0 // Resposta A
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length

const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const isCorrect = event.target.value == item.correta

      corretas.delete(item)
      if (isCorrect) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
