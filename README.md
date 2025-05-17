# Cardápio Digital - Espetaria

Um sistema de cardápio digital moderno e responsivo para espetarias, com integração ao sistema Gourmet Droid.

## Funcionalidades

- 📱 Interface responsiva otimizada para smartphones
- 🍖 Cardápio categorizado (espetos, porções, bebidas, etc.)
- 🛒 Carrinho de compras intuitivo
- 📝 Opções de personalização (ponto da carne, observações)
- 🔄 Integração com sistema Gourmet Droid
- 🏷️ Acesso via QR Code por mesa

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand (Gerenciamento de Estado)
- Prisma (ORM)
- MongoDB

## Requisitos

- Node.js 18.17 ou superior
- NPM ou Yarn
- Conta no sistema Gourmet Droid (para integração)

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://seu-repositorio/cardapio-digital.git
   cd cardapio-digital
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
   ```env
   GOURMET_DROID_API_KEY=sua_chave_api
   GOURMET_DROID_BASE_URL=url_base_api
   GOURMET_DROID_RESTAURANT_ID=id_do_restaurante
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse o projeto em `http://localhost:3000`

## Estrutura do Projeto

```
src/
  ├── app/              # Rotas e páginas
  ├── components/       # Componentes React
  ├── data/            # Dados mockados e constantes
  ├── services/        # Serviços de integração
  ├── store/           # Gerenciamento de estado
  └── types/           # Definições de tipos TypeScript
```

## Integração com Gourmet Droid

A integração com o sistema Gourmet Droid é feita através da API REST. Os pedidos são enviados automaticamente para o sistema quando confirmados pelo cliente.

### Fluxo de Pedidos

1. Cliente escaneia QR Code da mesa
2. Seleciona itens no cardápio
3. Adiciona observações (ponto da carne, etc.)
4. Confirma pedido
5. Pedido é enviado para o Gourmet Droid
6. Cozinha recebe o pedido no sistema atual

## Personalização

### Cores e Tema

As cores principais do projeto podem ser ajustadas no arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#DC2626', // Vermelho
      // ... outras cores
    }
  }
}
```

### Imagens e Logos

Substitua as imagens na pasta `public/images/` com as imagens do seu estabelecimento.

## Deployment

O projeto pode ser implantado em qualquer plataforma que suporte Next.js. Recomendamos:

- Vercel (mais simples)
- AWS com Docker
- VPS própria

## Suporte


## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
