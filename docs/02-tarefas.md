# 02 — Backlog de tarefas

**Atualizado em:** 25/11/2026
**Como usar:** cada tarefa tem ID, fase, dependência, critério de pronto e status. Execute na ordem das fases; marque `[x]` apenas após a verificação. Pendências externas estão em `BLOQUEIOS` e não devem ser contornadas com conteúdo inventado.

Status: `[ ]` a fazer · `[~]` em andamento · `[x]` concluído · `[-]` bloqueado.

---

## BLOQUEIOS (informações a obter)

| ID | Pendência | Impacto | Situação |
|---|---|---|---|
| B1 | Nome de exibição | Home, Sobre, cases e rodapé | **Resolvido:** Matheus Oliveira |
| B2 | Texto dos cases "Unificando produtos" e "Seguro veicular" | Cards 03 e 05 da home e suas páginas | Aberto — cards fora da home até decisão |
| B3 | URLs reais: LinkedIn, currículo, demo do ShopBot e link externo do WhatsApp Suite | CTAs externos e links auxiliares | Aberto — trechos exibidos como texto com aviso, nunca `href="#"` |
| B4 | Fonte tipográfica | `css/tokens.css`, `assets/fonts/` | Aberto — pilha do sistema usada como provisória |
| B5 | Domínio definitivo | `canonical`, Open Graph, `sitemap.xml`, `robots.txt` | Aberto |
| B6 | Incluir ou não o case de onboarding (`Shopbot.pdf`) | Página extra | Aberto |
| B7 | Uso das imagens extraídas dos PDFs | Páginas de case | **Resolvido imagens extraídas e convertidas para WebP** |
| B8 | Revisão das descrições de `alt` pelo titular | Acessibilidade das imagens | Aberto — capturas de case usadas como decorativas (`alt=""`); retrato tem descrição genérica |

---

## Fase 0 — Preparação das fontes

- [x] **T00** Levantar PDFs, extrair textos e medir sistema visual → `00-inventario-pdfs.md`, `docs/fontes/textos-pdfs.md`.
- [x] **T01** Criar estrutura de pastas (`css/`, `js/modules/`, `assets/images/cases/`, `assets/images/portrait/`). `.gitignore` criado para desfazer o `docs/*` do gitignore global; `.gitattributes` marca os PDFs como binários.
- [x] **T02** Extrair as imagens incorporadas dos PDFs, mapear por página/case e converter para WebP com transparência. 12 WebP gerados (2 retratos, 10 capturas de case). **B8** segue aberto para revisão de `alt`.
- [-] **T03** Definir e hospedar a fonte tipográfica em `assets/fonts/` com `font-display: swap`. **Depende:** B4.
- [-] **T04** Coletar as URLs dos CTAs e links e registrar em `docs/00-inventario-pdfs.md`. **Depende:** B3.

## Fase 1 — Fundação

- [x] **T05** `css/tokens.css`: primitivas + aliases semânticos + escala tipográfica + espaçamento + breakpoints documentados.
- [x] **T06** `css/base.css`: reset, tipografia, `:focus-visible`, `prefers-reduced-motion`.
- [x] **T07** `css/layout.css`: header, nav, split de duas colunas (768 px+), faixa CTA e rodapé.
- [x] **T08** `css/components.css`: hero, botões/links, card de projeto, tags, galeria, seções de case, timeline.
- [x] **T09** Header e rodapé em HTML estático, idênticos em todas as páginas; `aria-current` na página Sobre e `aria-current="location"` nos cases.
- [x] **T10** `js/main.js` + `js/modules/nav.js`: menu mobile com `aria-expanded` e Escape; conteúdo e links legíveis sem JS.
- [x] **T11** Atualizar `README.md` e `AGENTS.md` com estrutura real, mapa de páginas e decisões.

## Fase 2 — Home

