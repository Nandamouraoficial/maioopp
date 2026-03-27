

## Plano: Reordenar fotos e garantir fundo creme/cappuccino

### 1. Reordenar as 3 imagens

| Seção | Atual | Nova |
|---|---|---|
| Hero (topo) | `foto_terno.jpeg` | `final-equipe.png` |
| Sobre/Bio | `sobre-poltrona.png` | `foto_terno.jpeg` |
| Final | `final-equipe.png` | `sobre-poltrona.png` |

**Arquivo:** `src/pages/Index.tsx` — trocar os `src` das 3 tags `<img>` nas linhas ~98, ~258 e ~467.

### 2. Confirmar fundo creme/cappuccino

O CSS (`src/index.css`) já possui `--background: 30 25% 90%` (creme claro). Se a mudança não está aparecendo no preview, pode ser cache. Vou garantir que o valor está correto e, se necessário, ajustar a luminosidade para um tom mais quente/caramelo (ex: `30 30% 88%`).

### Arquivos editados
- `src/pages/Index.tsx` — reordenar imagens
- `src/index.css` — confirmar/ajustar tom do background

