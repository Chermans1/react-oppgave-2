# React Oppgave 2 – useState og useEffect

Dette prosjektet er laget som en React-oppgave hvor målet er å øve på React Hooks, API-henting og interaktive komponenter.

Applikasjonen består av tre komponenter: CookieClicker, CatFacts og Users.

## CookieClicker

En enkel CookieClicker hvor brukeren kan klikke på en kjeks for å samle poeng.

- Hvert klikk gir ett poeng.
- Poengsummen oppdateres med useState.
- Kjeksen har en enkel klikkeanimasjon.

## CatFacts

En komponent som henter kattfakta fra Cat Facts API.

- Bruker useEffect til å hente data ved oppstart.
- Bruker useState til å håndtere facts, loading og error.
- Viser fem kattfakta ved hjelp av .map().
- Har en knapp for å hente nye kattfakta.

## Users

En komponent som viser og registrerer brukere.

- Starter med fire brukere fra mockData.
- Bruker useState til å håndtere brukerlisten.
- Har input-felt for brukernavn og e-postadresse.
- Nye brukere legges til uten å endre mockData.
- Viser antall registrerte brukere.

## Teknologier

- React
- JavaScript
- Vite
- HTML
- CSS

## Slik kjører du prosjektet

Installer nødvendige pakker:

```bash
npm install
```

Start utviklingsserveren:

```bash
npm run dev
```

Åpne adressen som vises i terminalen.

## Testing

Prosjektet er kontrollert med:

```bash
npm run lint
npm run build
```

Begge kommandoene ble kjørt uten feil.

Nettsiden er også testet i desktop-, tablet- og mobilvisning.
