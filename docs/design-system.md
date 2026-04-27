# TripWay - Design System

Este documento detalha o sistema de design utilizado na aplicação TripWay, implementado e consumido através do Tailwind CSS.

## 1. Tipografia

A identidade visual utiliza duas fontes principais do Google Fonts, configuradas no Tailwind e aplicadas sistematicamente pela interface.

*   **Fontes Principais:**
    *   **Headline/Títulos:** `Be Vietnam Pro` (Pesos: 400, 500, 700, 900). Utilizada em `h1`, `h2`, `h3` e classes textuais principais.
    *   **Body/Corpo de Texto:** `Work Sans` (Pesos: 300, 400, 500, 600). Utilizada no texto geral da página e parágrafos.
*   **Tokens Tailwind:**
    *   `font-headline`
    *   `font-body`
    *   `font-label`

## 2. Paleta de Cores (Theme Colors)

A aplicação utiliza uma paleta de cores rica, baseada em tons de verde esmeralda para transmitir natureza e sustentabilidade, com cores de suporte para erro e estados secundários.

### Primary (Verde)
A cor de ação principal e destaque da marca.
*   `primary`: `#0e6400`
*   `on-primary`: `#ffffff`
*   `primary-container`: `#2a7e19`
*   `on-primary-container`: `#ceffba`

### Secondary (Azul / Complementar)
Cores de apoio para elementos secundários e detalhes pontuais.
*   `secondary`: `#006495`
*   `on-secondary`: `#ffffff`
*   `secondary-container`: `#50b9ff`
*   `on-secondary-container`: `#00486c`

### Tertiary (Verde Musgo / Selva)
Usado para elementos descritivos e informativos específicos.
*   `tertiary`: `#206136`
*   `on-tertiary`: `#ffffff`
*   `tertiary-container`: `#3a7a4d`
*   `on-tertiary-container`: `#c4ffcd`

### Surface & Background (Fundos)
Definições de fundos de páginas e componentes (cards, seções).
*   `background`: `#f6fbee`
*   `on-background`: `#181d15`
*   `surface`: `#f6fbee`
*   `on-surface`: `#181d15`
*   `surface-variant`: `#dfe4d8`
*   `on-surface-variant`: `#40493b`
*   `surface-container`: `#ebf0e3`
*   `surface-container-low`: `#f0f5e8`
*   `surface-container-lowest`: `#ffffff`
*   `surface-container-high`: `#e5eadd`
*   `surface-container-highest`: `#dfe4d8`

### Error (Vermelhos)
Sinalizações de erro e alertas destrutivos.
*   `error`: `#ba1a1a`
*   `on-error`: `#ffffff`
*   `error-container`: `#ffdad6`
*   `on-error-container`: `#93000a`

### Outline (Bordas)
*   `outline`: `#707a6a`
*   `outline-variant`: `#bfcab7`

## 3. Border Radius (Arredondamento)

O arredondamento padrão dos componentes garante um aspecto moderno e suave:
*   `rounded` (DEFAULT): `0.25rem` (4px)
*   `rounded-lg`: `1rem` (16px) - Usado largamente em cards e botões.
*   `rounded-xl`: `1.5rem` (24px) - Usado em botões de ação principal (ex: "Entrar", "Reservar") e seções de destaque.
*   `rounded-full`: `9999px` - Pílulas, badges e ícones de favoritar.

## 4. Ícones

O projeto utiliza o sistema de ícones do Google **Material Symbols Outlined** com customizações específicas de estilo para que tenham uma aparência delineada moderna:
*   Classe CSS customizada globalmente nas `styles.scss` ou `index.html` limitando `FILL` para zero, e os pesos.

## 5. Componentes Principais

### Cards de Experiência
*   **Container:** `bg-surface-container-low`, `rounded-lg`, `overflow-hidden`.
*   **Sombra no Hover:** `hover:shadow-2xl hover:shadow-emerald-900/10` para efeito de elevação fluido.
*   **Badges Flutuantes:** Usam containers semi-transparentes com fundo `bg-tertiary-container/90` ou `bg-secondary-container/90` e `backdrop-blur-md` (efeito "Glassmorphism").
*   **Imagem de Destaque:** Efeito de Zoom interno ao passar o mouse (`transition-transform duration-700 group-hover:scale-110`).

### Botões
*   **Call To Action Principal (CTA):** `bg-primary`, `text-on-primary`, `px-8`, `py-3`, `rounded-xl`, `font-bold`.
*   **Call To Action Secundário / Filtros Ativos:** `bg-surface-container`, text escuro com `hover:bg-primary hover:text-on-primary`.
*   **Botões Circulares (Icon Buttons):** `p-2`, `rounded-full`, base com opacidade (ex: `bg-surface/30 backdrop-blur-md`).

### Navegação de Topo (Navbar)
*   Fixa no topo com a técnica "Glassmorphism" para garantir a visibilidade dos elementos subjacentes rolando.
*   Classe utilitária no design original: `glass-nav` mapeada para `background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); shadow-emerald-900/5`.

## 6. Responsividade e Container
*   Baseado no grid system nativo e classes responsivas padrão do Tailwind CSS (`md:`, `lg:`).
*   Containers globais limitados tipicamente a `max-w-screen-2xl` com preenchimentos horizontais (`px-8`).
