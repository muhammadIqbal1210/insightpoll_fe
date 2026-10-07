# DESIGN.md

> Design System & UI Guidelines
>
> Product: InsightNusantara AI
> Version: 1.0
> Design Style: Executive Intelligence Platform
> Inspiration: Finorio, IDSurvey, Linear, Stripe, Palantir, Tableau

---

# Brand Vision

InsightNusantara AI adalah platform intelligence analytics yang menggabungkan:

- Political Intelligence
- Policy Intelligence
- Market Intelligence
- Spatial Intelligence
- AI Analytics

Desain harus memberikan kesan:

- Modern
- Premium
- Enterprise
- Data Driven
- Government Grade
- Research Technology
- Trustworthy

---

# Design Principles

## 1. Typography First

Typography menjadi elemen visual utama.

Mengikuti pendekatan:

- Finorio
- Linear
- Stripe

Gunakan headline besar dengan whitespace luas.

---

## 2. Clean Interface

Hindari:

- terlalu banyak warna
- shadow berlebihan
- gradient berlebihan
- card berlebihan

Fokus pada:

- hierarchy
- spacing
- readability

---

## 3. Enterprise Experience

Target pengguna:

- Pemerintah
- Konsultan Politik
- Lembaga Survei
- Korporasi
- Investor

Tampilan harus terlihat profesional.

---

## 4. Data Visualization Focus

Visual utama:

- KPI
- Heatmap
- GIS
- Dashboard
- Survey Analytics

---

# Typography

## Sans Font

```css
font-family:
ui-sans-serif,
system-ui,
sans-serif,
"Apple Color Emoji",
"Segoe UI Emoji",
"Segoe UI Symbol",
"Noto Color Emoji";
```

Digunakan untuk:

- seluruh interface
- headline
- body text
- navigation
- buttons

---

## Monospace Font

```css
font-family:
ui-monospace,
SFMono-Regular,
Menlo,
Monaco,
Consolas,
"Liberation Mono",
"Courier New",
monospace;
```

Digunakan untuk:

- statistik
- KPI
- persentase
- angka survei
- electoral result
- API response
- code snippets

---

# Color System

## Primary

```css
#01F2D1
```

Nama:

```css
primary
```

Digunakan untuk:

- CTA
- Active State
- Analytics Highlight
- GIS Highlight
- Success State

---

## Black

```css
#000000
```

Nama:

```css
text-primary
```

Digunakan untuk:

- Headline
- Navigation
- Main Content

---

## Text Secondary

```css
#5E6470
```

Nama:

```css
text-secondary
```

Digunakan untuk:

- Description
- Supporting Text
- Metadata

---

## Background

```css
#FFFFFF
```

Nama:

```css
background
```

---

## Surface

```css
#F8FAFC
```

Nama:

```css
surface
```

---

## Border

```css
#E5E7EB
```

Nama:

```css
border
```

---

# Typography Classes

## Hero Headline

Class:

```css
text-display-md
font-light
-tracking-[1.2px]
text-text-primary

delay-150
duration-700
fill-mode-both

fade-in
slide-in-from-bottom-4

lg:text-display-lg
xl:text-display-xl
```

Contoh:

```text
Transforming Decisions
with Intelligence
```

---

## Sub Headline

Class:

```css
max-w-125
text-display-sm
text-text-primary

lg:text-display-md
xl:max-w-135.25
```

Contoh:

```text
Platform riset, survei,
GIS dan AI analytics
untuk organisasi modern.
```

---

## Sub Sub Headline

Class:

```css
text-display-xs
text-text-primary

lg:text-display-md
```

Contoh:

```text
Pol-Intelligence Engine
```

---

## Description

Class:

```css
text-md
font-light
text-text-secondary

delay-300
duration-700
fill-mode-both

fade-in
slide-in-from-bottom-4
```

Contoh:

```text
Analisis elektabilitas,
sentimen publik,
dan pemetaan spasial
secara real-time.
```

---

# Layout

## Container

```css
max-w-[1440px]
mx-auto

px-6
lg:px-10
xl:px-20
```

---

## Section Spacing

Desktop

```css
py-32
```

Tablet

```css
py-24
```

Mobile

```css
py-16
```

---

## Content Width

Headline:

```css
max-w-[900px]
```

Description:

```css
max-w-[650px]
```

Text Content:

```css
max-w-[800px]
```

---

# Navigation

