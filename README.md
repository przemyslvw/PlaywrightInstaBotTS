# PlaywrightInstaBotTS


instagram-simple-likes-and-comments-bot/
│
├── README.md           # Opis projektu, instalacja i użycie
├── package.json        # Konfiguracja npm, zależności
├── tsconfig.json       # Konfiguracja TypeScript
├── playwright.config.ts # Konfiguracja Playwright
├── .env                # Plik z danymi środowiskowymi (API keys, credentials)
├── src/                # Główne pliki źródłowe
│   ├── bot/
│   │   ├── login.ts    # Logika logowania do Instagrama
│   │   ├── like.ts     # Skrypt odpowiedzialny za polubienia
│   │   ├── comment.ts  # Skrypt odpowiedzialny za komentarze
│   │   └── utils.ts    # Funkcje pomocnicze (np. obsługa plików cookie)
│   └── tests/          # Testy automatyczne
│       ├── login.spec.ts
│       ├── like.spec.ts
│       ├── comment.spec.ts
│       └── utils.spec.ts
├── .gitignore          # Wykluczenia dla Git
├── tests-results/      # Wyniki testów (opcjonalnie)
└── docs/               # Dokumentacja projektu (np. diagramy, dodatkowe notatki)
