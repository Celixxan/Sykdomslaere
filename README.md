# Sykdomslære Quiz

Quiz-webapp for eksamensforberedelse i sykdomslære – laget for sykepleiestudenter.

## Funksjoner

- **204 spørsmål** – fordelt på 17 kategorier (12 per kategori)
- **Tre spørsmålstyper** – flervalg, sant/usant og kasus
- **Vanskelighetsgrader** – lett, medium, eksamen
- **Treningsmodus** – umiddelbar feedback med forklaringer
- **Eksamensmodus** – 20 min tidsbegrensning, ingen tilbakemelding før slutt
- **Progresjonsstatistikk** – se din fremgang per kategori
- **Lokal lagring** – resultater og statistikk lagres i nettleseren

## Kategorier

| Kategori | Spørsmål |
|----------|----------|
| Karsykdommer | 12 |
| Hjertesykdommer | 12 |
| Lungesykdommer | 12 |
| Nyrer og urinveier | 12 |
| Gastro | 12 |
| Endokrinologi | 12 |
| Hematologi | 12 |
| Infeksjon | 12 |
| Nevrologi | 12 |
| Bevegelsesapparatet | 12 |
| Revmatologi | 12 |
| Gynekologi/obstetrikk | 12 |
| Pediatri | 12 |
| Akuttmedisin | 12 |
| Onkologi | 12 |
| Geriatri | 12 |
| Øyesykdommer | 12 |

## Kjøre lokalt

Ingen avhengigheter eller build-steg kreves.

### Alternativ 1: Åpne direkte
Dobbeltklikk på `index.html` i filutforskeren.

### Alternativ 2: Live Server (anbefalt)
```bash
# Med VS Code Live Server extension
# Høyreklikk index.html → "Open with Live Server"

# Eller med npx
npx serve .
```

## Deploy til Netlify

### Alternativ 1: Drag & drop
1. Gå til [app.netlify.com](https://app.netlify.com)
2. Dra hele prosjektmappen til "Deploy manually"
3. Ferdig!

### Alternativ 2: Git-integrasjon
1. Push koden til GitHub/GitLab
2. Gå til Netlify → "New site from Git"
3. Velg repo og branch
4. **Build command:** (la stå tom)
5. **Publish directory:** `.`
6. Klikk "Deploy site"

## Filstruktur

```
/Sykdomslaere
├── index.html        # Hoved-HTML med tre views
├── style.css         # Mobile-first styling
├── netlify.toml      # Netlify-konfigurasjon
├── README.md         # Denne filen
└── /js
    ├── state.js      # App state management
    ├── storage.js    # LocalStorage-håndtering
    ├── quiz-engine.js # Quiz-logikk
    ├── ui.js         # DOM-manipulasjon
    ├── app.js        # Initialisering og event-binding
    └── /questions    # 17 spørsmålsfiler (én per kategori)
```

## Teknologi

- Vanilla HTML/CSS/JavaScript
- Ingen rammeverk eller build-verktøy
- Mobile-first responsive design
- LocalStorage for persistens
- Netlify for hosting

## Medisinsk innhold

Spørsmålene dekker sentrale temaer for sykepleie:

- ABCDE-prinsipper for akutt vurdering
- qSOFA og NEWS2 for sepsis/forverring
- Glasgow Coma Scale (GCS)
- Kliniske kasuistikker
- Patofysiologi og symptomer
- Akuttbehandling og førstehjelp

---

Laget for sykepleiestudenter i Norge.
