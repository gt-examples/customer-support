# Customer Support

A multilingual help desk and customer support portal with FAQ, ticket tracking, contact form, and key metrics — built with [gt-next](https://generaltranslation.com) to showcase real-world i18n patterns.

**[Live Demo](https://customer-support.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates how to build a fully internationalized customer support portal using General Translation's `gt-next` library. It features a ticket dashboard with status badges, FAQ section, contact form, and statistics overview — all fully translated across five locales (English, Spanish, French, Japanese, Chinese).

## GT Features Used

- `<T>` — JSX translation (wide wrapping pattern)
- `<Branch>` — Locale-aware conditional rendering (ticket status badges)
- `<Plural>` — Pluralization (ticket counts)
- `<Num>` — Number formatting (statistics)
- `<DateTime>` — Date/time formatting (ticket timestamps)
- `<Var>` — Dynamic value interpolation
- `getGT` — Server-side string translations (metadata, placeholders)
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/customer-support.git
cd customer-support
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
