# 01 — Plano de implementação

**Versão:** 1.0 · **Atualizado em:** 25/11/2026
**Status:** plano aprovado para execução; nenhuma página implementada até esta data.

> este documento responde "como montar". O inventário das referências está em `00-inventario-pdfs.md`; as unidades de trabalho em `02-tarefas.md`. Em caso de conflito, prevalece `AGENTS.md`.

---

## 1. Decisões fixadas

1. Nome de exibição: **Matheus Oliveira** em todo o site (corrigir "Matheus Almeida" presente nos PDFs).
2. `Portfólio · Desktop-1.pdf` é a **home**; `Portfólio · Desktop.pdf` é a página **Sobre**.
3. Stack: **HTML5 + CSS + JavaScript vanilla**, sem framework e sem build obrigatório (conforme `AGENTS.md`).
4. Conteúdo em **HTML estático**, não gerado por JavaScript. JS só melhora navegação e voltar ao topo.
5. Os PDFs são **somente leitura** e não são publicados; imagens e textos derivados viram `assets/` e `docs/fontes/`.
6. Idioma do conteúdo: **pt-BR**. Identificadores de código em inglês.

---

## 2. Mapa de páginas

| URL | Conteúdo | Origem |
|---|---|---|
| `/` | Home: hero, resumo Sobre, 5 cards, CTA, rodapé | `Portfólio · Desktop-1.pdf` |
| `/sobre/` | Carreira, "+7 anos", timeline, propósito | `Portfólio · Desktop.pdf` |
| `/projetos/follow-up-24h/` | Case Follow-up | `Página Fup.pdf` |
| `/projetos/whatsapp-suite/` | Case WhatsApp Suite | `Whats Suite.pdf` |
| `/projetos/shopbot/` | Case Shopbot | `Shopbot-1.pdf` |
| `/projetos/onboarding-ia/` | Case de onboarding (se aprovado) | `Shopbot.pdf` |
| `/projetos/unificando-produtos/` | Card 03 da home | **sem PDF — aguardando conteúdo** |
| `/projetos/seguro-veicular/` | Card 05 da home | **sem PDF — aguardando conteúdo** |

Páginas ausentes não são publicadas com texto inventado. Se o titular não fornecer o conteúdo, os cards 03 e 05 saem da home na implementação.

---

## 3. Estrutura de arquivos

```text
matheus-oliveira/
├── AGENTS.md
├── README.md
├── .gitignore
├── index.html
├── sobre/
│   └── index.html
├── projetos/
│   ├── follow-up-24h/index.html
│   ├── whatsapp-suite/index.html
│   ├── shopbot/index.html
│   ├── onboarding-ia/index.html
│   ├── unificando-produtos/index.html
│   └── seguro-veicular/index.html
├── css/
│   ├── tokens.css         # primitivas + semânticos + tipografia + espaçamento
│   ├── base.css           # reset, tipografia, foco, reduced motion
│   ├── layout.css         # header, nav, grid de duas colunas, rodapé
│   └── components.css     # CTA, botão, card de projeto, timeline, tags
├── js/
│   ├── main.js            # ponto de entrada
│   └── modules/
│       └── nav.js         # menu mobile e estado ativo
├── assets/
│   ├── images/
│   │   ├── cases/         # capturas extraídas dos PDFs (WebP)
│   │   └── portrait/      # retrato extraído da home/Sobre
│   └── fonts/             # fonte self-hosted (a definir)
├── docs/
│   ├── 00-inventario-pdfs.md
│   ├── 01-plano-implementacao.md
│   ├── 02-tarefas.md
│   └── fontes/textos-pdfs.md
└── system deginer/        # material de origem, somente leitura
```

**Por que uma pasta por página:** URL limpa (`/sobre/`, `/projetos/shopbot/`), sem reescrita e sem dependência de servidor. Marcação repetida de header/rodapé entre páginas é aceita de propósito: evita JS obrigatório e mantém SEO. Toda lógica visual fica no CSS.

---

## 4. Contrato visual

