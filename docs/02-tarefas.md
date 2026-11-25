# 02 — Backlog de tarefas

**Atualizado em:** 25/11/2026
**Como usar:** cada tarefa tem ID, fase, dependência, critério de pronto e status. Execute na ordem das fases; marque `[x]` apenas após a verificação. Pendências externas estão em `BLOQUEIOS` e não devem ser contornadas com conteúdo inventado.

Status: `[ ]` a fazer · `[~]` em andamento · `[x]` concluído · `[-]` bloqueado.

---

## BLOQUEIOS (informações a obter)

| ID | Pendência | Impacto | Situação |
|---|---|---|---|
| B1 | Nome de exibição | Home, Sobre, cases e rodapé | **Resolvido:** Matheus Oliveira |
| B2 | Texto dos cases "Unificando produtos" e "Seguro veicular" | Cards 03 e 05 da home e suas páginas | Aberto |
| B3 | URLs reais: LinkedIn, currículo, demo do ShopBot, "Ver projeto", "Conheça o WhatsApp Suite" | Todos os CTAs e links | Aberto |
| B4 | Fonte tipográfica (sugestão: Inter self-hosted) | `css/tokens.css`, `assets/fonts/` | Aberto |
| B5 | Domínio definitivo | `canonical`, Open Graph, `sitemap.xml`, `robots.txt` | Aberto |
| B6 | Incluir ou não o case de onboarding (`Shopbot.pdf`) | Página extra e rodapé/nav | Aberto |
| B7 | Autorização para publicar as imagens extraídas dos PDFs | Páginas de case | Aberto |

---

## Fase 0 — Preparação das fontes

- [x] **T00** Levantar PDFs, extrair textos e medir sistema visual → `00-inventario-pdfs.md`, `docs/fontes/textos-pdfs.md`.
- [ ] **T01** Criar estrutura de pastas (`css/`, `js/modules/`, `assets/images/cases/`, `assets/fonts/`). `.gitignore` já criado para desfazer o `docs/*` do gitignore global.
- [-] **T02** Extrair as 16 imagens incorporadas dos PDFs (`pdfimages -j`), mapear por página/case e converter para WebP. **Depende:** B7.
- [-] **T03** Definir e hospedar a fonte tipográfica em `assets/fonts/` com `font-display: swap`. **Depende:** B4.
- [-] **T04** Coletar as URLs dos CTAs e links e registrar em `docs/00-inventario-pdfs.md`. **Depende:** B3.

## Fase 1 — Fundação

- [ ] **T05** `css/tokens.css`: primitivas + aliases semânticos + escala tipográfica + espaçamento + breakpoints.
  - *Pronto quando:* nenhum hex fora deste arquivo e todos os tokens do inventário existem.
- [ ] **T06** `css/base.css`: reset, tipografia, `:focus-visible`, `prefers-reduced-motion`.
- [ ] **T07** `css/layout.css`: header, nav, grid de duas colunas (768 px+), faixa CTA de 172 px, rodapé de 628 px.
- [ ] **T08** `css/components.css`: botão/CTA, card de projeto, tags, manchete de seção, timeline, número de resultado.
- [ ] **T09** Header e rodapé em HTML estático, idênticos em todas as páginas; logo e nav com `aria-current`.
- [ ] **T10** `js/main.js` + `js/modules/nav.js`: menu mobile e "Voltar ao topo", com conteúdo legível sem JS.
  - *Depende:* T07.
- [ ] **T11** Atualizar `README.md` e `AGENTS.md` com estrutura real, mapa de páginas e decisões.
  - *Depende:* T01–T10.

## Fase 2 — Home

- [ ] **T12** `index.html`: header, hero, intro e bloco `01 / SOBRE` com "Mais sobre mim".
  - *Depende:* T09, T05–T08.
  - *Atenção:* usar "Matheus Oliveira"; corrigir "soluçõe simples" e demais typos.
- [ ] **T13** `index.html`: `02 / PORTFÓLIO` com os cards aprovados (título 56, categoria, descrição, "Ver projeto").
  - *Depende:* T12, B2, B3.
- [ ] **T14** `index.html`: faixa laranja com CTA e rodapé escuro com contato/copyright.
  - *Depende:* T12, B3.
- [ ] **T15** Verificar home em 375/768/1280 px: console sem erro, sem rolagem horizontal, teclado e foco visíveis.
  - *Depende:* T12–T14.

## Fase 3 — Sobre

- [ ] **T16** `sobre/index.html`: hero, três parágrafos de carreira e bloco "+7 anos".
  - *Depende:* T09, T05–T08.
- [ ] **T17** `sobre/index.html`: timeline 2019–2026, "Meu currículo", "Meu LinkedIn" e "O meu propósito".
  - *Depende:* T16, B3.
- [ ] **T18** Revisar texto da página Sobre: nome correto e ortografia ("pesssoas", etc.).
  - *Depende:* T16, T17.

## Fase 4 — Cases

- [ ] **T19** Template de case: hero (94/21/17), mockups, faixa laranja, seções `01`–`05`, rodapé.
  - *Depende:* T09, T05–T08.
- [ ] **T20** `projetos/follow-up-24h/index.html` com texto integral do `Página Fup.pdf`.
  - *Depende:* T19, B3.
- [ ] **T21** `projetos/whatsapp-suite/index.html` com texto integral do `Whats Suite.pdf`.
  - *Depende:* T19, B3.
- [ ] **T22** `projetos/shopbot/index.html` com texto integral do `Shopbot-1.pdf`.
  - *Depende:* T19, B3.
- [-] **T23** `projetos/onboarding-ia/index.html` com texto do `Shopbot.pdf`. **Depende:** B6.
- [-] **T24** `projetos/unificando-produtos/` e `projetos/seguro-veicular/`. **Depende:** B2.
- [ ] **T25** Posicionar imagens extraídas nas páginas de case com `alt`, `width`, `height` e `loading="lazy"`.
  - *Depende:* T02, T20–T22.

## Fase 5 — Acabamento

- [ ] **T26** `title`, descrição, `og:title`, `og:description`, `og:image` e favicon em todas as páginas.
  - *Depende:* T12–T25, B5 para valores definitivos.
- [-] **T27** `sitemap.xml` e `robots.txt` com o domínio definitivo. **Depende:** B5.
- [ ] **T28** Auditoria final de acessibilidade, performance e links (todos os `href` resolvem; nenhum `#` definitivo).
  - *Depende:* T15, T18, T25, B3.
- [ ] **T29** Revisão final: `git diff --check`, `git diff`, checklist de `AGENTS.md` §11 e §13, documentação atualizada.
  - *Depende:* T26–T28.

---

## Ordem sugerida de execução

`T01 → T05 → T06 → T07 → T08 → T09 → T10 → T12 → T14 → T15 → T16 → T17 → T18 → T19 → T20 → T21 → T22 → T25 → T26 → T28 → T29 → T11`

As tarefas bloqueadas entram na ordem assim que a pendência for resolvida: T02/T03/T04 (Fase 0), T13 (B2/B3), T23 (B6), T24 (B2), T27 (B5).
