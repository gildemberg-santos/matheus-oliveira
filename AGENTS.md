# AGENTS.md — Matheus Oliveira

**Versão:** 1.5
**Atualizado em:** 25/11/2026
**Stack:** HTML5 + CSS + JavaScript vanilla (ES modules), sem framework
**Aplica-se a:** todo o repositório

> Este arquivo é a fonte de verdade para agentes de código e para quem trabalhar no projeto. Leia inteiro antes de editar. Em caso de conflito, prevalece nesta ordem: **1)** este arquivo; **2)** `README.md`; **3)** decisões registradas em `docs/`.
>
> **Estado atual:** fundação, home, página Sobre e 3 cases implementados em HTML/CSS/JS puro e verificados em 375/768/1280 px, com favicon e Open Graph básico. Ainda faltam URLs externas, fonte definitiva, domínio e texto de 2 cases. Seções marcadas como planejadas neste arquivo continuam como contrato, não como código existente.

---

## 1. Contexto e objetivo

`matheus-oliveira` será o **portfólio pessoal de Matheus Oliveira**: um site estático para apresentar trajetória, projetos, habilidades e forma de contato.

**Objetivo da V1:** site rápido, acessível e responsivo, publicado como arquivos estáticos, sem backend, sem login e sem persistência de dados. O conteúdo é editorial — quem decide o que aparece é o titular.

**Regra de ouro:** nenhum dado biográfico é inventado. Nome completo, cargo, empresas, datas, projetos, links, fotos, números, depoimentos e texto de contato precisam vir do titular ou de fonte por ele confirmada. Se faltar informação, pergunte ou deixe um espaço claramente marcado para preenchimento — nunca crie um "mais ou menos plausível".

**Idioma:** conteúdo e documentação em **português (pt-BR)**. Código, identificadores, nomes de arquivos e mensagens técnicas em **inglês**.

**Fontes e identidade:** as telas e o design system estão em `system deginer/` (7 PDFs, somente leitura) e foram catalogados em `docs/00-inventario-pdfs.md`. O nome de exibição é **Matheus Oliveira** em todo o site; os trechos "Matheus Almeida" presentes nos PDFs são erro a corrigir na transcrição. O mapa de páginas e a ordem de implementação estão em `docs/01-plano-implementacao.md` e `docs/02-tarefas.md`.

---

## 2. Como um agente deve trabalhar

1. Leia este arquivo, `docs/00-inventario-pdfs.md`, `docs/01-plano-implementacao.md` e `docs/02-tarefas.md` antes de qualquer edição. Depois, verifique `git status --short` e os arquivos existentes — não sobrescreva trabalho em andamento.
2. Confira o estado real do repositório. Se uma seção deste arquivo descrever algo que ainda não existe, diga isso explicitamente ao invés de agir como se existisse.
3. Faça a menor mudança que resolve o pedido. Não misture refatoração, redesign e conteúdo novo na mesma entrega.
4. Não invente conteúdo pessoal, projetos, métricas ou depoimentos. Peça o texto fonte.
5. Toda mudança de comportamento vem com verificação: teste automatizado quando houver harness; até lá, checklist manual executado e registrado na entrega (ver §11 e §13).
6. Antes de concluir: rode as verificações disponíveis (§6), revise o `git diff` e atualize a documentação afetada. Se algo não pôde ser verificado, diga o que ficou sem checagem.
7. Peça confirmação antes de: adicionar framework, biblioteca, bundler, CDN, domínio, serviço externo, analytics ou formulário que envie dados.
8. Não crie arquivo "de reserva", cópia duplicada de lógica ou versão alternativa da mesma página. Escolha uma abordagem e implemente-a.
9. Não commite segredo, `.env`, chave de API, token nem dado pessoal que não esteja destinado ao site público.

---

## 3. Regras inegociáveis

