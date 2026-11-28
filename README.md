# Matheus Oliveira — Portfólio

Portfólio pessoal de Matheus Oliveira: site estático em HTML, CSS e JavaScript vanilla, sem framework e sem build obrigatório.

**Status em 25/11/2026:** fundação, home, página Sobre e 3 cases implementados e verificados em 375/768/1280 px, com favicon e Open Graph básico. Faltam URLs externas, fonte definitiva, domínio e o texto de 2 cases.

## Executar localmente

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000/`. Não há dependências de instalação na V1.

## Páginas implementadas

| URL | Conteúdo |
|---|---|
| `/` | Hero, resumo Sobre, 3 cards com fonte aprovada, CTA e rodapé |
| `/sobre/` | Trajetória, "+7 anos", timeline 2019–2026 e propósito |
| `/projetos/follow-up-24h/` | Case Follow-up |
| `/projetos/whatsapp-suite/` | Case WhatsApp Suite |
| `/projetos/shopbot/` | Case Shopbot |

## Documentação

| Arquivo | Conteúdo |
|---|---|
| `AGENTS.md` | Regras para agentes e pessoas que trabalham no repositório |
| `docs/00-inventario-pdfs.md` | Inventário dos 7 PDFs, tokens de cor, tipografia, grid e divergências |
| `docs/01-plano-implementacao.md` | Mapa de páginas, estrutura de arquivos, fases e critérios de pronto |
| `docs/02-tarefas.md` | Backlog com IDs, dependências, bloqueios, status e verificação executada |
| `docs/03-verificacao-figma.md` | Auditoria de coerência com o Figma: tokens, imagens e páginas |
| `docs/fontes/textos-pdfs.md` | Texto bruto extraído dos PDFs (referência, não publicar como está) |

## Estrutura

```text
index.html                 home
sobre/index.html           página Sobre
projetos/<slug>/index.html páginas de case
css/                       tokens.css, base.css, layout.css, components.css
js/                        main.js e módulo de navegação
assets/images/             WebP extraídas dos PDFs de referência
assets/favicon.svg         favicon próprio com as iniciais MO
docs/                      inventário, plano, tarefas, verificação do Figma e fontes
system deginer/            PDFs de origem, somente leitura
```

## Pendências

- **B2:** texto aprovado dos cases "Unificando produtos" e "Seguro veicular" — por isso não há cards/páginas para eles.
- **B3:** LinkedIn resolvido (`https://www.linkedin.com/in/matheus-oliveira-b61917142/`). Faltam currículo, demo do ShopBot e link externo do WhatsApp Suite; esses trechos aparecem como texto com aviso visível, nunca como link falso.
- **B4:** fonte tipográfica definitiva. Hoje a pilha do sistema é usada como provisória.
- **B5:** domínio para `canonical`, `og:image`, `sitemap.xml` e `robots.txt`. `og:title`, `og:description`, `og:type` e `og:locale` já estão presentes sem URL inventada.
- **B6:** decidir se o case extra de onboarding (`Shopbot.pdf`) entra no site.
- **B8:** revisar as descrições de `alt` das imagens com o titular; as capturas de case estão marcadas como decorativas (`alt=""`) e o retrato usa descrição genérica.

IDs e dependências completos em `docs/02-tarefas.md`. Os achados da auditoria com o Figma — incluindo a imagem de retrato da home e o asset `shopbot-02.webp` — estão em `docs/03-verificacao-figma.md`.

> Os PDFs em `system deginer/` são material de origem somente leitura. O nome publicado é **Matheus Oliveira**; os trechos "Matheus Almeida" dos PDFs foram corrigidos na transcrição.
