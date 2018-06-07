1. A função isValidCard verifica por meio do algoritimo de Luhn se um cartão de crédito é verdadeiro ou não.

2. Solicita o número do cartão e verifica se o valor inserido é diferente de 0 e letras.

3. O valor é separado número por número e depois invertido de trás para frente, pois o número que identifica o cartão é o último e nós o queremos na primeira posição.

4. É feita a soma de todos os números do cartão e armazenada.

5. A partir do segundo número, são selecinados em posições intercaladas, sempre excluindo o primeiro.

6. Os números selecionados são multiplicados por 2 e se o resultado for maior que 9, é subtraído por 9.

7. O resultado da multiplicação é somado com os números que não foram selecionados.

8. É feita a divisão do valor total da soma por 10, se o restante for equivalente a 0, o cartão é verdadeiro. Caso contrário, é um cartão inválido.

![Fluxograma](<a href="//imgur.com/9SE1QxI"><img src="//s.imgur.com/min/embed.js" /><a>
