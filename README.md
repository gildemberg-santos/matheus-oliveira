# Matheus Oliveira — Portfólio

Portfólio pessoal de Matheus Oliveira: site estático em HTML, CSS e JavaScript vanilla, sem framework e sem build obrigatório.

**Status em 25/11/2026:** documentação de referência, plano e backlog concluídos. Nenhuma página do site foi implementada ainda.

## Documentação

| Arquivo | Conteúdo |
|---|---|
| `AGENTS.md` | Regras para agentes e pessoas que trabalham no repositório |
| `docs/00-inventario-pdfs.md` | Inventário dos 7 PDFs, tokens de cor, tipografia, grid e divergências |
| `docs/01-plano-implementacao.md` | Mapa de páginas, estrutura de arquivos, fases e critérios de pronto |
| `docs/02-tarefas.md` | Backlog com IDs, dependências, bloqueios e status |
| `docs/fontes/textos-pdfs.md` | Texto bruto extraído dos PDFs (referência, não publicar como está) |

## Material de origem

`system deginer/` contém os 7 PDFs das telas e do design system. É **material de origem somente leitura**: não editar nem publicar. O nome a usar no site é **Matheus Oliveira** (os PDFs têm trechos com "Matheus Almeida", que devem ser corrigidos na transcrição).

## Estrutura prevista

```text
index.html                 home
sobre/index.html           página Sobre
projetos/<slug>/index.html páginas de case
css/                       tokens.css, base.css, layout.css, components.css
js/                        main.js e módulos pequenos
assets/                    imagens extraídas e fontes self-hosted
docs/                      inventário, plano, tarefas e fontes
```

## Rodar localmente

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000/`. Não há dependências de instalação na V1.

## Pendências antes da implementação

- Texto aprovado dos cases "Unificando produtos" e "Seguro veicular" (sem PDF).
- URLs reais de LinkedIn, currículo, demos e links "Ver projeto".
- Definição da fonte tipográfica (sugestão: Inter self-hosted).
- Decisão sobre incluir o case de onboarding que não aparece na home.
- Domínio definitivo para `canonical`, Open Graph, `sitemap.xml` e `robots.txt`.

Detalhes e IDs de tarefas em `docs/02-tarefas.md`.
