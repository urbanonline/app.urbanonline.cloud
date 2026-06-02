# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
pnpm create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Inhalte pflegen

### Wo liegen die Inhalte?

Die deutschen Inhalte liegen direkt in `website/src/content/docs/`:

```
content/docs/
├── guide/
│   ├── user/       ← Anleitungen für Endnutzer
│   └── service/    ← Anleitungen für Servicepersonal
└── faq/
```

Sprachversionen liegen in den jeweiligen Sprachordnern:

```
content/docs/
├── en/
├── es/
├── fr/
└── ru/
```

Jeder Sprachordner spiegelt die deutsche Struktur.

### Wo liegen die Grafiken?

Sprachspezifische Grafiken (z.B. Screenshots mit sichtbarem Text) liegen im `graphics/`-Unterordner des jeweiligen Bereichs:

```
guide/user/graphics/        ← deutsche Grafiken Endnutzer
guide/service/graphics/     ← deutsche Grafiken Service
en/guide/user/graphics/     ← englische Grafiken Endnutzer
```

Sprachunabhängige Grafiken (Fotos, Zeichnungen ohne Text) liegen zentral in `website/src/assets/`.

### Dateinamenskonvention

- Keine Leerzeichen → `StallAnlegen.png` statt `Stall Anlegen.png`
- Keine Umlaute → `Einfuehrung.png` statt `Einführung.png`
- Sprachspezifische Grafiken erhalten einen Suffix → `Login_EN.png`, `Login_FR.png`
- Seitendateien in Kleinbuchstaben mit Bindestrichen → `setup-barns.mdx`

---

## Neue Seite anlegen

Jede Seite ist eine `.mdx`-Datei. Sie beginnt mit einem Frontmatter-Block:

```mdx
---
title: Titel der Seite
description: Kurze Beschreibung des Seiteninhalts (erscheint in Suchergebnissen).
---

Seiteninhalt hier.
```

`title` und `description` sind Pflichtfelder. Die `description` sollte ein vollständiger Satz sein, der beschreibt was die Seite leistet – nicht was sie heißt.

Der Dateiname bestimmt die URL: `setup-barns.mdx` → `/guide/user/setup-barns`

Neue Seiten immer zuerst auf Deutsch anlegen, dann die Sprachversionen.

---

## Mehrsprachigkeit

Deutsch ist die Standardsprache und liegt direkt in `content/docs/` ohne Sprachpräfix. Alle anderen Sprachen liegen in ihrem jeweiligen Unterordner (`en/`, `es/`, `fr/`, `ru/`).

Wenn eine Seite noch nicht übersetzt ist, zeigt Starlight automatisch einen Hinweis an. Zusätzlich sollte am Anfang der noch nicht lokalisierten Seite folgender Hinweis eingefügt werden:

```mdx
:::note
Die Screenshots in dieser Anleitung sind vorläufig auf Deutsch und werden
baldmöglichst durch lokalisierte Versionen ersetzt.
:::
```

Den Hinweis anpassen je nach Sprache – die fertig übersetzten Versionen für EN, ES, FR und RU sind im Repository als Vorlage hinterlegt.

Vorläufige Grafiken erhalten den Sprachsuffix der Zielsprache, auch wenn der Inhalt noch auf Deutsch ist (z.B. `Login_EN.png`). So kann die Datei später ohne Änderung am Code durch die lokalisierte Version ersetzt werden.







## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
