# 03 — Verificação de coerência com o Figma

**Data:** 28/11/2026
**Link verificado:** `https://www.figma.com/design/w9J31MpcaZH9GFOHU1k1jF/Portfolio?node-id=4004-32`
**Escopo:** auditoria somente leitura. Nenhum arquivo de site foi modificado para produzir este relatório.

> Este documento registra o que foi comprovado, o que ficou inconclusivo e o que depende de decisão do titular. A seção 7 registra as correções aplicadas em 28/11/2026 após a escolha do titular; as seções 2 a 6 descrevem o estado original da auditoria.

---

## 1. Identificação do frame

O `node-id=4004-32` corresponde ao **frame de design system — cores**, não à home nem às páginas de case.

Evidências:

- `https://www.figma.com/api/oembed?url=...` devolveu miniatura `640 × 1086` do nó.
- A proporção bate com `system deginer/Design system · Cores.pdf` (`1120 × 1900`): 0,589 em ambos.
- Leitura visual da miniatura: cabeçalho `PORTFÓLIO / DESIGN SYSTEM`, título `Cores com propósito.`, seções `01 / PALETA PRIMITIVA`, `02 / APLICAÇÃO SEMÂNTICA`, `03 / CORES EM CONTEXTO` e o breadcrumb `ESTRUTURA / Primitivas → Cores semânticas → Elementos do portfólio`.

Como o link aponta para o frame de cores, a verificação direta foi feita nos tokens. As páginas foram comparadas com os demais PDFs, que são exportações de frames do mesmo arquivo Figma.

---

## 2. Tokens de cor — coerentes

### 2.1 Primitivas (9/9)

| Token do frame | Valor no Figma | `css/tokens.css` |
|---|---|---|
| `neutral/000` | `#FFFFFF` | `#ffffff` |
| `neutral/050` | `#FCFCFC` | `#fcfcfc` |
| `neutral/200` | `#E6E6E6` | `#e6e6e6` |
| `neutral/400` | `#B8B8B8` | `#b8b8b8` |
| `neutral/500` | `#767676` | `#767676` |
| `neutral/700` | `#414141` | `#414141` |
| `neutral/950` | `#000000` | `#000000` |
| `orange/500` | `#FE3702` | `#fe3702` |
| `orange/600` | `#D83C12` | `#d83c12` |

### 2.2 Aplicação semântica (11/11)

| Token | Referência no Figma | Implementado |
|---|---|---|
| `background/page` | `neutral/050` | `var(--neutral-050)` |
| `background/inverse` | `neutral/950` | `var(--neutral-950)` |
| `surface/default` | `neutral/000` | `var(--neutral-000)` |
| `text/primary` | `neutral/950` | `var(--neutral-950)` |
| `text/secondary` | `neutral/700` | `var(--neutral-700)` |
| `text/muted` | `neutral/500` | `var(--neutral-500)` |
| `text/inverse` | `neutral/000` | `var(--neutral-000)` |
| `text/on-dark-secondary` | `neutral/400` | `var(--neutral-400)` |
| `border/subtle` | `neutral/200` | `var(--neutral-200)` |
| `action/primary` | `orange/500` | `var(--orange-500)` |
| `action/hover` | `orange/600` | `var(--orange-600)` |

Aplicação observada: fundo `#FCFCFC` no `body`, faixa de CTA em `#FE3702`, rodapé em `#000000` com texto secundário `#B8B8B8`, hero em `#767676` com destaque em `#000000`. Nenhum hexadecimal aparece fora de `css/tokens.css`.

### 2.3 Ressalvas

- `--color-action-hover` estava declarado, mas não era usado em nenhuma regra — o estado de destaque do frame ainda não tinha implementação (corrigido na §7).
- `--color-focus` e `--color-focus-inverse` são aliases extras, derivados de `orange/500` e `neutral/000`. Não constam no frame; servem apenas ao indicador de foco.
- Contraste calculado: `#767676` sobre `#FCFCFC` = **4,43:1**. Passa em texto grande (hero), mas fica abaixo de 4,5:1 se aplicado a texto normal. O único uso em tamanho normal era o marcador `—` das listas de `.case-section__body` (corrigido na §7).
- Os exemplos da seção `03 / CORES EM CONTEXTO` do frame são documentação do design system; não há página correspondente no site, e isso não foi tratado como divergência.

---

## 3. Imagens — 12 de 12 idênticas ao Figma

Método: extração das imagens incorporadas aos 7 PDFs com `pdfimages -png`, composição da máscara de transparência (`smask`) quando presente, normalização para `200 × 200` e comparação por RMSE com cada WebP de `assets/images/`. Valores abaixo de `0,01` indicam a mesma imagem com recompressão/reamostragem.

