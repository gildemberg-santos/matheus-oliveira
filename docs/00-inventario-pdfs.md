# 00 — Inventário dos PDFs e sistema visual

**Fonte:** `system deginer/` (7 arquivos PDF, 1 página cada)
**Levantado em:** 25/11/2026
**Método:** extração de texto com `pdftotext -layout`, medição de fontes/cores/posições com `pdfplumber`, lista de imagens com `pdfimages -list`. As páginas são exportações de frames do Figma, com texto em contornos (Type 3 "FigmaGlyphs").

> Este é o inventário das referências. Os PDFs são **material de origem somente leitura** — não são publicados nem editados. Texto bruto extraído está em `docs/fontes/textos-pdfs.md`; ele contém erros de digitação presentes nos arquivos e **não** é cópia final para o site.

---

## 1. Arquivos

| PDF | Frame | Imagens incorporadas | Papel no site |
|---|---:|---:|---|
| `Portfólio · Desktop-1.pdf` | 1440 × 5936 | 3 | **Home/landing** — hero, "01 / SOBRE", "02 / PORTFÓLIO" com 5 cases, contato |
| `Portfólio · Desktop.pdf` | 1440 × 3554 | 2 | **Página Sobre** — carreira, "+7 anos", timeline, propósito, contato |
| `Página Fup.pdf` | 1440 × 5940 | 4 | Case **Sistema de Follow-up para além da janela de 24 horas** |
| `Whats Suite.pdf` | 1440 × 7572 | 4 | Case **WhatsApp Suite — A nova era da Leadster** |
| `Shopbot-1.pdf` | 1440 × 6942 | 2 | Case **Shopbot — Agente de IA para lojas virtuais** |
| `Shopbot.pdf` | 1440 × 6469 | 1 | Case **Reduzindo o tempo de espera para entrega de valor** (onboarding) — não listado na home |
| `Design system · Cores.pdf` | 1120 × 1900 | 0 | **Tokens de cor** — paleta primitiva, aplicação semântica, exemplos em contexto |

Os PDFs **não contêm hyperlinks**. Todos os CTAs exigem URLs reais fornecidas pelo titular.

---

## 2. Layout e grid

- Largura de referência: **1440 px**. Margem lateral: **48 px**.
- Coluna esquerda começa em `x = 48`; coluna direita começa em `x = 750`.
- Faixa de CTA: bloco laranja de **largura total** e **172 px de altura**.
- Rodapé: bloco preto de **largura total** e **628 px de altura**.
- Fundo das páginas: `#FCFCFC`. Divisores: `#E6E6E6`.
- Página do design system usa frame de 1120 px com a mesma margem de 48 px.

---

## 3. Tipografia observada (px no frame 1440)

| Tamanho | Uso |
|---:|---|
| 94 | Título principal (hero) de home, Sobre e cases |
| 88 | "Cases de trabalho" |
| 78 | CTA das faixas laranja e do rodapé ("Vamos criar juntos?") |
| 72 | Assinatura do rodapé ("Conecte-se.", "pelo LinkedIn") |
| 68 | Manchetes das seções de case e números/emphases (ex.: "+7 anos") |
| 56 | Título dos cards de projeto na home |
| 32 | "Fale comigo pelo LinkedIn" no rodapé |
| 30 | Parágrafo de destaque na home |
| 21 | Corpo de texto |
| 20 | Logo "Matheus Oliveira" no header |
| 18 | Localização e disponibilidade no rodapé |
| 17 | Navegação, tags de case, metadados "DURAÇÃO"/"METODOLOGIA" |
| 16 | Links auxiliares ("Mais sobre mim ↗", "Conheça o...") |
| 15 | "Voltar para página anterior" |
| 14 | Copyright |
| 13 | Rótulos de seção ("01 / PROBLEMA", "CONTATO") |

O nome da fonte original **não é recuperável**: o Figma exportou o texto como contornos. Decisão pendente: usar **Inter self-hosted** (sugestão) ou outra fonte informada pelo titular.

---

## 4. Cores (do `Design system · Cores.pdf`)

### Paleta primitiva

