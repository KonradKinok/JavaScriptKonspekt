# JavaScriptKonspekt

# GoIT FSON17: JavaScript

## Spis

- [Jak zainstalować repozytorium?](#jak-zainstalować-repozytorium)
- [Jak uruchomić stronę?](#jak-uruchomić-stronę)
- [Struktura plików](#struktura-plików)
  - [Pliki HTML](#pliki-html)
  - [Style CSS](#style-css)
    - [SCSS? A nie CSS?](#scss-a-nie-css)
  - [Skrypty JS](#skrypty-js)
    - [Dlaczego skrypty mają końcówkę `.mjs`?](#dlaczego-skrypty-mają-końcówkę-mjs)

## Jak zainstalować repozytorium?

- Wymagany jest [NodeJS](https://nodejs.org/)
- Jako narzędzie do kodowania polecam [Visual Studio Code](https://code.visualstudio.com/)
  - Ważne! Jeśli potrzebujecie narzędzia w przeglądarce, użyjcie [VSCode.dev](https://vscode.dev/)
- Wersja, której chcemy to 20 LTS - na dzień 26.01.2024 dokładna wersja to `20.11.0`
- W katalogu głównym projektu (tam, gdzie ten plik) należy wpisać `npm install`, żeby zainstalować potrzebne pakiety

## Jak uruchomić stronę?

- W katalogu głównym projektu (tam, gdzie ten plik) należy wpisać `npm start`, żeby uruchomić skrypt i stronę poprzez Parcel

## Struktura plików

### Pliki HTML

- `src/index.html` - główny plik, który będzie wyświetlał naszą stronę

### Style CSS

- `src/styles/index.scss` - główny plik stylów w formacie SCSS

#### SCSS? A nie CSS?

SCSS to inny format CSS, który musi być _skompilowany_, tj. zbudowany do zwykłego CSSa. Kluczowym jego elementem i powodem, dla którego jest tu użyty, jest możliwość pisania hierarchicznie. Oznacza to, że jeśli mamy element wewnątrz elementu, możemy opisać go tak:

```scss
.parent {
  background: #fff;

  .main {
    background: #eee;

    .child {
      background: #ddd;
    }
  }
}
```

zamiast tak:

```css
.parent {
  background: #fff;
}

.parent .main {
  background: #eee;
}

.parent .main .child {
  background: #ddd;
}
```

Pozornie nie musi wyglądać to lepiej, ale bardzo szybko będziemy w stanie to zweryfikować podczas pracy. 😄

### Skrypty JS

- `src/scripts` - katalog ze skryptami JS
- `src/scripts/[nr zajęć].mjs` - skrypt, którego ID to numer zajęć

#### Dlaczego skrypty mają końcówkę `.mjs`?

Pliki `.mjs` to inaczej pliki modułowe JS. Pliki te korzystają ze składni ESM (ang. ECMAScript Module), które m.in. korzystają ze słów kluczowych `import` i `export`. Jakkolwiek nazywanie pliku `.mjs` jest opcjonalnie i niewymagane, oznaczenie `.mjs` gwarantuje, że konkretny plik JS korzysta ze składni ESM - czyli ich składnia wygląda tak:

```js
import component from "library";
```

a nie tak:

```js
const component = require("library");
```

co jest **kluczowe** w pisaniu JavaScript w sposób spójny i czytelny.
