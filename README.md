# Task API

API simples para gerenciamento de tarefas em memória.


## 💻 Tecnologias

&ensp;&ensp;[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/pt)
&ensp;&ensp;[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
&ensp;&ensp;[![csv-parse](https://img.shields.io/badge/csv--parse-1B8B00?style=for-the-badge&logo=csv&logoColor=white)](https://csv.js.org/parse)

## ⚙️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/EdersonCR/fundamentos-node.git
   cd fundamentos-node
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `tasks.csv` na raiz (exemplo no fim deste README).

4. Execute o servidor:

   ```bash
   node src/server.js
   ```

5. (Opcional) Importe tarefas do CSV:

   ```bash
   node src/import-tasks.js
   ```

## 📬 Endpoints

O servidor ficará disponível em `http://localhost:3333`.

| Método | Endpoint              | Descrição                       | Parâmetros                                                          | Cabeçalhos                       | Respostas                                                                                                 |
| ------ | --------------------- | ------------------------------- | ------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **GET**    | `/tasks`              | Lista todas as tarefas.          | **Query:** `search` (string, opcional)                                  | —                                | `200 OK` – Array de objetos Task.                                                                          |
|**POST**   | `/tasks`              | Cria uma nova tarefa.            | **Body:** `{ "title": string, "description": string }`                    | `Content-Type: application/json` | `201 Created` – Criado com sucesso;<br>`400 Bad Request` – Body inválido.                                     |
| **PUT**    | `/tasks/:id`          | Atualiza uma tarefa existente.   | **Path:** `id` (UUID);<br>**Body:** `{ "title": string, "description": string }` | `Content-Type: application/json` | `204 No Content` – Atualizado;<br>`400 Bad Request` – Body inválido;<br>`404 Not Found` – Tarefa não encontrada. |
| **PATCH**  | `/tasks/:id/complete` | Marca uma tarefa como concluída. | **Path:** `id` (UUID)                                                   | —                                | `204 No Content` – Marcado;<br>`404 Not Found` – Tarefa não encontrada.                                       |
| **DELETE** | `/tasks/:id`          | Deleta uma tarefa.               | **Path:** `id` (UUID)                                                   | —                                | `204 No Content` – Deletado;<br>`404 Not Found` – Tarefa não encontrada.                                      |


## 📝 Exemplo de `tasks.csv`

```csv
title,description
Comprar pão,"Ir à padaria e comprar pão fresco para o café da manhã"
Lavar roupa,"Separar roupas brancas e coloridas e rodar a máquina"
Limpar a casa,"Varrer, passar pano e organizar os cômodos"
Regar plantas,"Regar todas as plantas da sala e da varanda"
Fazer supermercado,"Comprar itens básicos: leite, ovos, frutas e legumes"
Pagar contas,"Pagar conta de luz e de internet antes do vencimento"
Ler um capítulo,"Dedicar 30 minutos à leitura do seu livro favorito"
Responder e-mails,"Organizar e responder e-mails pendentes do trabalho"
Preparar almoço,"Cozinhar uma refeição simples para o dia"
Exercício rápido,"Fazer 20 minutos de caminhada ou alongamento"
```


## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

## ✒️ Autor
Feito por **Éderson C. Rodrigues** 🏳️‍🌈

&ensp;&ensp;&ensp;[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/edersoncr) 
&ensp;&ensp;&ensp;[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EdersonCR)
