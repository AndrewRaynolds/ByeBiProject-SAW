# ByeBi — Progetto esame SAW

ByeBi è un'applicazione web full-stack per la pianificazione di eventi e viaggi di gruppo.
Questa versione è preparata per l'esame integrativo di **Sviluppo Applicazioni Web**.
Il progetto comprende un frontend React, autenticazione Supabase, routing, dashboard protetta,
backend Express e comunicazione con servizi esterni.

## Tecnologie principali

- React, TypeScript, Vite e Tailwind CSS
- Wouter e TanStack React Query
- Node.js ed Express
- Supabase Auth
- Drizzle ORM e Zod

## Requisiti d'esame coperti

- frontend sviluppato con un framework;
- routing lato client;
- autenticazione e rotta privata;
- backend con API REST;
- comunicazione con servizi esterni;
- progetto versionato su GitHub.

## Installazione

```bash
git clone https://github.com/AndrewRaynolds/ByeBiProject-SAW.git
cd ByeBiProject-SAW
npm install
cp .env.example .env
```

## Configurazione minima

Compilare nel file `.env` le credenziali del progetto Supabase:

```env
NODE_ENV=development
PORT=5001
HOST=127.0.0.1
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Le altre variabili presenti in `.env.example` riguardano integrazioni opzionali.

## Comandi principali

```bash
npm install
cp .env.example .env
npm run check
npm run build
npm run dev
```

L'applicazione di sviluppo è disponibile su `http://127.0.0.1:5001`.

## Credenziali demo

```txt
Email: demo.saw@byebi.it
Password: DemoPassword123!
```

## Documentazione tecnica

Per struttura, flussi applicativi e dettagli architetturali consultare
[ARCHITECTURE.md](./ARCHITECTURE.md).
