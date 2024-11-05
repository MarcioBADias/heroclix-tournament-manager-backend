# heroclix-tournament-manager-backend

Backend (Node.js com Express)

API REST: Para gerenciar endpoints como /login, /signup, /tournaments, /credits, /users.
Banco de Dados MongoDB: Armazenar informações de usuários, torneios, transações de créditos e histórico de participação.
Funcionalidades
Autenticação e Autorização

Usuários se registram e fazem login com credenciais seguras (com hash de senha).
Os usuários podem ser do tipo comum ou "manager".
Gestão de Torneios

Criar torneios com informações como nome, data, lista de participantes e tipo de premiação (opção disponível apenas para "manager").
Sistema para convite de amigos usando e-mail ou identificação de usuário.
Atualização do status do torneio e distribuição de créditos ao final.
Créditos

Gerenciamento do saldo de créditos do usuário, com operações de entrada (ganhos) e saída (gastos).
Histórico detalhado de créditos com data, tipo de operação e valor.
Dashboard do Usuário

Histórico de torneios, posições nos torneios, saldo atual e transações recentes.
Opções de filtro para visualização por período ou tipo de torneio.
