

## Plano: Tornar linguagem inclusiva (não exclusiva para mulheres) e inverter ordem das fotos

### O que muda

**1. Remover o SealBadge ("Edição Exclusiva para Mulheres")**
- Remover o import e o componente `<SealBadge />` do `Index.tsx`

**2. Linguagem inclusiva — de feminino para neutro/masculino genérico**
Todas as referências a "executivas" passam para "executivos", e ajustes similares:
- "executivas e profissionais seniores" → "executivos e profissionais seniores"
- "Grupo fechado para até 15 executivas" → "Grupo fechado para até 15 executivos"
- "muitas executivas pensam" → "muitos executivos pensam"
- "da executiva bem-sucedida" → "do executivo bem-sucedido" (depoimento da Carla)
- "a participante" → "o participante" (comentários internos)
- Qualquer outra referência feminina exclusiva no corpo do texto

**3. Inverter a ordem das fotos**
Atualmente:
1. Hero → `foto_terno.jpeg`
2. Sobre → `sobre-poltrona.png`
3. Final → `final-equipe.png`

Nova ordem:
1. Hero → `final-equipe.png`
2. Sobre → `foto_terno.jpeg`
3. Final → `sobre-poltrona.png`

### Arquivos editados
- `src/pages/Index.tsx` — todas as alterações acima

