# Sykdomslære Quiz

Quiz-webapp for eksamensforberedelse i sykdomslære – laget for sykepleiestudenter.

## Funksjoner

- **Kategoribasert quiz** – velg mellom 18 fagområder
- **Vanskelighetsgrader** – lett, medium, eksamen
- **Treningsmodus** – umiddelbar feedback og forklaringer
- **Eksamensmodus** – tidsbegrenset, ingen tilbakemelding før slutt
- **Poenglagring** – lokal lagring av resultater

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
    └── /questions    # Spørsmålsdata per kategori
```

## Roadmap

- [x] **Fase 1:** Prosjektstruktur og UI-skjelett
- [ ] **Fase 2:** State management og quiz-motor
- [ ] **Fase 3:** Spørsmålsdata (90+ spørsmål)
- [ ] **Fase 4:** Eksamensmodus med timer
- [ ] **Fase 5:** Statistikk og localStorage

## Teknologi

- Vanilla HTML/CSS/JavaScript
- Ingen rammeverk eller build-verktøy
- Mobile-first responsive design
- Netlify for hosting

---

Laget for sykepleiestudenter i Norge.
