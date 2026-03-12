# Deploy na Vercel

Para o site carregar e a lista de presentes funcionar com Firebase:

1. No painel da Vercel: seu projeto → **Settings** → **Environment Variables**.

2. Adicione estas variáveis (com os valores do seu `.env` ou do Firebase Console):

   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

3. Marque o ambiente **Production** (e Preview se quiser).

4. Faça um novo deploy: **Deployments** → ⋮ no último deploy → **Redeploy**, ou dê um novo push no `main`.

Sem essas variáveis, o site abre mas a lista de presentes usa apenas dados locais (sem salvar reservas no Firebase).