- Implementar os tokens exatos do `Design system · Cores.pdf` em `css/tokens.css`: primeiro as primitivas, depois os aliases semânticos. Nenhum hex em componentes.
- Converter a escala do frame 1440 para CSS responsivo. Base sugerida (root 16 px):
  - hero `clamp(3rem, 6.5vw, 5.875rem)` (94 px no desktop);
  - título de seção `clamp(2.75rem, 6vw, 5.5rem)` (88 px);
  - manchete de case `clamp(2.25rem, 4.7vw, 4.25rem)` (68 px);
  - título de card `clamp(1.75rem, 3.9vw, 3.5rem)` (56 px);
  - corpo `clamp(1.0625rem, 1.45vw, 1.3125rem)` (21 px);
  - meta/tags `1.0625rem` (17 px); rótulo `0.8125rem` (13 px).
- Grid de duas colunas a partir de 768 px: esquerda com manchete/metadado, direita com corpo. Abaixo disso, coluna única.
- Margem lateral: `clamp(1.25rem, 3.33vw, 3rem)` (48 px no desktop).
- Faixa CTA laranja e rodapé preto usam tokens semânticos, nunca cores literais.
- Respeitar `prefers-reduced-motion`; foco visível em `:focus-visible`; nenhuma cor como único indicador de estado.

---

## 5. Fases

### Fase 0 — Preparação das fontes
- Extrair textos dos 7 PDFs para `docs/fontes/textos-pdfs.md` (já feito).
- Extrair imagens incorporadas e convertê-las para WebP com nomes por case.
- Definir a fonte tipográfica e hospedá-la em `assets/fonts/`.
- Obter URLs reais de CTAs e decidir o destino do case de onboarding.

**Pronto quando:** todos os textos e imagens necessários estão no repositório; nenhuma pendência bloqueia a Fase 2.

### Fase 1 — Fundação
- `.gitignore`, `css/tokens.css`, `css/base.css`, `css/layout.css`, `css/components.css`.
- Header e rodapé estáticos (markup repetido), `js/main.js` e `js/modules/nav.js`.
- Atualizar `README.md` e `AGENTS.md` com a estrutura real.

**Pronto quando:** uma página de teste abre via `python3 -m http.server 8000` com cores/tipografia do design system, menu funcional em 375 px e sem erro no console.

### Fase 2 — Home
- Hero, resumo Sobre, lista de cards, faixa CTA e rodapé.
- Corrigir nome e typos na transcrição.
- Cards sem conteúdo aprovado ficam de fora até decisão.

**Pronto quando:** home completa em 375/768/1280 px, sem rolagem horizontal, navegação por teclado e foco visível; checklist de `AGENTS.md` §11 executado.

### Fase 3 — Sobre
- Hero, parágrafos de carreira, bloco "+7 anos", timeline, botões de currículo/LinkedIn e "O meu propósito".

**Pronto quando:** conteúdo revisado quanto ao nome e à ortografia; links reais ou claramente pendentes (nunca `href="#"` fingindo funcionar); validação visual feita.

### Fase 4 — Cases
- Template único de case com as cinco seções.
- Páginas: Follow-up, WhatsApp Suite, Shopbot e, se aprovado, onboarding.
- Imagens extraídas dos PDFs posicionadas conforme os bboxes.

**Pronto quando:** todos os cases abrem, mantêm a sequência `01`–`05`, metadados "DURAÇÃO"/"METODOLOGIA" e números de resultado em destaque; imagens com `alt` real e `loading="lazy"`.

### Fase 5 — Acabamento
- `title`, descrição, `og:*` e favicon por página; `sitemap.xml`/`robots.txt` após domínio definido.
- Auditoria de acessibilidade, performance e links.
- Revisão final do diff e atualização da documentação.

**Pronto quando:** todos os itens da "Definição de pronto" do `AGENTS.md` §13 foram marcados com evidência.

---

## 6. Regras de execução

1. Uma tarefa por vez, na ordem das dependências do backlog.
2. Antes de cada entrega: `git status --short`, executar verificações disponíveis e registrar o que passou/ficou sem verificação.
3. Não publicar conteúdo inventado, nem `href="#"` como link definitivo, nem imagem sem `alt`.
4. Não introduzir framework, CDN, analytics ou formulário sem aprovação registrada.
5. Toda mudança de estrutura, stack ou decisão atualiza `AGENTS.md`, `README.md` e este plano na mesma entrega.
