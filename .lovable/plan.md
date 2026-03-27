

## Plano: Atualizar bloco de mini prova social

### O que muda

No `src/pages/Index.tsx` (linhas 140-166), substituir os 3 depoimentos curtos atuais por 2 depoimentos expandidos:

**Depoimento 1 — Carla Negrão** (texto longo, ~4 parágrafos conforme fornecido, com primeira frase em destaque visual — `text-lg font-medium` vs `text-base` no restante)

**Depoimento 2 — Juliana Zobaran** (texto curto, 2 frases, com primeira frase em destaque)

### Estilo visual
- Manter `blockquote` centralizado sem bordas/cards
- Primeira frase de cada depoimento: `text-lg md:text-xl font-medium` (leve destaque)
- Restante: `text-base md:text-lg italic` (como está)
- Nome/cargo: `text-sm text-muted-foreground` (menor contraste, mais sofisticado)
- Juliana passa a ter sobrenome "Zobaran" e cargo "Diretora LATAM"
- Aumentar `space-y-8` para `space-y-12` para mais respiro entre depoimentos

### Arquivo editado
- `src/pages/Index.tsx` — linhas 140-166

