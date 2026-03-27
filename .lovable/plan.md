

## Plano: Adicionar evento de conversão do Meta Pixel nos botões de checkout

### Alteração em `src/pages/Index.tsx`

Na função `handleCTAClick` (linha 39-44), adicionar `fbq('track', 'InitiateCheckout')` antes do `window.open`:

```ts
const handleCTAClick = () => {
  if (typeof window !== "undefined" && (window as any).lintrk) {
    (window as any).lintrk("track", { conversion_id: 26913521 });
  }
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout');
  }
  window.open(CTA_URL, "_blank");
};
```

Isso dispara o evento padrão `InitiateCheckout` do Meta Pixel em todos os botões de CTA da página, já que todos usam essa mesma função.

### Resultado
Cada clique em botão de checkout será rastreado como evento de conversão no Meta Ads Manager.

