

## Plano: Melhorar contraste nos depoimentos + cor caramelo nos boxes da imersão

### 1. Depoimentos — melhorar contraste (linhas 306-331)
- Trocar texto dos depoimentos de `text-accent-foreground/80` para `text-primary` (marrom escuro) — muito mais legível sobre fundo caramelo
- Nome: de `text-accent-foreground` para `text-primary font-bold`
- Cargo: de `text-accent-foreground/60` para `text-primary/70`
- Ícone aspas: de `text-accent-foreground/30` para `text-primary/20`
- Borda divisória: de `border-accent-foreground/20` para `border-primary/20`

### 2. Boxes "O que acontece em 6 horas" — aplicar caramelo (linhas 157-163)
- Trocar `bg-card` por `bg-accent` nos 4 cards (1, 2, 3, 4)
- Número: manter `text-accent` → trocar para `text-primary-foreground` ou `text-white`
- Texto: de `text-foreground` para `text-primary` (escuro, legível sobre caramelo)
- Borda: de `border-border` para `border-accent/80`

### Arquivo editado
- `src/pages/Index.tsx`

