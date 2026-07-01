# ByeBi - Progetto esame SAW

Versione semplificata e documentata di ByeBi preparata per l'esame integrativo di **Sviluppo Applicazioni Web**.

Questa branch (`exam-saw`) non rappresenta necessariamente il prodotto completo in sviluppo, ma una versione pensata per mostrare in modo chiaro le parti richieste dal progetto d'esame: frontend con framework, autenticazione, routing, backend e comunicazione con API esterne.

## Obiettivo dell'applicazione

ByeBi è una web app per la pianificazione di addii al celibato/nubilato e piccoli eventi di viaggio.

L'app permette all'utente di:

- scegliere il brand dell'esperienza (`ByeBro` o `ByeBride`);
- navigare tra pagine pubbliche dedicate a destinazioni, esperienze e pacchetti;
- autenticarsi tramite email e password;
- accedere a una dashboard privata;
- usare funzionalità collegate a servizi esterni, ad esempio voli, hotel, immagini, automazioni o prodotti.

## Requisiti del progetto d'esame coperti

| Requisito | Implementazione nel progetto |
| --- | --- |
| Frontend con framework | React + TypeScript + Vite |
| Routing frontend | Wouter |
| Autenticazione utenti | Supabase Auth |
| Rotte protette | Componente `ProtectedRoute` |
| Comunicazione con API esterna | Backend Express con rotte verso Aviasales, Amadeus, Stripe, Printful e workflow esterni |
| Backend/API REST | Express |
| Repository versionato | GitHub |
| PWA | Non richiesta per questa consegna integrativa |

## Stack tecnologico

### Frontend

- React
- TypeScript
- Vite
- Wouter
- TanStack React Query
- Tailwind CSS
- Radix UI / shadcn-style components

### Backend

- Node.js
- Express
- TypeScript
- TSX per lo sviluppo
- esbuild per il bundle backend

### Autenticazione e dati

- Supabase Auth
- Schema condiviso con Drizzle ORM e Zod
- Storage layer interno lato server

### API e servizi esterni

Il progetto contiene integrazioni verso più servizi. Per la consegna d'esame è sufficiente mostrarne una o due in modo chiaro.

Esempi:

- Aviasales: ricerca voli;
- Amadeus: ricerca hotel;
- Stripe: gestione pagamenti/webhook;
- Printful: prodotti/merchandising;
- Workflow esterni: automazioni opzionali tramite webhook;
- Image search service: recupero immagini.

## Struttura del progetto

```txt
.
├── client/                 # Frontend React
│   └── src/
│       ├── components/     # Componenti UI e componenti riutilizzabili
│       ├── hooks/          # Hook custom, inclusa autenticazione
│       ├── lib/            # Configurazioni e utility frontend
│       ├── pages/          # Pagine principali dell'app
│       └── App.tsx         # Entry point logico del frontend e routing
│
├── server/                 # Backend Express
│   ├── index.ts            # Avvio server e middleware principali
│   ├── routes.ts           # Rotte API REST
│   ├── storage.ts          # Storage layer lato server
│   └── services/           # Servizi esterni e integrazioni
│
├── shared/                 # Codice condiviso frontend/backend
│   └── schema.ts           # Schema dati e validazione
│
├── package.json            # Script, dipendenze e configurazione npm
├── .env.example            # Esempio variabili ambiente
└── ARCHITECTURE.md         # Sintesi architetturale per esame/orale
```

## Installazione

Clonare il repository e posizionarsi sulla branch d'esame:

```bash
git clone https://github.com/AndrewRaynolds/ByeBiProject.git
cd ByeBiProject
git checkout exam-saw
```

Installare le dipendenze:

```bash
npm install
```

## Configurazione variabili ambiente

Creare un file `.env` partendo da `.env.example`:

```bash
cp .env.example .env
```

Poi compilare le variabili necessarie.

Per una demo minima dell'esame sono essenziali soprattutto:

```env
NODE_ENV=development
PORT=5001
HOST=127.0.0.1
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Le chiavi delle API esterne servono solo per provare le rispettive integrazioni. Se una chiave non è presente, la relativa funzionalità potrebbe non essere utilizzabile.

## Avvio in sviluppo

```bash
npm run dev
```

L'app viene avviata tramite il server Express definito in `server/index.ts`, che serve anche il frontend durante lo sviluppo.

## Build produzione

```bash
npm run build
npm start
```

Il comando di build esegue:

1. build frontend con Vite;
2. bundle del server Express con esbuild.

## Credenziali utente di test

Per la demo è disponibile il seguente utente di test configurato in Supabase.

```txt
Email: demo.saw@byebi.it
Password: DemoPassword123!
```

## Percorso consigliato per la demo orale

Per evitare di disperdere la presentazione su troppe feature, la demo consigliata è questa:

1. apertura homepage;
2. scelta brand ByeBro/ByeBride;
3. navigazione di una pagina pubblica;
4. login utente;
5. accesso alla dashboard protetta;
6. spiegazione di una chiamata API lato backend;
7. spiegazione dello storage/schema dati.

## File chiave da saper spiegare all'orale

| File | Perché è importante |
| --- | --- |
| `client/src/App.tsx` | Definisce provider, routing, scelta brand e pagine principali |
| `client/src/hooks/use-auth.tsx` | Gestisce sessione, login, registrazione e logout con Supabase |
| `client/src/lib/protected-route.tsx` | Protegge le rotte private |
| `server/index.ts` | Avvia Express, middleware e rotte principali |
| `server/routes.ts` | Definisce le API REST dell'app |
| `server/storage.ts` | Gestisce lo storage lato server |
| `shared/schema.ts` | Definisce modelli dati e validazione |
| `package.json` | Mostra script, dipendenze e struttura tecnica del progetto |

## Limiti noti della versione d'esame

Questa branch è pensata per la consegna accademica, quindi alcune parti del prodotto reale possono essere semplificate, non configurate o non usate nella demo.

In particolare:

- alcune integrazioni esterne richiedono chiavi API reali;
- alcune funzionalità sono presenti nel codice ma non centrali per l'esame;
- la parte PWA non è inclusa perché esclusa dalla richiesta integrativa;
- la branch `main` rimane la versione completa del progetto in sviluppo.

## Nota per il docente

Il progetto è stato sviluppato come applicazione full-stack React/Express. Per l'orale si consiglia di concentrarsi sulle parti centrali della consegna: frontend con React, autenticazione Supabase, route protette, backend Express e una o più chiamate a servizi esterni.
