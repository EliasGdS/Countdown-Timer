# CoutdownTimer
Temporizador de contagem regressiva de eventos. Feito no VSCode usando HTML5, CSS3 e Javascript.

## Pré-visualização
<p align="center">
  <img src="https://user-images.githubusercontent.com/67754744/88847145-002a0780-d1bd-11ea-899b-ea2cd7e66f83.gif">
</p>
  
## Recursos

- [x] O usuário pode ver uma caixa de entrada de evento contendo um campo de nome de evento, um campo de data, um horário opcional e um botão 'Iniciar'.
- [x] O usuário pode definir o evento digitando seu nome, a data em que está programado para ocorrer e um horário opcional do evento. Se a hora for omitida, presume-se que seja à meia-noite na data do evento no fuso horário local.
- [x] O usuário pode ver uma mensagem de aviso se o nome do evento estiver em branco.
- [x] O usuário pode ver uma mensagem de aviso se a data ou hora do evento forem inseridas incorretamente.
- [x] O usuário pode ver uma mensagem de aviso se o tempo até os dados do evento e o tempo que foram inseridos excederem a precisão do temporizador de contagem regressiva.
- [x] O usuário pode clicar no botão 'Iniciar' para ver o cronômetro começar a exibir os dias, horas, minutos e segundos até que o evento ocorra.
- [x] O usuário pode ver os elementos no temporizador decrescente automaticamente. Por exemplo, quando a contagem de segundos restantes atingir 0, a contagem de minutos restantes diminuirá em 1 e os segundos começarão a contagem regressiva a partir de 59. Essa progressão deve ocorrer desde segundos até a posição de dias restantes na exibição da contagem regressiva.

## Recursos Bônus

- [x] O usuário pode salvar o evento para que ele persista nas sessões.
- [x] O usuário pode ver um alerta quando o evento é atingido.
- [x] O usuário pode especificar mais de um evento.
- [x] O usuário pode ver os temporizadores de contagem regressiva para cada evento que foi definido.
