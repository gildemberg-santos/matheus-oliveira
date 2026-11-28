# 03 — Verificação de coerência com o Figma

**Data:** 28/11/2026
**Link verificado:** `https://www.figma.com/design/w9J31MpcaZH9GFOHU1k1jF/Portfolio?node-id=4004-32`
**Escopo:** auditoria somente leitura. Nenhum arquivo de site foi modificado para produzir este relatório.

> Este documento registra o que foi comprovado, o que ficou inconclusivo e o que depende de decisão do titular. Ele não autoriza, por si só, mudança de conteúdo ou de layout.

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

- `--color-action-hover` está declarado, mas não é usado em nenhuma regra — o estado de destaque do frame ainda não tem implementação.
- `--color-focus` e `--color-focus-inverse` são aliases extras, derivados de `orange/500` e `neutral/000`. Não constam no frame; servem apenas ao indicador de foco.
- Contraste calculado: `#767676` sobre `#FCFCFC` = **4,43:1**. Passa em texto grande (hero), mas fica abaixo de 4,5:1 se aplicado a texto normal. No CSS atual, o único uso em tamanho normal é o marcador `—` das listas de `.case-section__body`.
- Os exemplos da seção `03 / CORES EM CONTEXTO` do frame são documentação do design system; não há página correspondente no site, e isso não foi tratado como divergência.

---

## 3. Imagens — 11 de 12 idênticas ao Figma

Método: extração das imagens incorporadas aos 7 PDFs com `pdfimages -png`, normalização para `200 × 200` e comparação por RMSE com cada WebP de `assets/images/`. Valores abaixo de `0,01` indicam a mesma imagem com recompressão.

| Asset | Origem | RMSE |
|---|---|---|
| `portrait/matheus-apresentacao.webp` | `Portfólio · Desktop-1`, imagem 000 (604×720) | 0,0053 |
| `portrait/matheus-sobre.webp` | `Portfólio · Desktop`, imagem 000 (800×800) | 0,0061 |
| `cases/follow-up-01..04.webp` | `Página Fup`, imagens 000/002/004/006 | 0,0029–0,0035 |
| `cases/whatsapp-suite-01..04.webp` | `Whats Suite`, imagens 000/002/004/006 | 0,0040–0,0060 |
| `cases/shopbot-01.webp` | `Shopbot-1`, imagem 000 | 0,0043 |
| **`cases/shopbot-02.webp`** | **sem correspondência** | **0,3514** (melhor) |

### 3.1 Pontos que exigem decisão

- **`shopbot-02.webp`** tem as mesmas dimensões da imagem 002 de `Shopbot-1.pdf` (753 × 544), mas o conteúdo é diferente. Não foi possível determinar a origem do arquivo atual pela comparação de pixels.
- **`matheus-apresentacao.webp`** é a imagem 604 × 720 do frame da home e está publicada com `alt="Imagem de apresentação de Matheus Oliveira"`. A leitura visual a identificou como um **veículo escuro**, não como a foto de pessoa que aparece no mesmo frame (que também contém imagens de 1079 × 1600 e 3024 × 4032). Uma segunda confirmação visual não pôde ser concluída dentro do limite de uso do modelo. **Confirmar com o titular antes de trocar o arquivo ou o `alt`.**

---

## 4. Páginas versus frames exportados

Comparação do topo da home (até 1500 px) entre o PDF `Portfólio · Desktop-1.pdf` e a home servida localmente a 1440 px.

**Coerente:** texto do hero, tratamento em três linhas com “Product Designer” em preto e o restante em cinza, parágrafo introdutório, fundo claro e cores do header/nav.

| Ponto | Frame exportado | Site | Situação |
|---|---|---|---|
| Nome no hero | “Matheus Almeida” | “Matheus Oliveira” | Correção decidida pelo titular (`AGENTS.md`) |
| Cargo no header | “Product Designer” acima do nome | “PRODUCT DESIGNER” abaixo do nome, em caixa alta | Divergência visual |
| “Esse sou eu ↓” | à direita, após o parágrafo | à esquerda, abaixo da imagem | Divergência de posição |
| Imagem do topo | foto de pessoa à direita | imagem 604×720 à esquerda (ver §3.1) | Divergência a confirmar |
| Bloco de automações de disparo | presente no topo do frame | não existe no site | Classificação inconclusiva: o texto não aparece na camada de texto do PDF, apenas na imagem renderizada |
| `01 / SOBRE` | presente no frame | começa abaixo da área comparada (y ≈ 1346 no site) | Não foi possível confirmar visualmente no recorte; existe no HTML |

Não foi aplicada nenhuma mudança de layout a partir destes pontos: todos dependem de confirmação do titular ou de decisão registrada.

---

## 5. Método e limitações

- A aba do Figma já estava aberta no navegador integrado; a conta é anônima (`canView: true`, `canEdit: false`), então não foi possível usar Dev Mode/inspecionar nós.
- O modelo desta sessão não aceita imagem como entrada. A leitura visual foi feita por subagentes com modelos de visão e pelo endpoint público de oEmbed do Figma.
- O suporte a leitor de tela do canvas do Figma está desativado, então a árvore de acessibilidade da aba não expõe os nós do desenho.
- A API interna do Figma forneceu apenas metadados do arquivo; não houve acesso ao grafo de nós do documento.
- O servidor local usado para o screenshot (`python3 -m http.server 8000 --bind 127.0.0.1`) foi encerrado.
- `git status --short` permaneceu limpo durante toda a verificação.

---

## 6. Conclusão

- **Coerente:** todos os tokens de cor do frame `4004-32` e a aplicação semântica no CSS.
- **Coerente com ressalva:** 11 de 12 imagens são as mesmas dos frames; `shopbot-02.webp` não foi identificado entre elas.
- **Pendente de decisão:** imagem usada como retrato na home, posição do cargo e do link “Esse sou eu ↓”, bloco de automações, uso de `action/hover`, contraste de `text/muted` em texto normal e validação visual final com o titular.