1. **Conteúdo real somente.** Toda informação sobre a pessoa, carreira ou projetos precisa de fonte confirmada pelo titular.
2. **Dados pessoais são mínimos.** Publique apenas o que o titular autorizou. Nunca CPF, RG, endereço residencial, e-mail pessoal não autorizado ou telefone sem consentimento.
3. **Contato válido ou honesto.** Link `mailto:`/WhatsApp deve ser válido e confirmado. Se existir formulário, ele precisa enviar de verdade ou dizer claramente que não envia — nunca simule sucesso.
4. **Acessibilidade é requisito, não ajuste final.** WCAG 2.1 AA: semântica HTML, `lang="pt-BR"`, `alt` real, rótulo em todo campo, foco visível, contraste mínimo 4,5:1 para texto, navegação por teclado, alvos de toque de 44 px e `prefers-reduced-motion`.
5. **Mobile-first.** Referência de 375 px; validar também em 768 px e 1280 px. Nada de conteúdo cortado, rolagem horizontal ou menu inalcançável no celular.
6. **O site funciona sem JavaScript.** Conteúdo e navegação são HTML. JS apenas melhora interações (progressivo). Se JS falhar, o site continua legível e navegável.
7. **Sem framework por preferência pessoal.** HTML, CSS e JS vanilla. Qualquer dependência de runtime ou build exige decisão explícita e atualização deste arquivo.
8. **Recursos próprios primeiro.** Fontes self-hosted, imagens locais otimizadas (WebP/AVIF com fallback quando fizer sentido) e SVG para ícones. CDN, Google Fonts e scripts de terceiros só com aprovação.
9. **Privacidade por padrão.** Sem analytics, pixels ou cookies antes de decisão do titular. Sem dados de visitante em `localStorage`, URL ou log.
10. **Links externos seguros.** `target="_blank"` sempre com `rel="noopener noreferrer"`. URL validada antes de publicar.
11. **Nenhuma mudança visual inventada.** Cores, tipografia, espaçamento e componentes vêm dos tokens definidos em `css/tokens.css`. Valor novo entra primeiro nos tokens, com aprovação.
12. **Sem `innerHTML`/`eval` com conteúdo externo.** Use `textContent` e criação de nós. Nenhum dado vindo de URL, formulário ou API é injetado como HTML.
13. **Nenhuma entrega sem verificação.** Mesmo sem suíte de testes, o checklist de §13 é executado e o resultado é comunicado.

---

## 4. Stack decidida

| Camada | Decisão | Observações |
|---|---|---|
| Marcação | HTML5 semântico | `lang="pt-BR"`, um `<h1>` por página, `header`/`nav`/`main`/`footer` |
| Estilo | CSS moderno | Custom properties, Grid/Flexbox, `clamp()`, media queries `min-width` |
| Comportamento | JavaScript vanilla, ES modules | `<script type="module" src="js/main.js">`; sem globais, sem framework |
| Tipografia | Fontes self-hosted | `font-display: swap`; sem Google Fonts por padrão |
| Imagens | WebP/AVIF + SVG | `width`, `height`, `loading="lazy"`, `alt` real |
| Build | Nenhum obrigatório | Arquivos publicados como estão; bundler só com aprovação |
| Servidor local | `python3 -m http.server` | Somente para preview; não é dependência de produção |
| Versionamento | Git + GitHub | Branch principal `main` |
| Testes/harness | A definir | Até existir, verificação é manual e documentada (§11/§13) |

**Não troque** HTML/CSS/JS puro por React, Vue, Next, Tailwind, Bootstrap ou qualquer bundler sem decisão explícita registrada neste arquivo.

---

## 5. Estrutura do repositório

Estado atual: `index.html`, `sobre/`, 3 páginas em `projetos/`, `css/`, `js/`, `assets/images/` e `assets/favicon.svg` já existem. `unificando-produtos/`, `seguro-veicular/` e `onboarding-ia/` seguem pendentes de decisão (B2/B6).

Estrutura da V1 — crie pastas e arquivos adicionais conforme o conteúdo for aprovado, sem criar arquivo vazio "para preencher depois":

```text
matheus-oliveira/
├── AGENTS.md                 # este arquivo
├── README.md                 # visão geral, execução local e links da documentação
├── .gitignore                # arquivos locais, caches e credenciais
├── index.html                # home
├── sobre/
│   └── index.html            # página Sobre
├── projetos/
│   ├── follow-up-24h/index.html
│   ├── whatsapp-suite/index.html
│   ├── shopbot/index.html
│   ├── onboarding-ia/index.html
│   ├── unificando-produtos/index.html
│   └── seguro-veicular/index.html
├── css/
│   ├── tokens.css            # primitivas, semânticos, tipografia, espaçamento
│   ├── base.css              # reset, tipografia, foco, reduced motion
│   ├── layout.css            # header, nav, grid, faixa CTA, rodapé
│   └── components.css        # botão, card de projeto, tags, timeline
├── js/
│   ├── main.js               # ponto de entrada; só inicialização
│   └── modules/              # um módulo por responsabilidade
├── assets/
│   ├── favicon.svg           # ícone próprio com as iniciais MO
│   ├── images/cases/         # capturas extraídas dos PDFs, em WebP
│   ├── images/portrait/      # retrato extraído da home/Sobre
│   └── fonts/                # fontes self-hosted
├── docs/
│   ├── 00-inventario-pdfs.md
│   ├── 01-plano-implementacao.md
│   ├── 02-tarefas.md
│   └── fontes/textos-pdfs.md
└── system deginer/           # PDFs de origem; somente leitura, nunca publicar
```

