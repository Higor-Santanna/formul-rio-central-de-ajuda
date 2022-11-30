## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript

## 💻 Projeto

Esse projeto consiste em uma simulação de uma central de ajudas. É um formulário com 4 campos inputs obrigatórios. Nesses campos, caso eles não sejam preenchidos, terá uma animação que consiste em trocar a borda do campo para vermelho e aparecer abaixo do campo uma mensagem escrita “campo obrigatório’. Caso seja preenchido o campo input, o mesmo ficará com uma borda verde.

## 💻 Observações

O projeto terá uma atualização, será feito algumas verificações a mais nos campos inputs.
Pegando como exemplo o campo de nome, atualmente caso o usuário digite uma sequência numérica o input considera correto, pois, a validação atual só verifica se há caracteres ou não. Na próxima atualização ele contará com uma verificação mais rigorosa que avaliará se o campo foi preenchido de forma correta.

## 💻 Atualização 29/11/2022

Pontos Corrigidos/Refeitos

* Refeito o formulário no HTML 5, com a retirada de uma div e o acréscimo de uma nova class com o nome de (campo), cuja sua função e dar o estilo padrão a todos os campos que o usuário pode digitar.

* No CSS3 foram feitas as seguintes alterações:
    - Estilização da nova class campo;
    - Refeito o estilo do “campo-de-digitacao”,“message” e “message-text”;
    - Refeito o estilo da class “message-error”;
    - Troca de nomes no lugar da class “ativo” foi colocado a class ”campo”;

* No JavaScript foi totalmente reestruturado, feito do 0 absoluto. O antigo código possui alguns bugs  e estava grande.