| Token | Hex |
|---|---|
| `neutral/000` | `#FFFFFF` |
| `neutral/050` | `#FCFCFC` |
| `neutral/200` | `#E6E6E6` |
| `neutral/400` | `#B8B8B8` |
| `neutral/500` | `#767676` |
| `neutral/700` | `#414141` |
| `neutral/950` | `#000000` |
| `orange/500` | `#FE3702` |
| `orange/600` | `#D83C12` |

### Aplicação semântica

| Token | Referência | Uso |
|---|---|---|
| `background/page` | `neutral/050` | Fundo principal |
| `background/inverse` | `neutral/950` | Seções escuras |
| `surface/default` | `neutral/000` | Superfícies claras |
| `text/primary` | `neutral/950` | Títulos e texto principal |
| `text/secondary` | `neutral/700` | Descrições |
| `text/muted` | `neutral/500` | Informações auxiliares |
| `text/inverse` | `neutral/000` | Texto em fundo escuro |
| `text/on-dark-secondary` | `neutral/400` | Texto secundário no rodapé |
| `border/subtle` | `neutral/200` | Divisores e contornos |
| `action/primary` | `orange/500` | Chamada de contato |
| `action/hover` | `orange/600` | Estado de destaque |

Estrutura declarada no próprio PDF: **Primitivas → Cores semânticas → Elementos do portfólio**. Nenhuma cor fora desses tokens deve aparecer no CSS.

---

## 5. Padrões de página

### Home (`Desktop-1`)

1. Header: "Voltar para página anterior" (15), logo (20), nav `Projetos / Sobre / Contato ↗` (17).
2. Hero (94): "Olá, sou Matheus Almeida — Product Designer para pessoas, produtos e novas possibilidades." → **corrigir para Matheus Oliveira**.
3. Introdução (21): "+7 anos construindo soluções simples..." e "Esse sou eu ↓".
4. `01 / SOBRE` (13): manchete "Ideias em movimento." (68), texto (30), link "Mais sobre mim ↗" (16).
5. `02 / PORTFÓLIO` (13): "Cases de trabalho" (88) e 5 cards (título 56, categoria 14/17, descrição 21, "Ver projeto ↗" 16).
6. Rodapé escuro com CTA (78/72), "Fale comigo pelo LinkedIn" (32), localização/disponibilidade (18), copyright (14), "Voltar ao topo ↑".

### Cards da home

| # | Categoria | Título | Descrição |
|---:|---|---|---|
| 01 | PRODUCT DESIGN | Sistema de Follow-up para além da janela de 24 horas | Sequência de mensagens para reengajar leads durante o atendimento |
| 02 | PRODUCT DESIGN | WhatsApp Suite - A nova era da Leadster | Agentes de IA que atuam dentro do seu número e plataforma de atendimento humano |
| 03 | UX/UI DESIGN | Tudo em um único lugar - Unificando produtos | Navegação entre produtos facilitadas e partindo do mesmo ponto |
| 04 | UX/UI DESIGN - ESTRATÉGIA | ShopBot - Agentes de IA para lojas virtuais | Inteligencia Artificial respondendo e recomendando produtos |
| 05 | DESIGN & INOVAÇÃO | Democratizando o acesso a seguro veicular | Acione o socorro veicular direto do seu automóvel |

### Sobre (`Desktop`)

- Hero (94): "Sou o Matheus Almeida, Product Designer, UX/UI Designer que busco através da criatividade criar soluçõe simples" → corrigir nome e ortografia.
- Três parágrafos de carreira (21), bloco "+7 anos adquirindo experiência com Design" (68).
- Timeline (20):

| Período | Empresa | Cargo |
|---|---|---|
| 2023 – 2026 | Leadster | Product Designer Pleno |
| 2021 – 2023 | Leadster | UX/UI Designer |
| 2021 – 2021 | Ziko | UX/UI Designer |
| 2019 – 2021 | Retina Web | Designer Gráfico |
| 2019 – 2019 | Ober | Estagiário |