Uma pasta por página mantém URLs limpas (`/sobre/`, `/projetos/shopbot/`) sem reescrita. Header e rodapé repetidos em HTML são intencionais: o conteúdo não depende de JavaScript. Toda lógica visual fica no CSS.

**Nomes:** pastas e arquivos em `kebab-case` minúsculo (`meu-projeto.css`); classes CSS em `kebab-case`, com padrão BEM quando útil (`.project-card__title`, `.project-card--featured`); variáveis JS em `camelCase`, constantes em `UPPER_SNAKE_CASE`; funções em `camelCase` e verbais (`renderProjects`); tokens CSS em inglês (`--color-primary`, `--space-4`, `--font-body`). Texto visível para o usuário em pt-BR.

**Dependências:** nenhuma na V1. `node_modules/`, `dist/`, caches e arquivos gerados não são versionados. Se um gerenciador de pacotes for aprovado, lockfile entra no Git.

---

## 6. Comandos e verificações

Não existe `Makefile`, `package.json` nem suíte de testes hoje. **Não documente comando que não funciona.** Use o que está disponível:

| Comando | Efeito |
|---|---|
| `python3 -m http.server 8000` | Serve o site em `http://localhost:8000` a partir da raiz do projeto |
| `python3 -m http.server 8000 --bind 127.0.0.1` | Mesmo servidor, escutando só na loopback |
| `git status --short` | Mostra arquivos alterados antes de começar |
| `git diff --check` | Detecta whitespace e conflitos deixados no diff |
| `git diff` | Revisão final do que será commitado |
| `pdftotext -layout "system deginer/<arquivo>.pdf" -` | Texto de referência de um PDF |
| `pdfimages -j "system deginer/<arquivo>.pdf" /tmp/opencode/img` | Extrai imagens incorporadas para conversão posterior |

Imagens extraídas ficam em `/tmp/opencode` até serem convertidas para WebP e renomeadas em `assets/images/`. Exportações temporárias não são versionadas.

Quando um harness de lint/teste for adicionado, crie um único ponto de entrada (por exemplo `npm test` ou `make test`), documente aqui e passe a exigi-lo antes de cada commit. Até lá, a verificação é a lista de §11 executada no navegador e registrada na entrega.

Não use comando que "finja" validar: alvo vazio, script que sempre retorna zero ou checklist marcado sem execução.

---

## 7. HTML

- `<!doctype html>`, `<html lang="pt-BR">`, `<meta charset="utf-8">`, viewport e `<meta name="description">` em toda página.
- `<title>` único e descritivo por página; padrão `Nome — Seção` (ex.: `Matheus Oliveira — Projetos`).
- Estrutura semântica: `<header>`, `<nav>`, `<main>`, `<section>` com heading, `<footer>`. Um único `<h1>`; hierarquia de headings sem pular níveis.
- Link "Pular para o conteúdo" como primeiro elemento focável, apontando para `#main`.
- `<img>` sempre com `alt` significativo; imagem decorativa usa `alt=""`. Nunca use nome de arquivo como `alt`.
- Todo `<input>`, `<textarea>` e `<select>` tem `<label>` associado. Erros de formulário são anunciados por texto, não só por cor.
- Sem `style=""`, `<script>` inline ou `<link>` para CDN sem aprovação. CSS e JS ficam em arquivos próprios.
- Navegação com `aria-current="page"` na página ativa. Ícones decorativos com `aria-hidden="true"`.
- URLs internas relativas e em `kebab-case`; links externos com `rel="noopener noreferrer"` quando abrem nova aba.

---

## 8. CSS

