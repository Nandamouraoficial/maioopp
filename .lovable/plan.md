

## Plano: Aplicar cor caramelo/dourada como fundo em seções da página

### Cor identificada
A cor da imagem corresponde ao `--accent` atual (`hsl(33, 42%, 54%)`) — o caramelo dourado.

### Onde aplicar

**1. Seção de Depoimentos (seção 7, linha ~298)**
- Fundo da seção: de `bg-background` para `bg-accent`
- Textos: `text-accent-foreground` (claro) para contraste
- Cards dos depoimentos: `bg-accent-foreground/10` com `border-accent-foreground/20`
- Textos dentro dos cards ajustados para legibilidade sobre fundo dourado

**2. Seção Hero (topo) ou rodapé — mais um local com essa cor**
Opção sugerida: aplicar no **rodapé/seção final de CTA** (última seção, após FAQ) como fundo `bg-accent`, criando um fechamento visual forte com a mesma cor.

### Arquivo editado
- `src/pages/Index.tsx` — classes de cor nas seções de depoimentos e rodapé

### Resultado
Alternância visual: creme → marrom escuro → creme → **caramelo dourado** (depoimentos) → creme → marrom escuro → creme → **caramelo dourado** (rodapé)

