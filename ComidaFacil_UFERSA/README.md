# ComidaFácil UFERSA - Protótipo Funcional

## Visão Geral
O ComidaFácil UFERSA é um sistema de pedidos online para restaurantes universitários que permite que alunos e professores façam pedidos de forma prática e sem filas.

## Funcionalidades Implementadas

### 1. Sistema de Autenticação
- **Login diferenciado**: Usuários (alunos/professores) e administradores
- **Credenciais de teste**:
  - Usuário: `aluno@ufersa.edu.br` / senha: `123`
  - Administrador: `admin@restaurante.com` / senha: `admin123`

### 2. Dashboard do Usuário
- **Visualização do cardápio**: Exibe itens organizados por categorias
- **Filtro por restaurante**: Permite filtrar itens por estabelecimento
- **Sistema de pedidos**: Adicionar/remover itens do carrinho
- **Observações personalizadas**: Campo para comentários especiais
- **Acompanhamento de status**: Visualização em tempo real do status do pedido
- **Simulação de status**: Recebido → Em preparo → Pronto para retirada

### 3. Dashboard Administrativo
- **Gerenciamento de cardápio**: Visualização de todos os itens com opções de editar/remover
- **Pedidos em andamento**: Lista completa de pedidos com detalhes
- **Atualização de status**: Botão para avançar status dos pedidos
- **Informações detalhadas**: Usuário, itens, observações e status atual

### 4. Interface Responsiva
- **Design adaptativo**: Funciona em desktop e dispositivos móveis
- **Navegação intuitiva**: Menu claro e organizado
- **Visual moderno**: Cores da UFERSA e layout profissional

## Estrutura de Arquivos
```
ComidaFacil_UFERSA/
├── html/
│   ├── index.html          # Página inicial
│   ├── login.html          # Página de login
│   ├── dashboard_user.html # Dashboard do usuário
│   └── dashboard_admin.html # Dashboard administrativo
├── css/
│   └── style.css           # Estilos principais
├── js/
│   └── script.js           # Lógica JavaScript
└── assets/
    └── (imagens e recursos)
```

## Dados de Demonstração

### Cardápio
- **Restaurante Universitário Central**:
  - Prato Feito - Carne (R$ 12,00)
  - Prato Feito - Frango (R$ 11,00)
  - Suco de Laranja (R$ 4,00)

- **Cantina CCSA**:
  - Coxinha de Frango (R$ 6,00)
  - Refrigerante Lata (R$ 5,00)

### Pedidos Simulados
- Pedido #ORD001: Prato Feito - Carne + Suco de Laranja
- Pedido #ORD002: Coxinha de Frango + Refrigerante Lata

## Fluxo de Uso

### Para Usuários (Alunos/Professores)
1. Acesse a página inicial
2. Clique em "Login" ou "Fazer Pedido"
3. Faça login com as credenciais de usuário
4. Navegue pelo cardápio e filtre por restaurante se desejar
5. Adicione itens ao pedido
6. Adicione observações se necessário
7. Confirme o pedido
8. Acompanhe o status em tempo real

### Para Administradores
1. Faça login com credenciais de administrador
2. Visualize e gerencie o cardápio
3. Monitore pedidos em andamento
4. Atualize status dos pedidos conforme preparo
5. Visualize estatísticas (seção preparada para expansão)

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização responsiva e moderna
- **JavaScript**: Lógica de interação e simulação de dados
- **Design Responsivo**: Media queries para adaptação mobile

## Recursos Avançados Implementados
- Simulação de mudança de status em tempo real
- Filtros dinâmicos por restaurante
- Interface administrativa completa
- Validação de formulários
- Feedback visual para ações do usuário
- Layout responsivo para diferentes dispositivos

## Possíveis Extensões Futuras
- Integração com sistema de pagamento (Pix, cartão)
- Notificações push/email quando pedido estiver pronto
- Sistema de avaliação de pratos
- Relatórios de vendas mais detalhados
- Integração com banco de dados real
- Sistema de fidelidade/pontos
- Agendamento de pedidos

## Como Executar
1. Abra o arquivo `html/index.html` em um navegador web
2. Navegue pelas funcionalidades usando as credenciais fornecidas
3. Teste tanto o fluxo de usuário quanto o administrativo

O protótipo está totalmente funcional e demonstra todas as principais funcionalidades especificadas no projeto ComidaFácil UFERSA.