- `css/tokens.css` é a única fonte de cor, fonte, espaçamento, raio, sombra e breakpoint. Nenhum hex solto em `base.css`, `layout.css` ou HTML.
- Variáveis em `:root`; nomes em inglês e escala consistente (`--color-*`, `--space-*`, `--radius-*`, `--font-*`, `--breakpoint-*`).
- Mobile-first: estilo base para telas pequenas; `min-width` para breakpoints. Evite `max-width` sobrepondo regras.
- Sem `!important`, sem IDs para estilizar e sem seletor profundo encadeado sem necessidade. Prefira classes.
- `:focus-visible` com contorno visível e contraste suficiente. Nunca `outline: none` sem substituto.
- `@media (prefers-reduced-motion: reduce)` desativa animações e transições não essenciais.
- Unidades relativas (`rem`, `em`, `%`, `ch`) para texto e espaçamento; `clamp()` para escala fluida.
- Tema escuro só se implementado por completo (tokens, contraste, imagens, foco) e aprovado — nada de "metade escura".

---

## 9. JavaScript

- Um único `<script type="module" src="js/main.js">`. Módulos são deferred por padrão; não use `defer` redundante nem scripts bloqueantes no `<head>`.
- `main.js` apenas consulta o DOM e chama funções dos módulos. Regra de domínio não vive no ponto de entrada.
- Um módulo por responsabilidade (ex.: `navigation.js`, `theme.js`). Sem estado global mutável; estado necessário fica encapsulado no módulo.
- Eventos: registre uma vez; se houver remoção de nós ou re-render, use `AbortController` ou limpeza explícita para não acumular listeners.
- DOM: `querySelector`/`querySelectorAll` com escopo; `textContent` e `createElement` para conteúdo dinâmico. Proibido `innerHTML` com dado de usuário, URL ou API.
- Nunca `eval`, `Function()` ou `document.write`. Nunca confie em parâmetro de URL para inserir conteúdo.
- Chamadas de rede só para endpoints conhecidos e aprovados, com tratamento de erro visível ao usuário. Nenhum segredo no front-end — tudo que está no JS é público.
- Se uma interação depende de JS forneça alternativa HTML (ex.: menu que funciona com `<details>`/`<summary>` ou links visíveis sem JS).

---

## 10. Conteúdo, SEO e metadados

- Todo texto é revisado pelo titular antes de publicar. Nada de "Lorem ipsum" em página final; use apenas em protótipo local claramente identificado.
- Título, descrição, `og:title`, `og:description` e `og:image` com conteúdo real. Imagem de capa existe e foi aprovada.
- `favicon` próprio. `canonical` e `sitemap.xml`/`robots.txt` só depois que o domínio definitivo for decidido — não invente URL.
- Projetos: nome, descrição curta, ano, papel, tecnologias e link válido. Se o link estiver indisponível, diga isso; não esconda nem finja.
- Não publique e-mail, telefone ou WhatsApp sem confirmação explícita de que podem ser públicos.
- Nenhum analytics, pixel, cookie de terceiro ou `Google Fonts` sem aprovação e política de privacidade condizente.

---

## 11. Verificação manual obrigatória

Executar antes de declarar pronto, em **375 px**, **768 px** e **1280 px**:

- [ ] Site abre via `python3 -m http.server 8000` sem erro no console do navegador.
- [ ] Navegação por teclado (Tab/Shift+Tab/Enter) alcança todos os links e controles, com foco visível.
- [ ] Link "Pular para o conteúdo" funciona.
- [ ] Todas as imagens carregam e têm `alt` correto; nenhuma quebra de layout.
- [ ] Contraste de texto e controles passa; erro de formulário não depende só de cor.
- [ ] Sem rolagem horizontal em nenhuma das larguras testadas.
- [ ] Serviço local desligado ou JS desabilitado: conteúdo e links continuam acessíveis.
- [ ] Todos os links internos resolvem; externos abrem com `rel` correto.
- [ ] `git diff --check` limpo e `git diff` sem dado sensível ou arquivo gerado.
- [ ] Resultado da verificação comunicado na entrega (o que passou e o que não passou).

Quando ferramentas automatizadas forem aprovadas, acrescente-as aqui e mantenha esta lista como camada humana.

---

## 12. Git, commits e PRs

- Branch principal: `main`. Trabalhe em branch curta: `feat/projetos`, `fix/menu-mobile`, `docs/agente`.
- **Conventional Commits em português**, com escopo quando útil:
  - `feat(site): adiciona seção de projetos`
  - `fix(css): corrige contraste do rodapé`
  - `docs: registra decisão de tipografia`
- Tipos: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `build`, `ci`.
- Um PR = uma mudança lógica. Descrição com contexto, o que mudou, como testar, riscos e evidência quando for visual (print ou URL local).
- Nunca commite `.env`, segredo, chave, cache, `node_modules/`, `dist/` ou dump de dados.
- Não force push em `main`. Não commite direto em `main` quando houver trabalho de outra pessoa na branch.

