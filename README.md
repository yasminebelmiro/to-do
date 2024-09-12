# Lista de Tarefas

Uma aplicação simples para gerenciar suas tarefas diárias. Com ela, você pode adicionar, marcar como concluídas e remover tarefas. O layout é responsivo e oferece uma interface amigável para organizar suas atividades.

## Funcionalidades

- **Adicionar Tarefas**: Crie novas tarefas fornecendo um texto e uma categoria.
- **Listar Tarefas**: Visualize todas as tarefas com a possibilidade de filtrar pelo texto.
- **Marcar como Concluída**: Marque tarefas como concluídas, que são exibidas com um estilo riscado.
- **Remover Tarefas**: Exclua tarefas da lista quando não forem mais necessárias.
- **Pesquisar Tarefas**: Utilize a barra de pesquisa para encontrar tarefas específicas rapidamente.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Styled Components**: Biblioteca para estilização de componentes em React.
- **CSS**: Utilizado para estilização geral da aplicação.

## Estrutura do Projeto

- **`src/`**: Contém todos os arquivos fonte da aplicação.
  - **`components/`**: Componentes reutilizáveis da aplicação.
    - `Todo.js`: Componente para exibir uma tarefa.
    - `TodoForm.js`: Componente para o formulário de adição de tarefas.
    - `Search.js`: Componente para a barra de pesquisa.
  - **`App.js`**: Componente principal da aplicação que gerencia o estado das tarefas e renderiza outros componentes.
  - **`App.css`**: Arquivo de estilo para a aplicação.
- **`public/`**: Contém arquivos públicos, como o `index.html`.