| Asset | Origem | RMSE |
|---|---|---|
| `portrait/matheus-apresentacao.webp` | `Portfólio · Desktop-1`, imagem 006 (3024×4032), reamostrada para 768×1024 | 0,0077 |
| `portrait/matheus-sobre.webp` | `Portfólio · Desktop`, imagem 000 (800×800) | 0,0061 |
| `cases/follow-up-01..04.webp` | `Página Fup`, imagens 000/002/004/006 | 0,0029–0,0035 |
| `cases/whatsapp-suite-01..04.webp` | `Whats Suite`, imagens 000/002/004/006 | 0,0040–0,0060 |
| `cases/shopbot-01.webp` | `Shopbot-1`, imagem 000 | 0,0043 |
| `cases/shopbot-02.webp` | `Shopbot-1`, imagem 002 + máscara 003 (753×544) | 0,0064 |

### 3.1 Correção de falso positivo

A versão inicial deste relatório afirmou que `shopbot-02.webp` não tinha correspondência no Figma (melhor RMSE `0,3514`). **Estava errado.** A comparação usou a imagem 002 do PDF sem aplicar a `smask` (máscara de opacidade, média `0,708`). Recompondo a transparência, o WebP existente e a imagem do PDF diferem por `0,0057` — apenas recompressão. O arquivo já era o do Figma; nenhuma substituição foi necessária.

A imagem 006 do frame da home também tem `smask`, mas ela é totalmente opaca (média `1`), então não alterou a composição.

### 3.2 Decisão aplicada

`matheus-apresentacao.webp` era a imagem 000 (604×720), identificada visualmente como um veículo escuro, embora o `alt` dissesse “Imagem de apresentação de Matheus Oliveira”. O titular confirmou o uso da imagem 006 (3024×4032) como retrato. Ela foi reamostrada para 768×1024 e substituída na home; a diferença residual de `0,0077` é da reamostragem e da compressão WebP. O `alt` segue genérico por causa do bloqueio B8 (revisão pelo titular).

---

## 4. Páginas versus frames exportados

Comparação do topo da home (até 1500 px) entre o PDF `Portfólio · Desktop-1.pdf` e a home servida localmente a 1440 px.

**Coerente:** texto do hero, tratamento em três linhas com “Product Designer” em preto e o restante em cinza, parágrafo introdutório, fundo claro e cores do header/nav.

| Ponto | Frame exportado | Site | Situação |
|---|---|---|---|
| Nome no hero | “Matheus Almeida” | “Matheus Oliveira” | Correção decidida pelo titular (`AGENTS.md`) |
| Cargo no header | “Product Designer” acima do nome | “PRODUCT DESIGNER” abaixo do nome, em caixa alta | Corrigido na §7 |
| “Esse sou eu ↓” | à direita, após o parágrafo (x ≈ 1291 no frame) | à esquerda, abaixo da imagem | Corrigido na §7 |
| Imagem do topo | foto de pessoa à direita | imagem 604×720 à esquerda (ver §3.2) | Arquivo trocado na §7; posição à direita não foi alterada |
| Tela de automações de disparo | imagem 002 (920×544) à esquerda do retrato | era inexistente no site | Adicionada na §8; o texto da interface está na imagem, não na camada de texto do PDF |
| `01 / SOBRE` | presente no frame | começa abaixo da área comparada (y ≈ 1346 no site) | Não foi possível confirmar visualmente no recorte; existe no HTML |

Na auditoria original, nenhum ponto tinha sido alterado. Na correção de §7, cargo e link foram ajustados conforme o frame; a posição da imagem e o bloco de automações permanecem como estavam por não haver decisão suficiente.

---

## 5. Método e limitações

- A aba do Figma já estava aberta no navegador integrado; a conta é anônima (`canView: true`, `canEdit: false`), então não foi possível usar Dev Mode/inspecionar nós.
- O modelo desta sessão não aceita imagem como entrada. A leitura visual foi feita por subagentes com modelos de visão e pelo endpoint público de oEmbed do Figma.
- O suporte a leitor de tela do canvas do Figma está desativado, então a árvore de acessibilidade da aba não expõe os nós do desenho.
- A API interna do Figma forneceu apenas metadados do arquivo; não houve acesso ao grafo de nós do documento.
- O servidor local usado para o screenshot (`python3 -m http.server 8000 --bind 127.0.0.1`) foi encerrado.
- `git status --short` permaneceu limpo durante toda a auditoria; as alterações posteriores estão listadas na §7.
- A comparação por RMSE exige aplicar a `smask` de cada imagem antes de medir; sem isso, imagens com transparência geram falsos positivos (ver §3.1).