---

## 13. Definição de pronto

Uma entrega só termina quando:

- [ ] O conteúdo veio do titular; nada biográfico foi inventado.
- [ ] O comportamento funciona em 375 px, 768 px e 1280 px.
- [ ] Acessibilidade básica verificada: teclado, foco, `alt`, rótulos, contraste, `prefers-reduced-motion`.
- [ ] Site legível e navegável com JavaScript desabilitado.
- [ ] Tokens de `css/tokens.css` usados; nenhum valor visual solto fora deles.
- [ ] Nenhum CDN, script de terceiro, analytics ou formulário novo sem aprovação registrada.
- [ ] Checklist de §11 executado e resultado comunicado.
- [ ] `git diff --check` passou e o diff foi revisado.
- [ ] `README.md` e este arquivo atualizados quando a estrutura, stack, comando ou convenção mudou.
- [ ] PR (quando houver) descreve o que mudou, como testar e os riscos.

---

## 14. O que não fazer

- Não invente projetos, cargos, datas, contatos, fotos, depoimentos ou números.
- Não publique dado pessoal sem autorização do titular.
- Não finja envio de formulário nem sucesso de integração inexistente.
- Não adicione framework, biblioteca, bundler, Tailwind, Bootstrap ou CDN sem decisão explícita.
- Não use Google Fonts, analytics, pixel ou cookie de terceiro sem aprovação.
- Não esconda conteúdo atrás de JavaScript; não use `innerHTML`/`eval` com dados externos.
- Não crie "versão 2" do mesmo arquivo, backup de lógica ou página duplicada.
- Não use `!important`, `outline: none` sem substituto, `alt` com nome de arquivo ou link externo sem `rel` seguro.
- Não crie comando, alvo de Makefile ou teste que finja validação.
- Não documente como existente algo que ainda não foi criado.
- Não commite segredo, dado sensível, arquivo gerado ou diff sem revisão.

---

## 15. Decisões e pendências

| Item | Situação em 25/11/2026 |
|---|---|
| Nome de exibição | **Definido:** Matheus Oliveira em todo o site |
| Mapa de páginas | **Definido:** `Desktop-1` = home; `Desktop` = Sobre |
| Tratamento visual do hero | **Definido:** três linhas; "Product Designer" em `text/primary` e os demais trechos em `text/muted`, conforme referência enviada pelo titular em 25/11/2026 |
| Texto dos cases "Unificando produtos" e "Seguro veicular" | Pendente — fornecer pelo titular ou retirar os cards da home |
| Case de onboarding (`Shopbot.pdf`) | A decidir — incluir como página própria ou manter fora |
| URLs de CTAs e links | Links internos, "Ver projeto" e LinkedIn resolvidos (`https://www.linkedin.com/in/matheus-oliveira-b61917142/`); pendentes currículo, demo do ShopBot e link externo do WhatsApp Suite (B3) |
| Fonte tipográfica | A decidir — pilha do sistema usada como provisória; sugestão: Inter self-hosted |
| Imagens e `alt` | Capturas extraídas e convertidas para WebP; capturas de case são decorativas (`alt=""`) e o retrato usa descrição genérica — revisar com o titular (B8) |
| Domínio e hospedagem | A definir — não publicar URL inventada em `canonical`/`og:image`/`sitemap` |
| Favicon e Open Graph | Favicon próprio em `assets/favicon.svg`; `og:title`, `og:description`, `og:type` e `og:locale` presentes sem URL inventada |
| Idiomas adicionais | Fora da V1; site começa em pt-BR |
| Formulário de contato | A decidir; sem backend hoje, usar link confirmado |
| Tema escuro | A decidir; só se completo e aprovado |
| Analytics e política de privacidade | A decidir; nada instalado por padrão |
| Harness de lint/teste | A criar junto com o primeiro código que justifique |

Toda mudança nessas premissas atualiza este arquivo e o `README.md` na mesma entrega.

---

## 16. Referências

- `README.md` — visão geral, execução local e índice da documentação.
- `AGENTS.md` — este arquivo, fonte de verdade para agentes.
- `docs/00-inventario-pdfs.md` — PDFs, grid, tipografia, tokens e divergências.
- `docs/01-plano-implementacao.md` — mapa de páginas, estrutura e fases.
- `docs/02-tarefas.md` — backlog com IDs, dependências e status.
- `docs/fontes/textos-pdfs.md` — texto bruto dos PDFs; nunca publicar como está.
- `css/tokens.css` — única fonte de tokens visuais.
