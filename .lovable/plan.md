

## Plano: Substituir Meta Pixel

Trocar o pixel atual (ID `4320288374856933`) pelo novo (ID `362447350174886`) no `index.html`.

### Alterações em `index.html`

1. **Linha 61**: Alterar `fbq('init', '4320288374856933')` para `fbq('init', '362447350174886')`
2. **Bloco `<noscript>` no `<body>`** (~linha 78): Atualizar a URL da imagem de fallback de `id=4320288374856933` para `id=362447350174886`

Nenhum outro arquivo precisa ser alterado.

