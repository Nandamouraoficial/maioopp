

## Plano: Inverter a paleta — fundo claro (creme/cappuccino) com elementos escuros

### Resumo
Trocar o fundo da página de marrom escuro para um tom creme/cappuccino claro, e fazer os botões CTA ficarem com o marrom escuro. Textos passam a ser escuros sobre fundo claro. Manter a identidade terrosa premium, só invertendo claro ↔ escuro.

### Alterações

**Arquivo: `src/index.css`** — Inverter as variáveis CSS:

| Token | Atual (escuro) | Novo (claro) |
|---|---|---|
| `--background` | `30 20% 10%` (marrom escuro) | `30 25% 90%` (creme cappuccino) |
| `--foreground` | `35 30% 85%` (bege claro) | `30 18% 15%` (marrom escuro) |
| `--card` | `30 18% 13%` | `30 20% 95%` (creme mais claro) |
| `--card-foreground` | `35 30% 85%` | `30 18% 15%` |
| `--primary` | `30 40% 42%` (marrom médio) | `30 20% 12%` (marrom escuro — botão CTA) |
| `--primary-foreground` | `30 20% 96%` | `30 25% 92%` (creme claro — texto no botão) |
| `--secondary` | `30 15% 14%` | `30 18% 85%` (bege suave — seções alternadas) |
| `--secondary-foreground` | `35 30% 85%` | `30 18% 15%` |
| `--muted` | `30 12% 18%` | `30 15% 82%` |
| `--muted-foreground` | `30 15% 55%` | `30 15% 45%` |
| `--accent` | `35 55% 52%` | `35 45% 38%` (dourado mais escuro para contraste) |
| `--accent-foreground` | `30 20% 8%` | `30 25% 92%` |
| `--border` | `30 15% 22%` | `30 15% 78%` |
| `--input` | `30 15% 22%` | `30 15% 78%` |
| `--ring` | `30 40% 42%` | `30 20% 12%` |
| `--cta-hover` | `30 40% 35%` | `30 20% 18%` (marrom escuro hover) |
| `--hero-gradient` | tons escuros | gradiente creme suave |

**Arquivo: `src/pages/Index.tsx`** — Ajustes pontuais:
- Revisar classes com opacidades explícitas (ex: `bg-primary/5`, `bg-accent/5`) para garantir contraste no fundo claro
- O `shadow-primary/20` no CTA ficará com sombra escura (coerente)
- Verificar se textos `text-foreground` e `text-muted-foreground` mantêm legibilidade

### Resultado esperado
Página com fundo creme/cappuccino elegante, textos em marrom escuro, botão CTA em marrom escuro com texto claro. Mantém a sofisticação terrosa, agora em versão light.

