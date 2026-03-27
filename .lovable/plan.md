

## Plano: Melhorar tipografia mobile para maior legibilidade

### Problema
Vários textos na página usam tamanhos pequenos no mobile (`text-sm`, `text-base`, `text-lg`) que podem dificultar a leitura em telas menores.

### Alterações no `src/pages/Index.tsx`

**1. Corpo de texto geral** — Aumentar tamanhos base em mobile:
- Parágrafos com `text-base` → `text-base sm:text-base` (manter) ou subir para `text-lg` onde apropriado
- Parágrafos com `text-lg` → `text-lg md:text-xl` 
- Parágrafos com `text-lg md:text-xl` → `text-xl md:text-2xl` nos blocos de impacto

**2. Seções específicas a ajustar:**

| Seção | Elemento | De | Para |
|-------|----------|-----|------|
| Hero (L91) | Subtítulo warm | `text-sm` | `text-base sm:text-sm` — manter legível |
| Hero (L100-104) | Descrição e frase | `text-base sm:text-lg` | `text-lg sm:text-lg md:text-xl` |
| Para quem é (L184-198) | Texto e lista | `text-lg` | `text-lg md:text-xl` |
| O que acontece (L220, 235) | Descrição e cards | `text-lg` | `text-lg md:text-xl` |
| Diferencial (L288-302) | Blocos de texto | `text-lg md:text-xl` | `text-xl md:text-2xl` |
| Depoimentos (L382-397) | Citações | `text-lg` | `text-lg md:text-xl` |
| Consequência (L417-467) | Parágrafos | `text-lg md:text-xl` | `text-xl md:text-2xl` |
| FAQ (L24) | Perguntas | `text-base` | `text-lg` |
| FAQ (L30) | Respostas | `text-base` | `text-base md:text-lg` |
| CTA buttons (L50-72) | Texto botão | `text-sm sm:text-base` | `text-base sm:text-lg` |
| Footer/meta textos | `text-sm` | `text-sm` → `text-base sm:text-sm` onde necessário |

**3. Títulos** — Garantir escala mínima maior em mobile:
- `text-2xl md:text-3xl` → `text-2xl sm:text-3xl md:text-4xl` nos h2
- `text-3xl md:text-4xl` → `text-3xl sm:text-3xl md:text-4xl` (já ok)

### Arquivo editado
- `src/pages/Index.tsx` — ajustes de classes Tailwind em ~20 locais

### Resultado esperado
Textos visivelmente maiores e mais confortáveis de ler em telas de celular, sem quebrar o layout desktop.

