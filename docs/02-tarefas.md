# 02 — Backlog de tarefas

**Atualizado em:** 28/11/2026
**Como usar:** cada tarefa tem ID, fase, dependência, critério de pronto e status. Execute na ordem das fases; marque `[x]` apenas após a verificação. Pendências externas estão em `BLOQUEIOS` e não devem ser contornadas com conteúdo inventado.

Status: `[ ]` a fazer · `[~]` em andamento · `[x]` concluído · `[-]` bloqueado.

---

## BLOQUEIOS (informações a obter)

| ID | Pendência | Impacto | Situação |
|---|---|---|---|
| B1 | Nome de exibição | Home, Sobre, cases e rodapé | **Resolvido:** Matheus Oliveira |
| B2 | Texto dos cases "Unificando produtos" e "Seguro veicular" | Cards 03 e 05 da home e suas páginas | Aberto — cards fora da home até decisão |
| B3 | URLs reais: LinkedIn, currículo, demo do ShopBot e link externo do WhatsApp Suite | CTAs externos e links auxiliares | Parcial — LinkedIn resolvido e registrado em `docs/00-inventario-pdfs.md`; faltam currículo, demo do ShopBot e link externo do WhatsApp Suite |
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
- [~] **T04** Coletar as URLs dos CTAs e links e registrar em `docs/00-inventario-pdfs.md`. LinkedIn registrado; pendem currículo, demo do ShopBot e link externo do WhatsApp Suite (B3).

## Fase 1 — Fundação

- [x] **T05** `css/tokens.css`: primitivas + aliases semânticos + escala tipográfica + espaçamento + breakpoints documentados.
- [x] **T06** `css/base.css`: reset, tipografia, `:focus-visible`, `prefers-reduced-motion`.
- [x] **T07** `css/layout.css`: header, nav, split de duas colunas (768 px+), faixa CTA e rodapé.
- [x] **T08** `css/components.css`: hero, botões/links, card de projeto, tags, galeria, seções de case, timeline.
- [x] **T09** Header e rodapé em HTML estático, idênticos em todas as páginas; `aria-current` na página Sobre e `aria-current="location"` nos cases.
- [x] **T10** `js/main.js` + `js/modules/nav.js`: menu mobile com `aria-expanded` e Escape; conteúdo e links legíveis sem JS.
- [x] **T11** Atualizar `README.md` e `AGENTS.md` com estrutura real, mapa de páginas e decisões.

## Fase 2 — Home

- [x] **T12** `index.html`: header, hero, intro e bloco `01 / SOBRE` com "Mais sobre mim". Nome corrigido, typos revisados e título do hero com as três linhas e o destaque "Product Designer" conforme referência visual confirmada.
- [x] **T13** `index.html`: `02 / PORTFÓLIO` com os 3 cards com fonte aprovada (01, 02 e 04). Cards 03 e 05 fora até B2.
- [x] **T14** `index.html`: faixa laranja com CTA interno e rodapé escuro com contato/copyright. LinkedIn publicado; demais CTAs externos pendentes exibidos como texto com aviso.
- [x] **T15** Verificar home em 375/768/1280 px: console sem erro, sem rolagem horizontal, teclado e foco visíveis. Ver detalhes em "Verificação executada".

## Fase 3 — Sobre

- [x] **T16** `sobre/index.html`: hero, três parágrafos de carreira e bloco "+7 anos".
- [x] **T17** `sobre/index.html`: timeline 2019–2026, "Meu currículo", "Meu LinkedIn" e "O meu propósito". LinkedIn publicado; currículo segue como texto com aviso.
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

- [~] **T26** `title`, descrição, `og:type`/`og:title`/`og:description`/`og:locale` e favicon próprio prontos em todas as páginas; `canonical` e `og:image` pendentes. **Depende:** B5 para valores com URL absoluta.
- [-] **T27** `sitemap.xml` e `robots.txt` com o domínio definitivo. **Depende:** B5.
- [~] **T28** Auditoria de acessibilidade, performance e links: checklists estruturais, visuais e de teclado executados; LinkedIn verificado; contraste por ferramenta, validação visual com o titular e demais links externos dependem de B3/B8.
- [x] **T29** Revisão final: `git diff --check` limpo, diff revisado e documentação atualizada. Checklist de `AGENTS.md` §11 registrado abaixo.

---

## Verificação executada (25/11/2026)

