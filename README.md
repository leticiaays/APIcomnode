# API de Avaliação de Restaurantes

Esta é uma API simples para gerenciar informações de restaurantes e avaliações de usuários.

## Funcionalidades

- CRUD de Restaurantes (criar, listar, visualizar, atualizar, excluir)
- CRUD de Avaliações (criar, listar, visualizar, atualizar, excluir)

## Endpoints

### Restaurantes

- `POST /restaurantes`: Cria um novo restaurante.
- `GET /restaurantes`: Lista todos os restaurantes.
- `GET /restaurantes/:id`: Retorna detalhes de um restaurante específico.
- `PUT /restaurantes/:id`: Atualiza informações de um restaurante.
- `DELETE /restaurantes/:id`: Exclui um restaurante.

### Avaliações

- `POST /avaliacoes`: Cria uma nova avaliação para um restaurante.
- `GET /avaliacoes`: Lista todas as avaliações.
- `GET /avaliacoes/:id`: Retorna detalhes de uma avaliação específica.
- `PUT /avaliacoes/:id`: Atualiza uma avaliação existente.
- `DELETE /avaliacoes/:id`: Exclui uma avaliação.

## Como Usar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Configure suas variáveis de ambiente no arquivo `.env`.
4. Execute a aplicação usando `npm start`.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (ou outro banco de dados de sua escolha)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas através das issues.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.