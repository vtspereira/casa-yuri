# Configuração do Firebase

## Passo 1: Criar o projeto

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em **"Adicionar projeto"**
3. Digite um nome para o projeto (ex: "casa-yuri-presentes")
4. Desative o Google Analytics se não precisar
5. Clique em **"Criar projeto"**

## Passo 2: Criar o Firestore

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha o modo **Produção**
4. Selecione a localização **southamerica-east1** (São Paulo)
5. Clique em **"Ativar"**

## Passo 3: Regras de segurança

1. Em **Firestore Database**, abra a aba **"Regras"**
2. Substitua o conteúdo por (usando a coleção `gifts_yuri`):

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /gifts_yuri/{giftId} {
      allow read: if true;
      allow update: if request.resource.data.purchased == true
                    && resource.data.purchased == false
                    && request.resource.data.buyerName is string
                    && request.resource.data.buyerName.size() >= 2;
      allow create: if true;
    }
  }
}
```

3. Clique em **"Publicar"**

Essas regras garantem que:
- Qualquer pessoa pode ver os presentes
- Um presente só pode ser marcado como comprado se ainda não estiver comprado
- Uma vez comprado, não pode ser desmarcado (ação irreversível)
- O nome do comprador deve ter pelo menos 2 caracteres

## Passo 4: Registrar o app web

1. Clique no ícone de engrenagem > **"Configurações do projeto"**
2. Role até **"Seus aplicativos"**
3. Clique no ícone **Web** `</>`
4. Registre com um nome (ex: "casa-yuri-web")
5. Copie o objeto `firebaseConfig` que aparece

## Passo 5: Variáveis de ambiente

1. Crie o arquivo `.env` na raiz do projeto (ao lado do `package.json`)
2. Preencha com as credenciais copiadas:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...firebaseapp.com
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Passo 6: Domínios autorizados (para deploy)

1. Em **Authentication** > **Settings** > **Authorized domains**
2. Adicione `localhost` (já vem por padrão) e o domínio do deploy (ex: `seu-site.vercel.app`)

## Passo 7: Testar

1. Execute `npm run dev`
2. A aplicação criará a coleção `gifts_yuri` automaticamente na primeira execução (se estiver vazia)
3. Os presentes devem ser carregados automaticamente do Firebase

## Como funciona

- **Sincronização em tempo real**: Quando alguém confirma um presente, todos que estiverem com a página aberta verão a atualização instantaneamente
- **Persistência**: Os dados ficam salvos no Firebase, não no navegador
- **Proteção contra cancelamento**: As regras do Firestore impedem que um presente confirmado seja cancelado
- **Validação**: O nome do comprador é validado tanto no frontend quanto no backend

## Estrutura da coleção gifts_yuri

A coleção será criada automaticamente com documentos no formato:

| Campo | Tipo |
|-------|------|
| id | number |
| name | string |
| category | string |
| image | string |
| purchased | boolean |
| buyerName | string (opcional) |

Exemplo de documento:

```json
{
  "id": 1,
  "name": "Jogo de toalhas - 1",
  "category": "Banheiro",
  "image": "https://...",
  "purchased": false,
  "buyerName": "João Silva"
}
```

## Deploy

Quando fizer o deploy da aplicação, lembre-se de configurar as variáveis de ambiente no seu serviço de hospedagem (Vercel, Netlify, etc.).