Mengacu pada referensi IDSurvey.

## Navbar

```css
fixed
top-6

backdrop-blur-xl

bg-white/80

rounded-full

border
border-white/20

shadow-lg

z-50
```

---

## Navbar Height

```css
h-20
```

---

## Navigation Menu

```css
text-sm
font-medium

transition-all

hover:text-[#01F2D1]
```

---

## Primary CTA

```css
bg-[#01F2D1]
text-black

rounded-full

px-8
py-4

font-medium

transition-all

hover:scale-105
```

---

## Secondary CTA

```css
border

rounded-full

px-8
py-4

bg-white

hover:bg-gray-50
```

---

# Landing Page Structure

```text
Navbar

Hero

Trusted By

About Platform

Pol-Intelligence Engine

Policy Insight Advisory

Market Analytics Suite

Spatial Data Engine

Executive Dashboard

Why Choose Us

Case Studies

Pricing

FAQ

Contact

Footer
```

---

# Hero Section

Referensi:

- Finorio Hero
- IDSurvey Hero

---

## Layout

```text
LEFT

Headline
Description
CTA

RIGHT

Dashboard Preview
Map Preview
Analytics Preview
```

---

## Height

```css
min-h-screen
```

---

## Background

```css
bg-white
```

Tambahkan grid halus.

```css
bg-grid-black/[0.02]
```

---

## CTA Group

```css
flex
gap-4
items-center
```

---

# Trusted By Section

Tampilkan:

```text
Kementerian
BUMN
Pemerintah Daerah
Universitas
Lembaga Survei
Perusahaan Nasional
```

Layout:

```css
grid-cols-2
md:grid-cols-4
lg:grid-cols-6
```

---

# Feature Sections

## Layout

Desktop:

```css
grid-cols-2
```

atau

```css
grid-cols-3
```

---

## Feature Card

```css
rounded-3xl

border

bg-white

p-8

transition-all

hover:border-[#01F2D1]

hover:-translate-y-1
```

---

# Dashboard Preview Section

Menampilkan:

- Electoral Trend
- Survey Analytics
- Public Sentiment
- NPS
- KPI Monitoring

Style:

```text
Palantir
+
Power BI
+
Tableau
```

---

# GIS Section

## Map Preview

Menampilkan:

- Heatmap
- Election Map
- Sentiment Map
- Public Satisfaction Map

---

## Map Card

```css
rounded-[32px]

overflow-hidden

border
```

---

## Highlight

```css
#01F2D1
```

Opacity:

```css
rgba(1,242,209,.15)
```

---

# Statistics

Gunakan:

```css
font-mono
```

Contoh:

```text
72.35%
1,523,221
+18.7%
92.4
```

---

# Pricing

Mengacu pada layout Finorio.

Kolom:

```text
Starter
Professional
Enterprise
```

Professional menjadi highlighted plan.

```css
border-[#01F2D1]
shadow-lg
```

---

# FAQ

Style:

```css
rounded-2xl

border

bg-white
```

---

# Contact

Layout:

```text
LEFT

Contact Information

RIGHT

Contact Form
```

---

# Footer

Background:

```css
bg-black
```

Text:

```css
text-white
```

Accent:

```css
#01F2D1
```

---

# Animation

## Headline

```css
fade-in
slide-in-from-bottom-4

duration-700
delay-150
```

---

## Description

```css
fade-in
slide-in-from-bottom-4

duration-700
delay-300
```

---

## Cards

```css
transition-all
duration-300

hover:-translate-y-2
```

---

# Dashboard Design Rules

Gunakan:

- KPI Cards
- Line Charts
- Bar Charts
- GIS Maps
- Survey Tables

Hindari:

- terlalu banyak warna
- chart berlebihan
- card terlalu kecil

---

# Mobile Guidelines

## Container

```css
px-4
```

---

## Hero

```css
flex-col
```

Dashboard Preview berada di bawah headline.

---

## Navbar

Gunakan:

```text
Hamburger Menu
```

---

# UI Moodboard

Referensi visual:

- Finorio
- IDSurvey
- Linear
- Stripe
- Notion
- Tableau
- Palantir Gotham
- Vercel

---

# Final Visual Goal

Menciptakan kesan:

"Platform Intelligence Analytics kelas enterprise yang digunakan pemerintah, lembaga survei, konsultan politik, dan perusahaan besar untuk mengambil keputusan berbasis data secara cepat, akurat, dan modern."