- Links "Meu currículo" e "Meu LinkedIn" (16).
- "O meu propósito" (68) com dois parágrafos (21) e rodapé padrão.

### Case (padrão dos 4 PDFs de projeto)

1. Header idêntico ao da home.
2. Hero: título (94), subtítulo (21), tags (17).
3. Mockups (quando houver) ou faixa visual com imagem.
4. Faixa laranja de 172 px com CTA (78): "Conheça o WhatsApp Suite" / "Veja uma demo do ShopBot".
5. Cinco seções numeradas ( rótulo 13 ): `01 / PROBLEMA`, `02 / MEU PAPEL`, `03 / PROCESSO`, `04 / O QUE APRENDEMOS`, `05 / RESULTADOS`.
6. Cada seção: manchete de 68 px na coluna esquerda (+ metadado de 17 px quando existir) e corpo de 21 px na direita.
7. Rodapé preto de 628 px com mesmo CTA da home.

Resumo dos números publicados nos cases:

| Case | Duração | Resultados em destaque |
|---|---|---|
| Follow-up | 2 sprints | 100% de ativação em 60 clientes; retorno de 8% (antes 5%) em 20 contas |
| WhatsApp Suite | 8 meses | 60 clientes em menos de um ano; +20% MRR; >1.000.000 mensagens; CSAT ~100%; >R$300.000 em vendas; >200.000 templates aprovados |
| Shopbot | 8 meses | +R$30 mil MRR em 6 meses; menor churn; média 23× ROI; 90% das perguntas respondidas pela IA; 30% de conversão em vendas |
| Onboarding (case extra) | 1 mês | Configuração de 2 h para 20 min; reuniões de 2 para 1; 10 dias a menos para lançar o agente |

---

## 6. Divergências encontradas nos PDFs

- **Nome:** o header diz "Matheus Oliveira", mas o hero da home, o hero da página Sobre e o copyright dizem "Matheus Almeida". **Decisão do titular: usar `Matheus Oliveira` em todo o site.**
- **Typos no texto original:** "soluçõe simples", "pesssoas", "disponibilzados", "reengajemntos", "precifição", "respondidades", "onbaord", "metrificiei", "backclog". Corrigir na transcrição final sem alterar o sentido.
- **Home × acervo:** a home lista 5 cases, mas não há PDF de "Tudo em um único lugar — Unificando produtos" nem de "Democratizando o acesso a seguro veicular". Há um PDF extra de onboarding que não está na home.
- O PDF `Página Fup.pdf` traz "Conheça o WhatsApp Suite" na faixa laranja; o título do case é Follow-up. Confirmar se o CTA deve permanecer ou virar link interno para o case do WhatsApp Suite.

---

## 7. Decisões e pendências

| Item | Situação |
|---|---|
| Nome de exibição | **Definido:** Matheus Oliveira em todo o site |
| Mapa de páginas | **Definido:** `Desktop-1` = home; `Desktop` = Sobre |
| Cases sem PDF | **Pendente:** fornecer texto aprovado; cards 03 e 05 ficaram fora da home |
| Case de onboarding | **Pendente:** incluir como página própria ou manter fora |
| URLs de CTAs e links | Links internos e "Ver projeto" resolvidos; pendentes LinkedIn, currículo, demo do ShopBot e link externo do WhatsApp Suite |
| Fonte tipográfica | **Pendente:** pilha do sistema como provisória; sugestão Inter self-hosted |
| Domínio, `canonical`, `og:image`, `sitemap.xml` | **Pendente:** necessário para URL absoluta; favicon e `og:title`/`og:description`/`og:type`/`og:locale` já presentes |
| Uso das imagens dos PDFs | Extraídas e convertidas para WebP em `assets/images/`; descrições de `alt` aguardam revisão do titular |

---

## 8. Arquivos relacionados

- `docs/01-plano-implementacao.md` — estrutura de pastas, fases e critérios de aceite.
- `docs/02-tarefas.md` — backlog com IDs, dependências e status.
- `docs/fontes/textos-pdfs.md` — texto bruto extraído dos 7 PDFs.
- `AGENTS.md` — regras de trabalho do agente neste repositório.
