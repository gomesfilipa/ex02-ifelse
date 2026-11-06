# Ex02-if/else
##Conceito
Para este eercício inspirei-me no quadro de Modrian que foi usado no exercício anterior. Gostei nomeadamente da divisão do quadro em blocos e das suas cores, o que me levou a decidir manter esta sua linguagem, mas retirar-lhe alguma rigidez. No quadro, cada cor tem um lugar fixo, por isso decidi fazer o contrário: um desenho interativo em que o lugar de cada cor depende de onde está o rato. Desta forma, o rato funciona como um pincel e a composição vai se construindo à medida que o movemos pelo ecrã.

##CONCRETIZAÇÃO
Comecei por criar o canvas com 600x600px e pintei o fundo com o mesmo cinzento-claro que usei no Modrian(RGB 221, 223,222).
Coloquei o background() no setup() e não no draw() de propósito, de modo a que o desenho não fosse apagado a cada frame e as formas ficassem acumuladas. Usei noStroke() para as formas não terem contorno, tal como os blocos de cor do EX01.
Após isso, escrevi a primeira condição que decide a cor. Comparei o mouseX com widht/2 e o mouse Y com height/2, o que divide o canvas em quatro quadrantes. Usei um if dentro de outro if, porque primeiro verifico se o rato está do lado esquerdo ou direito e só depois se está em cima ou embaixo. Fiz assim para obter quatro resultados com duas perguntas, sem ter de escrever quatro condições separadas. As cores são as mesmas do Mondrian, retiradas do ilustrator com a pipeta.
         cima à esquerda: vermelho(247,43,12)
         Baixo à esquerda : amarelo(248,210,0)
         Cima à direita: azul (32,29,110)
         Baixo à direita: preto(20)


A segunda condição decide a forma. Comparei o mouse Y com o mouse X: quando o y é menor que o x, se o rato está acima da diagonal do ecrã, desenho um círculo, mas se estiver abaixo, desenho um quadrado. Decidi fazer assim para ter duas divisões diferentes no mesmo desenho: os quadrantes mandam na cor e a diagonal na forma. A diagonar acabou por ser escolhida mesmo para este efeito, em que as duas condições são obrigadas a dividir o mesmo espaço de maneiras diferentes.

Para os tamanhos usei random(),de modo a que cada forma saia diferente da anterior.Comecei com valores entre 10 e 40px, mas as formas ficavam todas muito parecidas e por isso alarguei o intervalo para 10 e 80px, tanto nos circulos como nos quadrados. Com formas tão pequenas e misturadas com formas grandes obtive um resultado mais interessante, pois o desenho ganhou ritmo e profundidade.

##Input
A interação é feita com o mousex e o mouse y. Sem o rato a mexer não nos aparece nada, e cada posição dá uma combinação diferente de cor e forma.

##Funções Utilizadas
Usei somente o que foi dado em aula desde o creativeCanvas, background,noStroke,fill,circle,random,if/else/mousex,mousey,widht / height e rect.


##FONTES
a) Exemplos da Aula 3 , if/else por quadrante e desenho cumulativo, de onde veio a ideia de dividir o ecrã em quadrantes. 

b) Uso de IA, não compreendia o código presente na plataforma do professor, estava confusa e pedi para a claude me explicar como funcionava. No exercício anterior não recorri a IA, pois o cunhado do meu namorado é engenheiro informático, tendo assim a sua ajuda. Contudo destava n estive com ele e recorri a IA quando surgiu uma dúvida.

##PROMPTS USADO:

explica me este código function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  noStroke();
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY < height / 2) {
      fill(0, 0, 255);
    } else {
      fill(0);
    }
  }
  circle(mouseX, mouseY, 20);
}