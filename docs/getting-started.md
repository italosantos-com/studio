# Guia Completo: Firebase Functions (Spark) + Vercel Grátis (R$ 0,00)

Este guia cobre **exatamente** o cenário abaixo, do zero ao deploy, sem atalhos:

- **Backend:** Firebase Cloud Functions (plano Spark, sem billing)
- **Frontend:** Vercel (plano grátis)
- **Custo final:** **R$ 0,00**

---

## Visão geral da arquitetura

- Frontend (Next.js) hospedado na Vercel
- Backend HTTP hospedado no Firebase Cloud Functions
- Comunicação entre front e backend via HTTPS (`fetch`)
- Autenticação via Firebase Auth
- Billing desativado

---

## Parte 1 — Backend (Firebase Functions no plano Spark)

### 1) Criar o projeto Firebase sem billing

1. Acesse o console do Firebase
2. Clique em **Criar projeto**
3. **Não** ative Google Analytics
4. Finalize a criação
5. Abra a seção de plano do projeto
6. Confirme que está em **Spark (gratuito)**

> ⚠️ **Nunca clique em “Ativar billing”** para este cenário.

### 2) Instalar ferramentas localmente

```bash
npm install -g firebase-tools
firebase login
```

### 3) Inicializar Functions no projeto

Na raiz do backend (ou monorepo):

```bash
firebase init functions
```

Escolhas recomendadas para este cenário:

- TypeScript
- ESLint
- Install dependencies
- Região: `southamerica-east1` (mantida fixa aqui para seguir exatamente este cenário e priorizar baixa latência no Brasil)

Estrutura esperada:

```text
functions/
 ├─ src/
 ├─ package.json
 └─ tsconfig.json
```

### 4) Criar uma Function HTTP base

Arquivo: `functions/src/index.ts`

```ts
import { onRequest } from "firebase-functions/v2/https";

export const ping = onRequest(
  { region: "southamerica-east1" },
  (req, res) => {
    res.json({ ok: true });
  }
);
```

Regras do Spark para manter custo zero:

- Functions HTTP curtas
- Sem tarefas longas
- Sem agendamentos (cron)

### 5) Configurar CORS (obrigatório)

No diretório `functions`:

```bash
cd functions
npm install cors
```

Exemplo:

```ts
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";

const corsHandler = cors({
  origin: ["https://seu-app.vercel.app", "http://localhost:3000"], // troque "seu-app" pelo nome/domínio real no Vercel
  methods: ["GET", "POST"],
});

export const ping = onRequest({ region: "southamerica-east1" }, (req, res) => {
  corsHandler(req, res, () => {
    res.json({ ok: true });
  });
});
```

Em produção, prefira carregar os domínios permitidos via variável de ambiente para evitar deploy com placeholders.

### 6) Configurar Firebase Auth sem custo

No console Firebase:

1. Authentication
2. Métodos de login
3. Ative Email/Senha ou Google

No backend:

```bash
npm install firebase-admin
```

```ts
import admin from "firebase-admin";
import type { Request } from "firebase-functions/v2/https";

admin.initializeApp();

async function verifyAuth(req: Request) {
  const header = req.headers.authorization;
  if (!header) throw new Error("No token");

  const token = header.split(" ")[1];
  return admin.auth().verifyIdToken(token);
}
```

### 7) Proteger Function com Auth

```ts
import { onRequest } from "firebase-functions/v2/https";

export const securePing = onRequest({ region: "southamerica-east1" }, async (req, res) => {
  // Requer `corsHandler` (passo 5) e `verifyAuth` (passo 6) já definidos.
  corsHandler(req, res, async () => {
    try {
      const user = await verifyAuth(req);
      res.json({ uid: user.uid });
    } catch {
      res.status(401).end();
    }
  });
});
```

Sem token válido, a função responde rapidamente com 401 e evita processamento desnecessário.

### 8) Deploy do backend (Spark)

```bash
firebase deploy --only functions
```

URL esperada (exemplo):

```text
https://southamerica-east1-SEU_PROJECT_ID.cloudfunctions.net/ping
```

`SEU_PROJECT_ID` é o ID do projeto no Firebase Console (geralmente minúsculo e com hífens).

---

## Parte 2 — Frontend (Next.js na Vercel grátis)

### 9) Preparar o projeto Next.js

Para reduzir consumo, prefira páginas estáticas quando possível:

```ts
export async function getStaticProps() {
  return { props: {} };
}
```

### 10) Criar helper de API

Defina `NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL` no frontend para separar ambientes (dev/prod).

```ts
const API = process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL;

if (!API) {
  throw new Error("Missing NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL");
}

export function api(path: string, options?: RequestInit) {
  return fetch(`${API}/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
}
```

### 11) Enviar token do usuário

```ts
const token = await auth.currentUser?.getIdToken();

await api("securePing", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

### 12) Deploy no Vercel (grátis)

1. Acesse Vercel
2. Import GitHub repository
3. Framework: Next.js
4. Build automático
5. Deploy

---

## Parte 3 — Regras para não pagar nada

### Nunca fazer

- Cron jobs
- WebSockets
- Streaming
- Listeners contínuos sem necessidade
- SSR em tudo

### Sempre fazer

- Functions HTTP curtas
- Auth obrigatório no backend
- CORS restrito ao domínio do front
- Frontend estático sempre que possível

---

## Checklist final

- [ ] Firebase em plano Spark
- [ ] Billing desativado
- [ ] Apenas Functions HTTP
- [ ] Vercel Free
- [ ] Front chamando backend via HTTPS
- [ ] Auth validado no backend

---

## Veredito técnico

Esta arquitetura é uma opção estável para começar sem custo:

- Sem custos ocultos no cenário descrito
- Separação clara entre frontend e backend
- Evolução simples para escalar futuramente, se necessário
