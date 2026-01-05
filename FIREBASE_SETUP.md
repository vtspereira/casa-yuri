# Configuração do Firebase

## Passo 1: Criar um projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Digite um nome para o projeto (ex: "casa-nova-presentes")
4. Siga os passos para criar o projeto

## Passo 2: Configurar o Firestore Database

1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha o modo de **produção**
4. Selecione a localização (recomendado: southamerica-east1 - São Paulo)
5. Aguarde a criação do banco de dados

## Passo 3: Configurar as regras de segurança do Firestore

No Firebase Console, vá em **Firestore Database > Regras** e substitua pelas seguintes regras:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /gifts/{giftId} {
      // Permite leitura para todos
      allow read: if true;

      // Permite escrita apenas se o presente ainda não foi comprado
      allow update: if request.resource.data.purchased == true
                    && resource.data.purchased == false
                    && request.resource.data.buyerName is string
                    && request.resource.data.buyerName.size() >= 2;

      // Permite criar documentos (para inicialização)
      allow create: if true;
    }
  }
}
```

Essas regras garantem que:
- Qualquer pessoa pode ver os presentes
- Um presente só pode ser marcado como comprado se ainda não estiver comprado
- Uma vez comprado, não pode ser desmarcado (ação irreversível)
- O nome do comprador deve ter pelo menos 2 caracteres

## Passo 4: Obter as credenciais do Firebase

1. No Firebase Console, clique no ícone de engrenagem ⚙️ > "Configurações do projeto"
2. Role para baixo até "Seus aplicativos"
3. Clique no ícone Web `</>`
4. Registre seu aplicativo com um nome (ex: "casa-nova-web")
5. Copie as credenciais que aparecem

## Passo 5: Configurar variáveis de ambiente

1. Crie um arquivo `.env` na raiz do projeto (ao lado do arquivo `package.json`)
2. Copie o conteúdo do arquivo `.env.example`
3. Substitua os valores com as credenciais do Firebase:

```env
VITE_FIREBASE_API_KEY=sua_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

## Passo 6: Testar a aplicação

1. Certifique-se de que o arquivo `.env` está configurado
2. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra a aplicação no navegador
4. Os presentes devem ser carregados automaticamente do Firebase

## Como funciona

- **Sincronização em tempo real**: Quando alguém confirma um presente, todos que estiverem com a página aberta verão a atualização instantaneamente
- **Persistência**: Os dados ficam salvos no Firebase, não no navegador
- **Proteção contra cancelamento**: As regras do Firestore impedem que um presente confirmado seja cancelado
- **Validação**: O nome do comprador é validado tanto no frontend quanto no backend

## Estrutura do banco de dados

O Firestore terá uma coleção chamada `gifts` com documentos no seguinte formato:

```json
{
  "id": 1,
  "name": "Batedeira Planetária Inox",
  "category": "Cozinha",
  "image": "https://...",
  "purchased": false,
  "buyerName": "João Silva"
}
```

## Deploy

Quando fizer o deploy da aplicação, lembre-se de configurar as variáveis de ambiente no seu serviço de hospedagem (Vercel, Netlify, etc.).