Método: servidor local `python3 -m http.server 8000 --bind 127.0.0.1`, Chrome headless via CDP para medir 375/768/1280 px, mais checagem estrutural com `HTMLParser`.

- [x] 5 páginas abertas com HTTP 200; CSS, JS e WebP também com HTTP 200.
- [x] Nenhum erro ou aviso no console (`Runtime.exceptionThrown` e `Log.entryAdded`).
- [x] `lang="pt-BR"`, um `<h1>` por página, descrição, skip link e nenhum estilo/script inline.
- [x] Todos os links e fontes internos existem; todas as âncoras (`#conteudo`, `#portfolio`, `#sobre`, `#contato`, `#topo`) resolvem; nenhum `href="#"`.
- [x] LinkedIn publicado com `target="_blank"` e `rel="noopener noreferrer"` no rodapé das 5 páginas e em "Meu LinkedIn" na página Sobre; URL registrada em `docs/00-inventario-pdfs.md`.
- [x] Nenhuma imagem quebrada e nenhuma rolagem horizontal nas 5 páginas em 375/768/1280 px.
- [x] Menu mobile: oculto em 375 px com JS, botão visível, abre com clique, fecha com Escape; em 768/1280 px a navegação fica sempre visível e o botão some.
- [x] Sem JavaScript em 375 px: conteúdo e links continuam visíveis e a navegação aparece sem o botão.
- [x] Tab/Shift+Tab percorrem skip link, logo, botão de menu e links, com `:focus-visible` em todos; skip link recebe foco.
- [x] Texto publicado revisado: nome Matheus Oliveira, "Conecte-se pelo LinkedIn", "Decisões-chave e outcomes" e "follow-ups"/"follow-up" no lugar das abreviações do PDF.
- [x] Hero da home aplicado em três linhas: "Product Designer" em `text/primary` e o restante em `text/muted`, conforme imagem de referência enviada pelo titular; nome permanece Matheus Oliveira.
- [x] Favicon próprio servido como `image/svg+xml` nas 5 páginas; 4 metadados Open Graph presentes sem `og:url`/`og:image` inventados.
- [x] CTAs ainda pendentes não simulam link: `.cta-band__title` e "Meu currículo" sem `href` e fora da ordem de foco; "Meu LinkedIn" é link real com `rel` seguro.
- [x] Menu aberto em 375 px fecha ao cruzar 768 px e continua fechado ao voltar para 375 px.
- [x] Nenhum hex fora de `css/tokens.css`; `node --check` nos dois módulos JS passou; `git diff --check` limpo.
- [ ] Contraste medido por ferramenta automática e validação visual com o titular — não executado; cálculo manual prévio encontrou conformidade nos pares usados (texto `#414141` sobre `#FCFCFC`, preto sobre laranja, branco sobre preto, branco sobre laranja apenas em texto grande). O `#767676` do hero sobre `#FCFCFC` resulta em 4,43:1, acima do mínimo de 3:1 para texto grande.

> O navegador do OpenCode estava desconectado; a verificação visual foi feita com Chrome headless na própria máquina. Não foi possível fazer inspeção visual por imagem neste modelo.

---

## Correções pós-auditoria do Figma (28/11/2026)

Relatório completo em `docs/03-verificacao-figma.md`. Escopo definido pelo titular: achados com fonte no frame + troca do retrato da home.

- [x] **T30** Cargo `Product Designer` acima do nome nas 5 páginas; caixa alta removida e espaçamento ajustado no header.
- [x] **T31** Link “Esse sou eu ↓” reposicionado à direita, após o parágrafo do hero.
- [x] **T32** Retrato da home trocado pela imagem 006 (3024×4032) do frame `Portfólio · Desktop-1`, reamostrada para 768×1024; `width`/`height` atualizados.
- [x] **T33** `--color-action-hover` aplicado ao hover/foco da faixa de CTA (branco sobre `#D83C12` = 4,59:1).
- [x] **T34** Marcador `—` das listas de case trocado para `text/secondary` (9,95:1).
- [x] **T35** Falso positivo de `shopbot-02.webp` corrigido no relatório: o arquivo já vinha da imagem 002 do PDF com `smask`. Nenhuma troca de arquivo foi necessária.
- [ ] **T36** Validação visual final com o titular (posição da imagem na home, `alt` do retrato e gráficos de case) — depende de B8 e da disponibilidade do titular.
