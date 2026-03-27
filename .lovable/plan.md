

## Plano: Substituir cor accent por warm em toda a página

A cor `accent` (caramelo/dourado antigo) ainda aparece em ~30+ ocorrências no `Index.tsx`. Precisa ser trocada por `warm` (terracota/areia quente) para manter consistência com o título "O Próximo Passo" e os boxes de depoimento.

### Substituições em `src/pages/Index.tsx`

Trocar **todas** as ocorrências de:
- `text-accent` → `text-warm`
- `bg-accent` → `bg-warm`
- `border-accent` → `border-warm`

Isso afeta:
1. **Divider** — decoração `✦` e linhas
2. **FAQ chevron** — ícone de seta
3. **Hero** — badge "Grupo fechado", linha "Precisa decidir...", linha de reforço
4. **Seções escuras (bg-primary)** — ícones Check, ícone Shield (garantia), bullets do bloco consequência
5. **Sobre a facilitadora** — cargo "Estrategista Executiva"
6. **Detalhes práticos** — labels (Data, Horário, etc.)
7. **Investimento** — frase "Mas, em carreiras seniores..."
8. **Também no `SealBadge.tsx`** — `border-accent`, `ring-accent`, `text-accent` → `warm`

### Arquivos editados
- `src/pages/Index.tsx` — substituição global accent → warm
- `src/components/SealBadge.tsx` — mesma substituição

