# Como Publicar no Vercel

Este guia mostra como fazer o deploy da sua aplicação de chá de casa nova no Vercel.

## Opção 1: Deploy via Interface Web (Recomendado para iniciantes)

### Passo 1: Criar conta no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Faça login com sua conta do GitHub, GitLab ou Bitbucket

### Passo 2: Preparar o repositório Git

Se você ainda não tem um repositório Git, execute os seguintes comandos no terminal:

```bash
cd "c:\Users\vtspereira\OneDrive\Projetos\casa"
git init
git add .
git commit -m "Initial commit - Casa Nova Presentes"
```

### Passo 3: Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome sugerido: `casa-nova-presentes`
4. Deixe como **privado** se não quiser que outras pessoas vejam o código
5. NÃO marque "Initialize this repository with a README"
6. Clique em "Create repository"

### Passo 4: Enviar código para o GitHub

Copie os comandos que aparecem na página do GitHub (algo como):

```bash
git remote add origin https://github.com/SEU_USUARIO/casa-nova-presentes.git
git branch -M main
git push -u origin main
```

### Passo 5: Importar projeto no Vercel

1. No Vercel, clique em "Add New..." > "Project"
2. Clique em "Import Git Repository"
3. Selecione o repositório `casa-nova-presentes`
4. Clique em "Import"

### Passo 6: Configurar variáveis de ambiente

**IMPORTANTE**: Antes de fazer o deploy, você precisa adicionar as variáveis de ambiente do Firebase.

1. Na página de configuração do projeto, vá em "Environment Variables"
2. Adicione cada uma das seguintes variáveis:

```
VITE_FIREBASE_API_KEY = AIzaSyAp0kLZXhPucyQwT2FuMg0w0Dz19TczEcM
VITE_FIREBASE_AUTH_DOMAIN = casa-nova-presentes.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = casa-nova-presentes
VITE_FIREBASE_STORAGE_BUCKET = casa-nova-presentes.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 623736992594
VITE_FIREBASE_APP_ID = 1:623736992594:web:a1bc7ed3b9ce0900e0408b
```

**Como adicionar**:
- No campo "Name", coloque o nome da variável (ex: `VITE_FIREBASE_API_KEY`)
- No campo "Value", coloque o valor correspondente
- Clique em "Add" para cada variável
- Repita para todas as 6 variáveis

### Passo 7: Deploy

1. Após adicionar todas as variáveis de ambiente, clique em "Deploy"
2. Aguarde o build (cerca de 1-2 minutos)
3. Quando terminar, você verá "Congratulations! Your project has been deployed"
4. Clique no link gerado (algo como `casa-nova-presentes.vercel.app`)

---

## Opção 2: Deploy via CLI (Para usuários avançados)

### Instalar Vercel CLI

```bash
npm install -g vercel
```

### Fazer login

```bash
vercel login
```

### Deploy

```bash
cd "c:\Users\vtspereira\OneDrive\Projetos\casa"
vercel
```

Siga as instruções:
- Set up and deploy? **Y**
- Which scope? (Escolha sua conta)
- Link to existing project? **N**
- What's your project's name? **casa-nova-presentes**
- In which directory is your code located? **./**
- Want to override the settings? **N**

### Adicionar variáveis de ambiente via CLI

```bash
vercel env add VITE_FIREBASE_API_KEY
# Cole o valor quando solicitado

vercel env add VITE_FIREBASE_AUTH_DOMAIN
# Cole o valor quando solicitado

# Repita para todas as variáveis
```

### Deploy em produção

```bash
vercel --prod
```

---

## Atualizações Futuras

Sempre que você fizer alterações no código:

### Via GitHub (automático)
1. Faça commit das mudanças:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push
   ```
2. O Vercel detecta automaticamente e faz o deploy!

### Via CLI
```bash
vercel --prod
```

---

## Domínio Personalizado (Opcional)

Se você quiser usar um domínio próprio (ex: `casanova.com.br`):

1. No Vercel Dashboard, vá em "Settings" > "Domains"
2. Adicione seu domínio
3. Configure os DNS conforme instruído pelo Vercel

---

## Configurar Firebase para o domínio do Vercel

Após o deploy, você precisa autorizar o domínio no Firebase:

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto "casa-nova-presentes"
3. Vá em "Authentication" > "Settings" > "Authorized domains"
4. Clique em "Add domain"
5. Adicione o domínio do Vercel (ex: `casa-nova-presentes.vercel.app`)
6. Clique em "Add"

---

## Verificar se tudo está funcionando

1. Acesse o site publicado
2. Tente confirmar um presente
3. Abra em outra aba ou dispositivo para ver a sincronização em tempo real

---

## Troubleshooting

### Erro: "Firebase is not defined"
- Verifique se todas as variáveis de ambiente foram adicionadas corretamente
- Elas devem começar com `VITE_`

### Erro 404 ao navegar
- O arquivo `vercel.json` já está configurado para resolver isso

### Presentes não aparecem
- Verifique se o domínio do Vercel foi autorizado no Firebase
- Verifique as regras do Firestore
- Abra o Console do navegador (F12) para ver erros

---

## URLs Úteis

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Firebase Console**: https://console.firebase.google.com/
- **Documentação Vercel**: https://vercel.com/docs

---

Pronto! Seu chá de casa nova está online e funcionando! 🎉