---

## 6. Conclusão

- **Coerente:** todos os tokens de cor do frame `4004-32` e a aplicação semântica no CSS; as 12 imagens do site vêm dos frames exportados.
- **Corrigido:** cargo no header, posição de “Esse sou eu ↓”, retrato da home, uso de `action/hover` e contraste do marcador de lista (§7).
- **Ainda pendente:** posição da imagem do topo, validação visual final com o titular, `alt` das imagens (B8), fonte definitiva (B4) e domínio (B5).

---

## 7. Correções aplicadas (28/11/2026)

Escopo escolhido pelo titular: implementar os achados com fonte no Figma e trocar o retrato da home pela imagem 006 (3024×4032).

| Achado | Arquivo | Mudança |
|---|---|---|
| Cargo no header | `index.html`, `sobre/index.html` e 3 cases | `Product Designer` passou a vir antes do nome; `text-transform: uppercase` removido em `.brand__role` |
| Cargo no header | `css/layout.css` | `margin-top` do cargo trocado por `margin-bottom` para preservar o espaçamento |
| “Esse sou eu ↓” | `index.html`, `css/components.css` | Link movido para depois do parágrafo e alinhado à direita via `.hero > .hero__link { justify-self: end; }` |
| Retrato da home | `assets/images/portrait/matheus-apresentacao.webp`, `index.html` | Imagem 006 do frame reamostrada para 768×1024; `width`/`height` atualizados |
| `action/hover` | `css/layout.css` | Faixa de CTA usa `--color-action-hover` em `:hover` e `:focus-within`; branco sobre `#D83C12` = 4,59:1 |
| Contraste do marcador | `css/components.css` | `—` das listas de case trocado de `text/muted` (4,43:1) para `text/secondary` (9,95:1) |
| `shopbot-02.webp` | nenhum | Nenhuma troca: arquivo já era o do Figma (falso positivo corrigido na §3.1) |

Não foram alterados nesta rodada: posição da imagem na home, nome do hero, fonte, URLs pendentes e `alt` do retrato. A tela do sistema foi acrescentada na §8, por pedido posterior do titular.

---

## 8. Tela do sistema ao lado do retrato (28/11/2026)

Pedido do titular: manter na home a tela de sistema que aparece ao lado da foto de perfil no Figma.

**Evidência do frame:** `pdftohtml -xml` mostra a imagem 002 do `Portfólio · Desktop-1.pdf` em `x=16, y=784, 920×544 pt`, com o retrato à direita; a comparação por pixels entre essa área renderizada e a imagem extraída deu RMSE `0,024` (centro: `0,015`). Ou seja, é conteúdo visível do frame, não uma camada oculta. A máscara dessa imagem é totalmente opaca.

**Mudança:**

| Arquivo | Mudança |
|---|---|
| `assets/images/home/tela-automacoes.webp` | Nova imagem WebP 920×544 gerada da imagem 002 do PDF; RMSE `0,0044` contra a origem |
| `index.html` | `.hero-media` com a tela à esquerda e o retrato à direita, após o link “Esse sou eu ↓” |
| `css/components.css` | Grid de duas colunas em 768 px+ (`2fr / 1fr`, compatível com 920:472 do frame) e empilhamento em 375 px; gap de `--space-4` (16 px, igual ao frame) |

O texto da interface está dentro da imagem; não foi transcrito como HTML para não duplicar conteúdo nem inventar rótulos. O `alt` descreve a tela de forma genérica e segue sujeito à revisão B8.

---

## 9. Auditoria do site publicado (28/11/2026)

Verificação de `https://matheus-oliveira.onrender.com/index.html` e das 5 páginas: HTML/CSS/JS publicados idênticos ao commit local; 200 em todas as páginas e assets; console e rede sem erros; imagens carregadas; links internos e âncoras válidos; 375/768/1280 px sem rolagem horizontal; Lighthouse 100 em Accessibility, SEO e Best Practices.

**Irregularidade corrigida:** o link da marca tinha `aria-label="Matheus Oliveira — página inicial"`, que não continha o texto visível “Product Designer” — axe `label-content-name-mismatch` (WCAG 2.5.3, impacto *serious*) nas 5 páginas. O `aria-label` passou a ser `"Product Designer Matheus Oliveira — página inicial"`. Após a mudança, o nome acessível contém o texto visível e o Lighthouse não reporta mais a falha.

**Pendências sem mudança:** `og:image` e `canonical` (dependem do domínio definitivo, B5), `alt` do retrato (B8) e validação visual final com o titular (T36).
