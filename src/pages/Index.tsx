import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users, Shield, Quote, ChevronDown } from "lucide-react";

import { useState, useEffect } from "react";

const CTA_URL = "https://pay.kiwify.com.br/X6CZPmQ";

const Divider = () => (
  <div className="flex items-center justify-center py-6">
    <span className="block w-16 h-px bg-warm/30" />
    <span className="mx-3 text-warm/40 text-sm">✦</span>
    <span className="block w-16 h-px bg-warm/30" />
  </div>
);

const FAQItem = ({ question, answer, defaultOpen = false }: { question: string; answer: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-muted/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="text-foreground font-bold text-lg pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-warm shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-0">
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-3">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const handleCTAClick = () => {
    if (typeof window !== "undefined" && (window as any).lintrk) {
      (window as any).lintrk("track", { conversion_id: 26913521 });
    }
    window.open(CTA_URL, "_blank");
  };

  const ctaButton = (
    <a onClick={handleCTAClick} className="cursor-pointer">
      <Button
        size="lg"
        className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-base sm:text-lg px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
        QUERO DECIDIR MEU PRÓXIMO MOVIMENTO
      </Button>
    </a>
  );

  const ctaButtonFinal = (
    <a onClick={handleCTAClick} className="cursor-pointer">
      <Button
        size="lg"
        className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-base sm:text-lg px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
        QUERO SAIR COM UMA DECISÃO TOMADA
      </Button>
    </a>
  );

  const ctaButtonPasso = (
    <a onClick={handleCTAClick} className="cursor-pointer">
      <Button
        size="lg"
        className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-base sm:text-lg px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
        QUERO DEFINIR MEU PRÓXIMO PASSO
      </Button>
    </a>
  );

  return (
    <main className="min-h-screen bg-background text-foreground font-body scroll-smooth">
      

      {/* ═══════════ 1. HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-5 sm:px-6 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-foreground text-center lg:text-left overflow-hidden">
              <p className="text-warm text-xs sm:text-sm uppercase tracking-widest font-bold mb-4">Imersão Presencial Online · Maio 2026</p>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-warm mb-6 tracking-tight">
                O Próximo Passo
              </p>
              <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4">
                Você não precisa de mais informação.
                <br />
                <span className="text-warm">Precisa decidir o próximo movimento da sua carreira.</span>
              </h1>
              <p className="text-lg sm:text-lg md:text-xl font-light leading-relaxed mb-3 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                Uma imersão estratégica para quem não pode mais adiar uma decisão de carreira.
              </p>
              <p className="text-base sm:text-base text-warm font-semibold mb-10 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                Clareza, direção e um plano estruturado para os próximos 30 dias.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <span className="inline-block text-xs uppercase tracking-wider font-bold text-warm border border-warm/30 bg-warm/5 rounded-full px-4 py-1.5">
                  Grupo fechado para até 15 executivos
                </span>
                {ctaButton}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm opacity-80">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 16 de maio</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 9h às 15h</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Online e ao vivo</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15 vagas</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/images/sobre-poltrona.png"
                alt="Fernanda Moura — Estrategista Executiva de Carreira"
                className="w-full max-w-md lg:max-w-lg max-h-[400px] rounded-2xl shadow-2xl object-cover object-[center_15%]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MINI PROVA SOCIAL ═══════════ */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            O que acontece quando essa decisão é feita com método
          </h2>
          <div className="space-y-12">
            <blockquote className="text-center">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-3">
                "Minha carreira estava indo bem — resultados, reconhecimento, tudo certo por fora.
                Mas eu não tinha clareza sobre o próximo passo."
              </p>
              <p className="text-base md:text-lg italic text-foreground/85 leading-relaxed mb-3">
                "A Fernanda não me disse o que fazer.
                Ela estruturou comigo os caminhos e colocou as decisões na mesa."
              </p>
              <p className="text-base md:text-lg italic text-foreground/85 leading-relaxed mb-3">
                "Foi a primeira vez que tratei minha carreira como uma decisão estratégica — não como um problema emocional."
              </p>
              <p className="text-base md:text-lg italic text-foreground/85 leading-relaxed mb-4">
                "Saí com direção. E com um plano claro para executar."
              </p>
              <footer className="text-sm text-muted-foreground">
                — Carla Negrão <span className="text-warm">· Executiva de Assuntos Regulatórios (SRA)</span>
              </footer>
            </blockquote>

            <blockquote className="text-center">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-3">
                "Eu já tinha resultado. O que faltava era clareza sobre o próximo passo."
              </p>
              <p className="text-base md:text-lg italic text-foreground/85 leading-relaxed mb-4">
                "Saí com um direcionamento estruturado — e com segurança para me posicionar além da minha área técnica."
              </p>
              <footer className="text-sm text-muted-foreground">
                — Juliana Zobaran <span className="text-warm">· Diretora LATAM</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 2. PARA QUEM É ═══════════ */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-6">
            Para quem é essa imersão
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Você não está em crise — mas sabe que precisa decidir melhor o próximo movimento.
          </p>
          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Você ocupa uma posição de liderança ou influência há anos",
              "Sabe que precisa tomar uma decisão sobre carreira, mas não quer agir por impulso",
              "Já investiu em cursos e mentorias que não mudaram o que realmente importa",
              "Quer estruturar os próximos 1 a 3 anos com critério — não por reação ao mercado",
              "Precisa de um espaço estratégico, não motivacional, para pensar o próximo movimento",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg md:text-xl text-primary-foreground/90">
                <Check className="w-5 h-5 text-warm mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 max-w-xl mx-auto text-center">
            <p className="text-primary-foreground font-bold text-lg md:text-xl mb-2">
              Você não precisa estar em crise para participar.
            </p>
            <p className="text-primary-foreground/70 text-base">
              Mas se já percebeu que deixar a carreira no automático tem um custo, essa é a sala certa.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 3. O QUE A PARTICIPANTE VIVE ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que acontece em 6 horas de imersão
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Cada etapa foi desenhada para levar você de um cenário indefinido a uma decisão concreta.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Você identifica com precisão o que está travando seu avanço hoje",
              "Analisa os caminhos possíveis — e descarta os que parecem bons, mas não fazem sentido para o seu momento",
              "Define o próximo movimento com critério, não por pressão ou impulso",
              "Sai com um plano estruturado para os próximos 30 dias",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-warm/80 rounded-xl p-6 text-left hover:shadow-md transition-shadow bg-warm"
              >
                <span className="text-primary-foreground font-display text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-primary text-lg md:text-xl mt-3">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl py-8 px-6 mb-10">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Você não sai com mais conteúdo.
            </p>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2">
              Sai com uma decisão tomada.
            </p>
          </div>

          {ctaButton}
        </div>
      </section>

      <Divider />

      {/* ═══════════ 4. O QUE ELA SAI LEVANDO ═══════════ */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
            O que você leva ao final da imersão
          </h2>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              "Uma decisão clara sobre seu próximo movimento de carreira",
              "Um diagnóstico objetivo do que está travando seu avanço",
              "Um mapa dos caminhos possíveis com análise estratégica real",
              "Um plano de ação para os próximos 30 dias — da intenção à execução",
              "Clareza sobre o que parar de fazer para não continuar investindo no caminho errado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg md:text-xl text-primary-foreground/90">
                <Check className="w-5 h-5 text-warm mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 5. POR QUE ESSA IMERSÃO É DIFERENTE ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            O problema não é falta de capacidade.
            <br />
            É excesso de caminho sem critério.
          </h2>
          <div className="text-xl md:text-2xl leading-relaxed text-muted-foreground space-y-6 max-w-2xl mx-auto">
            <p>
              Você pode continuar estudando.
              <br />Pode fazer mais um curso.
              <br />Pode esperar a próxima oportunidade aparecer.
            </p>
            <p>
              Mas isso não garante direção.
              <br />Nem posicionamento.
              <br />Nem movimento real.
            </p>
            <p className="font-bold text-foreground">
              O que muda a carreira de alguém sênior não é consumir mais informação.
              <br />É decidir com método.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-14 max-w-2xl mx-auto">
            {[
              { label: "Grupo fechado", detail: "Máximo 15 participantes" },
              { label: "Método real", detail: "Não é palestra ou workshop genérico" },
              { label: "Resultado concreto", detail: "Você sai com decisão e plano" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-5 text-center">
                <p className="text-warm font-bold text-sm uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 6. SOBRE FERNANDA MOURA ═══════════ */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-14">
            Quem conduz
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/images/foto_terno.jpeg"
                alt="Fernanda Moura — Estrategista Executiva"
                className="w-72 md:w-80 rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                Fernanda Moura
              </h3>
              <p className="text-warm font-bold mb-6">
                Estrategista Executiva de Carreira
              </p>
              <div className="text-lg leading-relaxed text-primary-foreground/70 space-y-4">
                <p>
                  26 anos dentro do sistema corporativo —{" "}
                  <strong className="text-primary-foreground">Coca-Cola, Cargill, Kraft Heinz, Kimberly-Clark e MBRF (Sadia e Perdigão)</strong>.
                  Passou por gerência, diretoria e C-Level internacional para América Latina e América Central, liderando projetos globais e equipes em 15 países simultaneamente.
                </p>
                <p>
                  Em 2021, fez o que muitos executivos pensam mas não executam:{" "}
                  <strong className="text-primary-foreground">parou. Intencionalmente.</strong>{" "}
                  Para decidir o próximo movimento com método — não com impulso.
                </p>
                <p>
                  Já conduziu 23 transições profissionais reais na própria carreira. Sabe exatamente o que funciona — e o que é perda de tempo.
                </p>
                 <p className="font-bold text-primary-foreground">
                  Quem conduz essa imersão não fala de carreira de fora.
                  Tomou essas decisões de dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 7. DEPOIMENTOS ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Quem já passou pela consultoria estratégica
          </h2>

          <div className="space-y-8">
            {/* Carla */}
            <div className="bg-warm border border-warm/80 rounded-2xl p-8 md:p-10 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <div className="pt-8 space-y-4">
                <p className="text-lg md:text-xl text-primary leading-relaxed">
                  "Minha carreira como executiva estava indo bem. Bônus, promoções, resultados e reconhecimento — tudo o que o mercado usa para medir sucesso. Mas por dentro eu estava quebrando, e ninguém via. A Fernanda não me disse o que fazer — ela montou a estratégia junto comigo e colocou as decisões na mesa para eu escolher. Foi a primeira vez que alguém tratou minha carreira com método e como decisão estratégica, não como problema emocional. Resultado: saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="font-bold text-primary">Carla Negrão</p>
                <p className="text-primary/70 text-sm">Ex-executiva de Multinacional | Fundadora, CN Food Consulting</p>
              </div>
            </div>

            {/* Juliana */}
            <div className="bg-warm border border-warm/80 rounded-2xl p-8 md:p-10 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <div className="pt-8 space-y-4">
                <p className="text-lg md:text-xl text-primary leading-relaxed">
                  "Eu já era Diretora de Impostos para a América Latina. Resultado não faltava. O que faltava era clareza sobre o próximo passo — e a segurança para me posicionar além da área técnica. A Fernanda montou comigo uma estratégia que eu não conseguia enxergar sozinha. Ganhei estrutura na comunicação, presença nos fóruns que importam e passei a atrair as oportunidades certas em vez de esperar por elas. Não precisei mudar de empresa. Mudei de posicionamento."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="font-bold text-primary">Juliana Zobaran</p>
                <p className="text-primary/70 text-sm">Diretora de Impostos para América Latina · Vantiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 7.5. BLOCO DE CONSEQUÊNCIA ═══════════ */}
      <section className="relative bg-background py-24 md:py-36">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Se você não decidir agora
          </h2>
          <div className="text-xl md:text-2xl leading-loose text-muted-foreground space-y-8">
            <p>
              A maioria das carreiras não trava por falta de capacidade.
              <br />
              <strong className="text-foreground">Trava por falta de decisão.</strong>
            </p>
            <p>
              E o que acontece não é imediato —
              <br />é silencioso.
            </p>
            <p>
              Você continua entregando bem,
              <br />continua sendo reconhecido,
              <br />continua ocupado…
            </p>
            <p className="text-foreground font-semibold">
              Mas sem perceber, começa a repetir o mesmo ciclo:
            </p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-warm mt-1">•</span>
                <span>mais do mesmo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warm mt-1">•</span>
                <span>menos crescimento real</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warm mt-1">•</span>
                <span>decisões adiadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-warm mt-1">•</span>
                <span>oportunidades que passam</span>
              </li>
            </ul>
            <p>
              E quando olha para trás,
              <br /><strong className="text-foreground">passou mais um ano — sem mudança relevante.</strong>
            </p>
            <p>
              <strong className="text-foreground">O custo de não decidir</strong> raramente aparece no curto prazo.
              <br />Mas se acumula.
            </p>
            <p className="text-foreground font-bold text-xl">
              E, em algum momento, cobra.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-foreground font-semibold text-lg leading-relaxed">
                O Próximo Passo existe exatamente para interromper esse ciclo —
                <br />antes que ele se repita mais uma vez.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 8. INFORMAÇÕES PRÁTICAS + INVESTIMENTO ═══════════ */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Informações práticas
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            {[
              { icon: Calendar, label: "16 de maio de 2026" },
              { icon: Clock, label: "9h às 15h (horário de Brasília)" },
              { icon: Monitor, label: "Online e ao vivo" },
              { icon: Users, label: "Grupo fechado — até 15 vagas" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-4">
                <Icon className="w-5 h-5 text-warm shrink-0" />
                <span className="text-primary-foreground text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-6 max-w-xl mx-auto mb-10">
            <p className="text-primary-foreground text-lg leading-relaxed">
              Adiar essa decisão parece seguro.
              <br />
              <strong className="text-warm">Mas, em carreiras seniores, costuma ser caro.</strong>
            </p>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Investimento
          </h3>

          <div className="bg-primary-foreground/10 rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-primary-foreground/70 text-base leading-relaxed">
              Uma sessão individual com um ex-executivo C-level custa entre{" "}
              <strong className="text-primary-foreground"><strong className="text-primary-foreground">R$ 2.000 e R$ 10.000</strong>.</strong>.
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed mt-4">
              Nesta imersão, você participa de um dia inteiro de trabalho estratégico, com profundidade real e aplicação direta no seu contexto, por:
            </p>
          </div>

          <div className="bg-primary-foreground/10 rounded-2xl py-10 px-8 mb-8 inline-block">
            <p className="font-body text-primary-foreground text-xl md:text-2xl font-semibold">
              12x de R$ 139,90
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2">ou R$ 1.497 à vista</p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <p className="text-primary-foreground/70 text-base">
              O grupo é reduzido para garantir qualidade nas discussões e profundidade na condução.
            </p>
            <p className="text-primary-foreground font-bold text-base mt-2">
              Por isso, as vagas são limitadas.
            </p>
          </div>

          

          {ctaButtonFinal}

          {/* Garantia */}
          <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-8 flex flex-col items-center gap-4 max-w-xl mx-auto mt-12">
            <Shield className="w-10 h-10 text-warm" />
            <p className="font-display text-2xl font-bold text-primary-foreground">
              Garantia de resultado
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed">
              Se ao final de O Próximo Passo você não sair com sua decisão sobre o próximo movimento e com um plano estruturado para os próximos 30 dias, eu devolvo 100% do seu investimento.
            </p>
            <p className="text-primary-foreground font-bold text-lg">
              Sem burocracia.
            </p>
          </div>

          {/* Amigos do Bem */}
          <a
            href="https://www.amigosdobem.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-5 max-w-xl mx-auto mt-8 hover:bg-primary-foreground/15 transition-colors"
          >
            <img
              src="/images/amigos-do-bem-icon.png"
              alt="ONG Amigos do Bem"
              className="w-14 h-14 object-contain shrink-0"
            />
            <p className="text-primary-foreground/70 text-sm text-left">
              Parte das vendas desta imersão é direcionada para a ONG{" "}
              <strong className="text-primary-foreground">Amigos do Bem</strong>.
            </p>
          </a>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 9. FAQ ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            <FAQItem
              defaultOpen
              question="Transição de carreira é só para quem está desempregado?"
              answer={<>
                <p>Não. Transição não começa quando você sai de uma empresa. Começa quando você percebe que continuar como está já não é suficiente.</p>
                <p>A maioria dos executivos que participam de O Próximo Passo não está desempregado — está no ponto em que precisa decidir com mais critério.</p>
                <p className="font-semibold text-foreground">E adiar essa decisão costuma custar mais do que parece.</p>
              </>}
            />
            <FAQItem
              question="Preciso estar em transição?"
              answer={<>
                <p>Não no sentido tradicional. Mas precisa estar em um momento em que continuar como está já não é suficiente.</p>
                <p className="font-semibold text-foreground">Esse é exatamente o ponto em que O Próximo Passo mais gera valor.</p>
              </>}
            />
            <FAQItem
              question="Funciona para quem já está bem na carreira?"
              answer={<>
                <p>Sim. A maioria dos participantes já tem uma carreira estruturada.</p>
                <p className="font-semibold text-foreground">O ponto não é "dar certo" — é garantir que o próximo movimento seja feito com critério.</p>
              </>}
            />
            <FAQItem
              question="O que acontece depois da imersão?"
              answer={<>
                <p>Você sai com uma decisão e um plano claro para os próximos 30 dias.</p>
                <p>Se quiser aprofundar, existe continuidade em mentoria — mas a imersão já entrega avanço concreto.</p>
              </>}
            />
            <FAQItem
              question="Como funciona a garantia?"
              answer={<>
                <p>Se você não sair com clareza e um plano estruturado, pode solicitar reembolso integral.</p>
                <p className="font-semibold text-foreground">Sem burocracia.</p>
              </>}
            />
          </div>
        </div>
      </section>

      {/* ═══════════ 10. CTA FINAL ═══════════ */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(var(--background) / 0.1), hsla(var(--background) / 0.35) 50%, hsla(var(--background) / 0.8) 75%, hsl(var(--background)))" }} />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed mb-4">
            Se você já percebeu que deixar a carreira
            <br />no automático pode custar caro,
            <br />adiar essa decisão não resolve.
          </p>
          <p className="text-lg text-warm font-bold mb-10">
            O Próximo Passo é a sala para decidir com método.
          </p>
          {ctaButtonPasso}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 sm:px-6 text-center text-foreground">
          <p className="font-display text-lg font-bold">Fernanda Moura</p>
          <p className="text-sm opacity-70 mt-1">Estrategista Executiva de Carreira</p>
          <p className="text-xs opacity-50 mt-4">© 2026 O Próximo Passo</p>
        </div>
      </footer>

      {/* ═══════════ STICKY CTA MOBILE ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a onClick={handleCTAClick} className="cursor-pointer block">
          <Button
            size="lg"
            className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-4 py-5 rounded-lg shadow-lg tracking-wide w-full"
          >
            QUERO DECIDIR MEU PRÓXIMO MOVIMENTO
          </Button>
        </a>
      </div>

      {/* Spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </main>
  );
};

export default Index;