- [x] **T12** `index.html`: header, hero, intro e bloco `01 / SOBRE` com "Mais sobre mim". Nome corrigido e typos revisados.
- [x] **T13** `index.html`: `02 / PORTFÓLIO` com os 3 cards com fonte aprovada (01, 02 e 04). Cards 03 e 05 fora até B2.
- [x] **T14** `index.html`: faixa laranja com CTA interno e rodapé escuro com contato/copyright. CTAs externos pendentes exibidos como texto com aviso.
- [x] **T15** Verificar home em 375/768/1280 px: console sem erro, sem rolagem horizontal, teclado e foco visíveis. Ver detalhes em "Verificação executada".

## Fase 3 — Sobre

- [x] **T16** `sobre/index.html`: hero, três parágrafos de carreira e bloco "+7 anos".
- [x] **T17** `sobre/index.html`: timeline 2019–2026, "Meu currículo", "Meu LinkedIn" e "O meu propósito". Links externos pendentes exibidos como texto com aviso.
- [x] **T18** Revisar texto da página Sobre: nome correto e ortografia.

## Fase 4 — Cases

- [x] **T19** Template de case: hero (94/21/17), galeria, faixa laranja, seções `01`–`05`, rodapé.
- [x] **T20** `projetos/follow-up-24h/index.html` com texto integral do `Página Fup.pdf`.
- [x] **T21** `projetos/whatsapp-suite/index.html` com texto integral do `Whats Suite.pdf`.
- [x] **T22** `projetos/shopbot/index.html` com texto integral do `Shopbot-1.pdf`.
- [-] **T23** `projetos/onboarding-ia/index.html` com texto do `Shopbot.pdf`. **Depende:** B6.
- [-] **T24** `projetos/unificando-produtos/` e `projetos/seguro-veicular/`. **Depende:** B2.
- [x] **T25** Posicionar imagens extraídas nas páginas de case com `width`, `height` e `loading="lazy"`. `alt=""` por enquanto, sujeito a B8.

## Fase 5 — Acabamento

- [~] **T26** `title` e descrição em todas as páginas prontos; `og:*` e favicon pendentes. **Depende:** B5 para valores definitivos.
- [-] **T27** `sitemap.xml` e `robots.txt` com o domínio definitivo. **Depende:** B5.
- [~] **T28** Auditoria de acessibilidade, performance e links: checklists estruturais, visuais e de teclado executados; links externos dependem de B3.
- [~] **T29** Revisão final: `git diff --check` limpo, diff revisado e documentação atualizada. Checklist de `AGENTS.md` §11 registrado abaixo.

---

## Verificação executada (25/11/2026)

Método: servidor local `python3 -m http.server 8000 --bind 127.0.0.1`, Chrome headless via CDP para medir 375/768/1280 px, mais checagem estrutural com `HTMLParser`.

- [x] 5 páginas abertas com HTTP 200; CSS, JS e WebP também com HTTP 200.
- [x] Nenhum erro ou aviso no console (`Runtime.exceptionThrown` e `Log.entryAdded`).
- [x] `lang="pt-BR"`, um `<h1>` por página, descrição, skip link e nenhum estilo/script inline.
- [x] Todos os links e fontes internos existem; todas as âncoras (`#conteudo`, `#portfolio`, `#sobre`, `#contato`, `#topo`) resolvem; nenhum `href="#"`.
- [x] Nenhuma imagem quebrada e nenhuma rolagem horizontal nas 5 páginas em 375/768/1280 px.
- [x] Menu mobile: oculto em 375 px com JS, botão visível, abre com clique, fecha com Escape; em 768/1280 px a navegação fica sempre visível e o botão some.
- [x] Sem JavaScript em 375 px: conteúdo e links continuam visíveis e a navegação aparece sem o botão.
- [x] Tab/Shift+Tab percorrem skip link, logo, botão de menu e links, com `:focus-visible` em todos; skip link recebe foco.
- [x] Nenhum hex fora de `css/tokens.css`; `node --check` nos dois módulos JS passou; `git diff --check` limpo.
- [ ] Contraste medido por ferramenta automática e validação visual com o titular — não executado; cálculo manual prévio encontrou conformidade nos pares usados (texto `#414141` sobre `#FCFCFC`, branco sobre preto, branco sobre laranja apenas em texto grande).

> O navegador do OpenCode estava desconectado; a verificação visual foi feita com Chrome headless na própria máquina. Não foi possível fazer inspeção visual por imagem neste modelo.
